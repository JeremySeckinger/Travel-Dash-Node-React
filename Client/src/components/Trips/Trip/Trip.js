import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Button } from '@themesberg/react-bootstrap';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteTrip, likeTrip } from '../../../actions/trips'

const Trip = ({ trip, setCurrentId }) => { //destructures trip and brings in to use for component below
    const dispatch =  useDispatch(); 
    return (

            <Col className="">
                <Card border="primary" className="text-center">
                    <Card.Body>
                        <div className="float-end">
                            <Button variant="info" className="btn-icon-only btn-circle" onClick={() => setCurrentId(trip._id)}><FontAwesomeIcon icon={faEdit} /></Button>
                        </div>
                        <Card.Header className="center-align" as="h3">{trip.title}</Card.Header>                
                        <Card.Text style={{ height: '10rem', margin: '1rem'}}>{trip.body}</Card.Text>
                        <Card.Text>{moment(trip.createdAt).fromNow()}</Card.Text>
                        <Button variant="secondary" size="sm" color="dark" className="w-100" onClick={() => {} }>view trip</Button>
                        <Card.Footer>
                            <Button variant="primary" size="sm" className="animate-up-2 mb-2 me-2" onClick={() => dispatch(likeTrip(trip._id)) }><FontAwesomeIcon icon={faThumbsUp} /> Like {trip.likeCount}</Button>
                            <Button variant="warning" size="sm" className="animate-down-2 mb-2 me-2" onClick={() => dispatch(deleteTrip(trip._id)) }><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
    );
    
}

export default Trip;


