import { Card, Spinner} from '@themesberg/react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

import Trip from './Trip/Trip';


const Trips = () => {
    const trips = useSelector((state) => state.trips);

    console.log(trips);

    return (
        !trips.length ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> : (
        <Card>
            {trips.map((trip) => (
                <Trip trip={trip} />
            ))}
        </Card>
        )
    );
}


export default Trips;