import React from 'react';
import { Card, Row, Col, Button  } from '@themesberg/react-bootstrap';
import moment from 'moment';

const Trip = ({ trip }) => { //destructures trip and brings in to use for component below
    return (
        <Row>
            <Col className="">
                <Card className="">
                    <Card.Body>
                        <Card.Title className="center-align">{trip.title}</Card.Title>
                        <Card.Text>{trip.body}</Card.Text>
                        <span>{moment(trip.createdAT).fromNow()}</span>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row> 
    );
    
}

export default Trip;


