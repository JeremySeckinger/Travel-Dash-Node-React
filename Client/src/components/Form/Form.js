import React, { useState } from 'react';
import { Row, Card, Form, Button  } from "@themesberg/react-bootstrap";

export const PostTripForm = () => {
    // const [] = useState(""); 

    return (

        <>           
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                <h3>Add Trip</h3>
                    <Row>
                        <Form action="/trips" method="POST" class="col s12">
                            <Row>
                            <Form.Group id="title">
                                <Form.Label>Title</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter trip title" />
                            </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Status</Form.Label> 
                                    <select class="form-select">
                                        <option value="public" selected>Public</option>
                                        <option value="private">Private</option>
                                    </select>
                                    <label for="status">Status</label>
                                </Form.Group>
                            </Row>
                            <Row>
                                <div class="input-field">
                                    <h5>Add trip details</h5>
                                    <textarea id="body" name="body"></textarea>
                                </div>
                            </Row>
                            <div className="mt-3">
                                <Button variant="primary" type="submit">Save</Button>
                                <Button variant="primary" type="cancel">Cancel</Button>
                            </div>
                        </Form>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}