import React from 'react'
import { Link, Navigate, NavLink as ReactLink, useNavigate } from 'react-router-dom'
import { Badge, Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

const Post = ({ post = {title: "this is default post title", content: "this is default post content" } }) => {
    return (
        <Card className='border-0 shadow-lg p-2 mt-3' >
            <CardHeader>
                <Badge color="success" pill>
                    Post Id : {post.postId}{" "}
                </Badge>{" "}
                <Badge color="success" pill>
                    Post Category : {post.category.catTitle}
                </Badge>{" "}
                <Badge color="light" pill>
                    <Link to={'/publicprofile/'+post.user.userId}>Posted By : {post.user.user_name} on {post.addedDate[2]}/{post.addedDate[1]}/{post.addedDate[0]}</Link>
                </Badge>{" "}



            </CardHeader>

            <CardBody>
                <CardTitle> <b>{post.postTitle} ?</b> </CardTitle>
            </CardBody>
            <CardText dangerouslySetInnerHTML={{ __html:post.postContent.substring(0, 60)}}>

            </CardText>

            <div>
                <Button tag={ReactLink} to={'/postinfo/'+post.postId}>Read More</Button>
            </div>

        </Card>
    )
}

export default Post