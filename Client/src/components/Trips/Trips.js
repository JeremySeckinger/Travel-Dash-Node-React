import React from 'react';
import { useSelector } from 'react-redux';

import Trip from './Trip/Trip';


const Trips = () => {
    const trips = useSelector((state) => state.trips);

    console.log(trips);

    return (
        <>
        </>
    );
}


export default Trips;