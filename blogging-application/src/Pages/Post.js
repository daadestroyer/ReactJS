import React from 'react'
import { Badge, Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

const Post = ({ post = { title: "this is default post title", content: "this is default post content" } }) => {
    return (
        <Card className='border-0 shadow-lg p-2 mt-3' >
            <CardHeader>
                <Badge color="success" pill>
                    Post Id : {post.postId}{" "}
                </Badge>{" "}
                <Badge color="success" pill>
                Post Category : {post.category.catTitle}
                </Badge>{" "}



            </CardHeader>

            <CardBody>
                <CardTitle> <b>{post.postTitle} ?</b> </CardTitle>
            </CardBody>
            <CardText>
                <p>{post.postContent}</p>
                <Button>Read More</Button>
            </CardText>

        </Card>
    )
}

export default Post