import React from 'react';
import { Card, Row, Col, Button  } from '@themesberg/react-bootstrap';
import moment from 'moment';

const Trip = ({ trip }) => { //destructures trip and brings in to use for component below
    return (

            <Col className="">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title className="center-align">{trip.title}</Card.Title>
                        <Card.Text>{trip.body}</Card.Text>
                        <Card.Text>{moment(trip.createdAT).fromNow()}</Card.Text>
                        <Button variant="primary">view trip</Button>
                    </Card.Body>
                </Card>
            </Col>
    );
    
}

export default Trip;


