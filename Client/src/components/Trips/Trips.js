import { Row, Spinner} from '@themesberg/react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

import Trip from './Trip/Trip';


const Trips = ({ setCurrentId, setShowDefault }) => {
    const trips = useSelector((state) => state.trips);

    console.log(trips);

    return (
        !trips.length ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : (
        <Row xs={1} md={4} className="g-4">
            {trips.map((trip) => (
                <Trip trip={trip} key={trip._id} setCurrentId={setCurrentId} setShowDefault={setShowDefault}/>
            ))}
        </Row>
        )
    );
}


export default Trips;