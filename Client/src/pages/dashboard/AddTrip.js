import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { getTrips } from '/Users/jeremyseckinger/Desktop/100-Devs/100-hrs-project/travel-dash-react-node/Client/src/actions/trips.js';
import PostTripForm from '../../components/Form/Form';

export default () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrips());
    }, [dispatch]);

    return (
        <>
        <PostTripForm currentId={currentId} setCurrentId={setCurrentId}/>
        </>
    )
}