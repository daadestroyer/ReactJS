import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import Base from '../Components/Base'
import { getAllPosts } from '../Services/PostService'
import Post from './Post'

const NewsFeeds = () => {

    const [postData, setPostData] = useState({
        content:[]
});

    useEffect(() => {
        // load all the post from server
        getAllPosts()
            .then((data) => {
                console.log(data)
                setPostData(data)
            }).catch((error) => {
                console.log(error)
                // toast.error('something went wrong')
            });

    }, [])

    return (
        <Base>

            <Container>
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Card className='m-3 bg-light'  >
                            <h5 className='m-1' style={{ fontSize: 15 }}>Total Blogs : {postData.totalElements}</h5>
                        </Card>
                        {
                            postData.content.map((post)=>(
                                <Post post={post} key={post.postId}/>
                            ))
                        }
                    </Col>
                </Row>


                 
            </Container>






        </Base>
    )
}

export default NewsFeeds