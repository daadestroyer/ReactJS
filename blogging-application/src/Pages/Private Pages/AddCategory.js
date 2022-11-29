import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form } from 'reactstrap'
import { Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Row } from 'reactstrap'
import { getCurrentUser } from '../../Authentication/Auth'
import Base from '../../Components/Base'
import { addCategory, loadAllCategories } from '../../Services/Category'




const AddCategory = () => {

    const [newCategory, setNewCategory] = useState({
        catTitle: '',
        catDesc: ''
    })

    const [userData,setUserData] = useState([])

    const [categories, setCategories] = useState([])

    useEffect(() => {

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
    }, [])

    useEffect(()=>{
        setUserData(getCurrentUser())

        console.log(userData)
       
    },[userData])





    const submitForm = (event) => {
        event.preventDefault()

        addCategory(newCategory)
            .then((resp) => {
                console.log(resp)
                toast.success('post successfully')
            }).catch(error => {
                console.log(error)
                toast.error("something went wrong!")
            })

        console.log(newCategory)
    }



    const handleChange = (event, property) => {
        setNewCategory({ ...newCategory, [property]: event.target.value })
    }


    return (
        <div>
            <Base>
                <Container className='mt-4'>
                    
                    <Row>
                        <Col md={{ size: 3 }} >
                            <Card className='p-3'>
                                <CardHeader><b> All Category</b></CardHeader>
                                <Input
                                    type='select'
                                    placeholder='Enter post content'
                                    name='catId'

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

                            </Card>

                        </Col>
                        <Col md={{ size: 9 }}>
                            <Card color='dark' outline >
                                <CardHeader className='bg-dark text-white'>Add Category</CardHeader>
                                <CardBody>
                                    <Form onSubmit={submitForm}>
                                        <FormGroup>
                                            <label>Category Title</label>
                                            <Input
                                                type='text'
                                                placeholder='Enter category title'
                                                name='catTitle'
                                                onChange={(e) => handleChange(e, 'catTitle')}
                                                value={newCategory.catTitle}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Category Description</label>
                                            <Input
                                                type='textarea'
                                                placeholder='Enter category description'
                                                name='catDesc'
                                                onChange={(e) => handleChange(e, 'catDesc')}
                                                value={newCategory.catDesc}
                                            />
                                        </FormGroup>
                                        <Container className='text-center'>
                                            <Button outline color='success'>Save</Button>{" "}
                                            <Button type='reset' outline color='warning'>Reset</Button>
                                        </Container>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Base>
        </div>
    )
}

export default AddCategory