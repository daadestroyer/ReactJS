import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardText, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import Base from '../Components/Base'
import { BASE_URL } from '../Services/Constant'
import { getPostById } from '../Services/PostService'

const PostInfo = () => {

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

    return (
        <Base>
            <div >


                {/* <h4>About post</h4> */}
                <Container className='mt-4'>
                    {/* <Link to="/">Home</Link> */}
                    <Row>
                        <Col md={{ size: 12 }}>

                            <Card className='mt-3 bg-light'>
                                {
                                    (postData) && (

                                        <CardBody>
                                            <Accordion open={open} toggle={toggle}>
                                                <AccordionItem>
                                                    <AccordionHeader targetId="0"><b>Posted By  :</b> &nbsp;  <span style={{ color: 'red' }}><b>{postData.user.userName}</b></span> <span>&nbsp; on {postData.addedDate[2]}/{postData.addedDate[1]}/{postData.addedDate[0]} </span></AccordionHeader>
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
                                                <ListGroupItem className='bg-dark text-white'>
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
                </Container>
            </div>

        </Base>
    )
}

export default PostInfo