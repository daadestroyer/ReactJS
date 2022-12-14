import React, { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Row } from 'reactstrap'
import Base from '../../Components/Base'
import { loadAllCategories } from '../../Services/Category'
import JoditEditor from 'jodit-react'
import { getCurrentUser } from '../../Authentication/Auth'
import { createPost, getAllPostByUserId } from '../../Services/PostService'
import { useNavigate } from 'react-router-dom'
import { uploadBannerImage } from '../../Services/ImageService'

const AddPost = () => {
    const navigate = useNavigate();
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const [categories, setCategories] = useState([])

    // for current login user
    const [userData, setUserData] = useState([]);


    const [postData, setPostData] = useState({
        postTitle: '',
        postContent: '',
        catId: ''
    })

    useEffect(() => {
        setUserData(getCurrentUser())
        // console.log(getCurrentUser())
        loadAllCategories()
            .then((resp) => {
                // console.log(resp)
                // setting up the categories
                setCategories(resp)
            }).catch(error => {
                console.log("error")
                toast.error("something went wrong !")
            });
        //console.log(userData)

        getAllPostByUserId(userData.userId)
        .then((data)=>{
            console.log(data)
        }).catch(error => {
            console.log("error")
        })


    }, [])

    // useEffect(() => {
    //     console.log(userData)
    // }, [userData])

    const config = {
        placeholder: "Start Typing...",
        "askBeforePasteHTML": false,
        "askBeforePasteFromWord": false,
        "defaultActionOnPaste": "insert_clear_html"
    };

    const [error, setError] = useState({
        errors: {},
        isError: false

    })



    const handleChange = (event) => {
        setPostData({
            ...postData, [event.target.name]: event.target.value
        })
    }
    const contentFieldChange = (data) => {
        setPostData({
            ...postData, 'postContent': data
        })
    }

    // useEffect(() => {
    //     console.log(postData)
    // }, [postData])



    const submitForm = (event) => {
        event.preventDefault();
        // postData['userId'] = 
        if (postData.postTitle == '') {
            toast.error('please enter a title')
            return
        }
        else if (postData.catId == '') {
            toast.error("Please select a category")
            return
        }
        else if (postData.postContent == '') {
            toast.error("Please enter a post content")
            return
        }

        // submit the form to server
        postData['userId'] = userData.userId;
        console.log(postData)
        createPost(postData)
            .then((resp) => {
                console.log(resp)
                uploadBannerImage(imageData, resp.postId)
                    .then((data) => {
                        // toast.success('image uploaded successfully !!')
                    }).catch(error => {
                        toast.error('error in uploading image')
                        console.log(error)
                    })

                toast.success("Post created successfully!")

                setPostData({
                    postTitle: '',
                    postContent: '',
                })

            }).catch((error) => {
                console.log(error)
                toast.error('something went wrong')
                setError({
                    errors: error,
                    isError: true
                })


            })
    }

    const [imageData, setImageData] = useState(null)

    // handleFileChange
    const handleFileChange = (event) => {
        console.log(event.target.files)
        setImageData(event.target.files[0])
    }

    return (
        <div>
            <Base>
                <Container className='mt-4'>

                    <Row>
                        <Col md={{ size: 10, offset: 1 }}>
                            <Card color='dark' outline >
                                <CardHeader className='bg-dark text-white'>What's going in your mind ?</CardHeader>
                                <CardBody>
                                    <Form onSubmit={submitForm}>
                                        <FormGroup>
                                            <label>Post Title</label>
                                            <Input
                                                type='text'
                                                placeholder='Enter post title'
                                                name='postTitle'
                                                value={postData.postTitle}
                                                onChange={(e) => handleChange(e, 'postTitle')}
                                                invalid={error.errors?.response?.data?.postTitle ? true : false}
                                            />
                                            <FormFeedback>
                                                {error.errors?.response?.data.postTitle}
                                            </FormFeedback>
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Post Category</label>
                                            <Input
                                                type='select'
                                                name='catId'
                                                onChange={(e) => handleChange(e, 'catId')}

                                            >
                                                <option disabled selected>--Select Post Category--</option>
                                                {

                                                    categories.map((category) => (


                                                        <option value={category.catId} key={category.catId}>

                                                            {category.catTitle}
                                                        </option>

                                                    ))
                                                }

                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="mt-3">
                                                <label>Select post image</label>
                                                <Input id="image" accept="image/*" type="file" onChange={handleFileChange} />
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Post Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={postData.postContent}
                                                onBlur={contentFieldChange}
                                                config={config}
                                                name='postContent'
                                                invalid={error.errors?.response?.data?.postContent ? true : false}
                                            />
                                            <FormFeedback>
                                                {error.errors?.response?.data.postTitle}
                                            </FormFeedback>

                                        </FormGroup>


                                        <Container className='text-center'>
                                            <Button type='submit' outline color='success'>Post</Button>{" "}
                                            <Button type='reset' outline color='warning'>Reset</Button>
                                        </Container>
                                    </Form>
                                </CardBody>
                                <CardFooter className='bg-dark text-danger'></CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Base>
        </div>
    )
}

export default AddPost