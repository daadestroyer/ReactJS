import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Badge, Card, CardBody, CardHeader, CardText, Col, Container, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import Base from '../Components/Base'
import { getAllPosts } from '../Services/PostService'
import Post from './Post'

const NewsFeeds = () => {


    const [postData, setPostData] = useState({
        content: [],
        totalPages: '',
        totalElements: '',
        lastPage: false,
        pageNumber: ''
    });

    const [sorting, setSorting] = useState({
        sortDir: 'asc'
    }, [])

    const [page, setPageSize] = useState({
        pageSize: '3'
    }, [])

    const changeSorting = (event) => {
        setSorting({
            sortDir: event.target.value
        })
    }
    const changePageSize = (event) => {
        setPageSize({
            pageSize: event.target.value
        })
    }

    useEffect(() => {
        // load all the post from server
        getAllPosts(0, page.pageSize, sorting.sortDir)
            .then((data) => {
                console.log(data)
                setPostData(data)
            }).catch((error) => {
                console.log(error)
                // toast.error('something went wrong')
            });

    }, [sorting, page])

    const changePage = (pageNumber = 0) => {
        if (pageNumber > postData.pageNumber && postData.lastPage) {
            return
        }
        if (pageNumber < postData.pageNumber && postData.pageNumber == 0) {
            return
        }
        getAllPosts(pageNumber, page.pageSize,sorting.sortDir)
            .then((data) => {
                setPostData(data)
                window.scroll(0, 0)
            }).catch((error) => {
                console.log(error)

            })
    }


    return (
        <Base>

            <Container>

                <Row>
                    <Col md={{ size: 3 }} className='p-2'>

                        <Card>
                            <CardHeader><b>Additional Filters</b></CardHeader>
                            <CardBody className='bg-light'>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Sort by ascending/descending order
                                    </Label>
                                    <Input type='select' name='sortDir' onChange={(e) => changeSorting(e, 'sortDir')}>
                                        <option disabled selected>--Sorting Order--</option>
                                        <option value='asc'>
                                            Ascending
                                        </option>
                                        <option value='desc'>
                                            Descending
                                        </option>

                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Change Page Size
                                    </Label>
                                    <Input type='select' name='pageSize' onChange={(e) => changePageSize(e, 'pageSize')}>
                                        <option disabled selected>--Choose Page Size--</option>
                                        <option value='3' disabled={postData.totalElements < 3}>3</option>
                                        <option value='5' disabled={postData.totalElements < 5}>5</option>
                                        <option value='10' disabled={postData.totalElements < 10}>10</option>
                                        <option value='15' disabled={postData.totalElements < 15}>15</option>
                                        <option value='20' disabled={postData.totalElements < 20}>20</option>
                                    </Input>
                                </FormGroup>

                            </CardBody>

                        </Card>
                    </Col>
                    <Col md={{ size: 9 }}>
                        <Card className='m-3 bg-light'  >
                            <h5 className='m-1' style={{ fontSize: 20 }}>
                                <Badge color="danger" pill>
                                    Total Blogs : {postData.totalElements}
                                </Badge>{" "}
                                <Badge color="primary" pill>
                                    Last Page : {postData.lastPage ? 'Yes' : 'No'}
                                </Badge>{" "}
                                <Badge color="primary" pill>
                                    Page No : {postData.pageNumber + 1}/{postData.totalPages}
                                </Badge>{" "}
                                <Badge color="primary" pill>
                                    Blogs Per Page : {page.pageSize}
                                </Badge>
                            </h5>
                        </Card>
                        {
                            postData.content.map((post) => (
                                <Post post={post} key={post.postId} />
                            ))
                        }


                    </Col>
                    <Col md={{ size: 12, offset: 5 }}>
                        <Container className='text-center mt-3'>
                            <Pagination>

                                <PaginationItem onClick={() => changePage(postData.pageNumber - 1)} disabled={postData.pageNumber == 0}>
                                    <PaginationLink
                                        href="#"
                                        previous

                                    />
                                </PaginationItem>

                                {
                                    [...Array(postData.totalPages)].map((item, index) => (
                                        <PaginationItem onClick={() => changePage(index)} active={index == postData.pageNumber} key={index}>
                                            <PaginationLink >
                                                {index + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))
                                }

                                <PaginationItem onClick={() => changePage(postData.pageNumber + 1)} disabled={postData.lastPage}>
                                    <PaginationLink
                                        href="#"
                                        next
                                    />
                                </PaginationItem>

                            </Pagination>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default NewsFeeds