import { Card, Row, Spinner} from '@themesberg/react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

import Trip from './Trip/Trip';


const Trips = () => {
    const trips = useSelector((state) => state.trips);

    console.log(trips);

    return (
        !trips.length ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : (
        <Row xs={1} md={3} className="g-4">
            {trips.map((trip) => (
                <Trip trip={trip} />
            ))}
        </Row>
        )
    );
}


export default Trips;