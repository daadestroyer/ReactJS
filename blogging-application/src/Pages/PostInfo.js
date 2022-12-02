import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardText, Col, Container, Input, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { getCurrentUser, isLoggedIn } from '../Authentication/Auth'
import Base from '../Components/Base'
import { createComment } from '../Services/CommentService'
import { BASE_URL } from '../Services/Constant'
import { getPostById } from '../Services/PostService'
import { BsFillTrashFill } from 'react-icons/bs';

const PostInfo = () => {

    const navigate = useNavigate();
    const { postId } = useParams()
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        // load post of post id
        getPostById(postId)
            .then((data) => {
                console.log(data)
                setPostData(data)
            }).catch((error) => {
                console.log(error)
                toast.error('something went wrong')
            })
    }, [])

    const printDate = (number) => {
        return new Date(number).toString()
    }

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open != id) {
            setOpen(id);

        } else {
            setOpen();
        }
    };

    const [commentData, setCommentData] = useState({
        content: ''
    })

    const postComment = () => {

        if (!isLoggedIn()) {
            toast.error('You must be logged in')
            return
        }
        if (commentData.content.trim() === '') {
            toast.error('Comment cannot be blank')
            return
        }
        createComment(commentData, postData.postId)
            .then((data) => {
                console.log(data)
                toast.success('Comment created successfully')
                setPostData({
                    ...postData, comments: [...postData.comments,data]
                })
                setCommentData({
                    content: ''
                })
                navigate(`/postinfo/${postData.postId}`)
                
            }).catch((error) => {
                console.log(error)
                toast.error('something went wrong')
            })


    }

    return (
        <Base>
            <div >


                {/* <h4>About post</h4> */}
                <Container className='mt-4'>
                    <ListGroup>
                        <ListGroupItem className='bg-light p-1'>
                            <Link to="/">Home</Link> / {
                                (postData) && (
                                    <Link to="">{postData.postTitle}</Link>
                                )
                            }
                        </ListGroupItem>
                    </ListGroup>
                    <Row>
                        <Col md={{ size: 12 }}>

                            <Card className='mt-3 bg-light'>
                                {
                                    (postData) && (

                                        <CardBody>
                                            <Accordion open={open} toggle={toggle}>
                                                <AccordionItem>
                                                    <AccordionHeader targetId="0"><b>Posted By  :</b> &nbsp;  <span style={{ color: 'red' }}><b>{postData.user.user_name}</b></span> <span>&nbsp; on {postData.addedDate[2]}/{postData.addedDate[1]}/{postData.addedDate[0]} </span></AccordionHeader>
                                                    <AccordionBody accordionId="0">

                                                        <pre>{postData.user.about} <br />
                                                            ROLE : {postData.user.roles?.map((role) => role.role)}
                                                        </pre>

                                                    </AccordionBody>
                                                </AccordionItem>
                                            </Accordion>
                                            <CardText className='ml-5 mt-3'><b>Posted Category :</b> <span>{postData.category.catTitle}</span> </CardText>
                                            <CardText className='mt-3' ><h3>{postData.postTitle}</h3></CardText>
                                            <div className="image-container mt-3 shadow img-rounded" style={{ maxWidth: '20%' }}>
                                                <img className='img-fluid' src={BASE_URL + '/post/image/' + postData.imageName} alt={postData.imageName} />
                                            </div>
                                            <ListGroup className='mt-4'>
                                                <ListGroupItem className='bg-light shadow' >
                                                    <CardText className='p-2' dangerouslySetInnerHTML={{ __html: postData.postContent }}>

                                                    </CardText>
                                                </ListGroupItem>

                                            </ListGroup>

                                        </CardBody>

                                    )
                                }

                            </Card>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Card >
                            <Col className='mt-2 mb-2' md={{ size: 10, offset: 2 }}>
                                <h6>Comments({postData ? postData.comments.length : 0}) of <i style={{ color: 'blue' }}>"  {
                                    (postData) && (
                                        <Link to="">{postData.postTitle}</Link>
                                    )
                                } </i></h6>

                                <ListGroup>
                                    <ListGroupItem>
                                        {
                                            (postData) && postData.comments.map(c => (
                                                <>
                                                <h6 style={{ fontSize: '12px' }}> {c.content} <Link className='p-1' style={{color:'red'}} color='danger'><BsFillTrashFill /></Link></h6>
                                                
                                                </>
                                               
                                               
                                            ))
                                        }
                                    </ListGroupItem>
                                </ListGroup>

                                <CardBody>
                                    <Input onChange={(e) => setCommentData({ content: e.target.value })} value={commentData.content} type='textarea' placeholder='Enter comment here...' />
                                    <Button color='primary' onClick={postComment} className='mt-2'  > Post Comment</Button>
                                </CardBody>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </div>

        </Base>
    )
}

export default PostInfo