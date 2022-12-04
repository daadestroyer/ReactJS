import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Badge, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { getCurrentUser } from '../../Authentication/Auth';
import Base from '../../Components/Base'
import { deletePostByPostId, getAllPostByUserId } from '../../Services/PostService';
import Post from '../Post';

const MyPost = () => {

    // for current login user
    const [userData, setUserData] = useState({});
    const [myPost, setMyPost] = useState([]);
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

    function loadPostData() {
        getAllPostByUserId(getCurrentUser().userId)
            .then((data) => {
                console.log(data)
                setMyPost([...data])
                console.log(myPost)
            }).catch((error) => {
                console.log(error)
                toast.error('Error in loading your post')
            })
    }

    useEffect(() => {
        console.log(getCurrentUser())
        setUserData(getCurrentUser())
        loadPostData()
    }, [])

    // function to delete post
    function deletePost(post) {
        // going to delete the post
        deletePostByPostId(post.postId)
            .then((resp) => {
                console.log(resp)
                toast.success('Post deleted successfully')
                loadPostData()
            }).catch((error) => {
                console.log(error)
                toast.error('Error in deleting post')
            })
    }

    return (
        <Base>
            <Container>
                <Row>
                    <Col md={{ size: 3 }} className='p-2'>

                        <Card>
                            <CardHeader><b>Additional Filters</b></CardHeader>
                            <CardBody className='bg-light mt-3'>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        <b>Sort By Asc/Desc Order</b>
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
                                        <b>Change Page Size</b>
                                    </Label>
                                    <Input type='select' name='pageSize' onChange={(e) => changePageSize(e, 'pageSize')}>
                                        <option disabled selected>--Choose Page Size--</option>
                                        <option value='3' disabled={myPost.length < 3}>3</option>
                                        <option value='5' disabled={myPost.length < 5}>5</option>
                                        <option value='10' disabled={myPost.length < 10}>10</option>
                                        <option value='15' disabled={myPost.length < 15}>15</option>
                                        <option value='20' disabled={myPost.length < 20}>20</option>
                                    </Input>
                                </FormGroup>

                            </CardBody>

                        </Card>
                    </Col>
                    <Col md={{ size: 9 }}>
                        <Card className='m-3 bg-light'  >
                            <h5 className='m-1' style={{ fontSize: 20 }}>
                                <Badge color="danger" pill>
                                    Total Post : {myPost.length}
                                </Badge>{" "}
                            </h5>
                            {
                                myPost.map((post, index) => {
                                    return (
                                        <Post post={post} key={index} deletePost={deletePost} />
                                    )
                                })
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default MyPost