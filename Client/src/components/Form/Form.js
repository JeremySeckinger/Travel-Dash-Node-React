import React, { useState } from 'react';
import { Row, Card, Form, Button  } from "@themesberg/react-bootstrap";

const PostTripForm = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })

    const handleSubmit = () => {

    }

    const clear = () => {

    }

    return (

        <>           
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                <h3>Add Trip</h3>
                    <Row>
                        <Form action="/trips" onSubmit={handleSubmit} className="col s12">
                            <Row>
                                <Form.Group id="title">
                                    <Form.Label>Title</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter trip title" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group> 
                                    <Form.Label>Status</Form.Label> 
                                    <Form.Control as="select">
                                        <option selected>Public</option>
                                        <option>Private</option>
                                    </Form.Control>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="input-field">
                                    <Form.Label sm="2">
                                        Add trip details here
                                    </Form.Label>
                                    <Form.Control as="textarea" placeholder="Add trip details here" style={{ height: '100px' }} id="body" name="body" />
                                </Form.Group>
                            </Row>
                            <Row className="mt-3">
                                <Button variant="primary" type="submit">Save</Button>
                                <Button variant="primary" onClick={clear}>Cancel</Button>
                            </Row>
                        </Form>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default PostTripForm;