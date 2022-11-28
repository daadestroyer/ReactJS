import React from 'react'
import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

const Post = ({ post = { title: "this is default post title", content: "this is default post content" } }) => {
    return (
        <Card className='border-0 shadow-lg p-2 mt-3' >
            <CardHeader>
                
                    Post Id : {post.postId}
                 
            </CardHeader>

            <CardBody>
            <CardTitle> {post.postTitle} </CardTitle>
            </CardBody>
            <CardText>
                <p>{post.postContent}</p>
                <Button>Read More</Button>
            </CardText>
            
        </Card>
    )
}

export default Post