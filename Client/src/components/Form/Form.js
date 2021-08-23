import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button  } from "@themesberg/react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createTrip, updateTrip } from "../../actions/trips";



const PostTripForm = ({ currentId, setCurrentId }) => {
    const [tripData, setTripData] = useState({ title: '', status: '', body: '' }) 
    const trip = useSelector((state) => currentId ? state.trips.find((t) => t._id === currentId) : null )
    const dispatch = useDispatch(); //brought in from actions/trips.js

    useEffect(() => {
        if(trip) setTripData(trip);
    }, [trip]) // <--dependency array (when the value changes from nothing-->trip then use the above function)

    const handleSubmit = (e) => { // once user submits--> send post request with all data entered
        e.preventDefault(); // stops browser from refreshing

        if(currentId) {
            dispatch(updateTrip(currentId, tripData));
        } else {
            dispatch(createTrip(tripData)); //makes request when submit button is clicked, once action is dispatched--> go to reducers
        }

        clear();

    }

    const clear = () => {
        setCurrentId(null);
        setTripData({ title: '', status: '', body: '' })
    }

    return (

        <>           
            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                <h3>{ currentId ? 'Edit' : 'Add'} Trip</h3>
                    <Row>
                        <Form noValidate onSubmit={handleSubmit} className="col s12">
                            <Row>
                                <Form.Group className="mb-3" id="title">
                                    <Form.Label>Title</Form.Label>
                                    {/* have to use the spread operator in this syntax to make the data persist below */}
                                        <Form.Control type="text" placeholder="Enter trip title" name="title" value={tripData.title} onChange={(e) => setTripData({ ...tripData, title: e.target.value })}/> 
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3"> 
                                    <Form.Label>Status</Form.Label> 
                                    <Form.Select name="status" value={tripData.status} onChange={(e) => setTripData({ ...tripData, status: e.target.value })}>
                                        <option value="public">Public</option>
                                        <option value="private">Private</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Label sm="2">
                                        Add trip details here
                                    </Form.Label>
                                    <Form.Control as="textarea" placeholder="Add trip details here" style={{ height: '100px' }} name="body" value={tripData.body} onChange={(e) => setTripData({ ...tripData, body: e.target.value })}/>
                                </Form.Group>
                            </Row>
                            <Col className="mt-3">
                                <Button variant="info" className="m-1" type="submit">Save</Button>
                                <Button variant="tertiary" className="m-1" onClick={clear}>Cancel</Button>
                            </Col>
                        </Form>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default PostTripForm;