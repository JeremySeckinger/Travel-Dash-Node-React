import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { useDispatch } from 'react-redux';

import { getTrips } from '/Users/jeremyseckinger/Desktop/100-Devs/100-hrs-project/travel-dash-react-node/Client/src/actions/trips.js';
import Trips from '/Users/jeremyseckinger/Desktop/100-Devs/100-hrs-project/travel-dash-react-node/Client/src/components/Trips/Trips.js';
import Form from '/Users/jeremyseckinger/Desktop/100-Devs/100-hrs-project/travel-dash-react-node/Client/src/components/Form/Form.js';



export default () => {

    // const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrips());
    }, [dispatch]);


    return (
    <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <Dropdown className="btn-toolbar">
                <Dropdown.Toggle as={Button} variant="primary" size="sm" className="mt-2">
                    <FontAwesomeIcon icon={faPlus} className="" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item href="#/AddTrip" className="fw-bold">
                <FontAwesomeIcon icon={faRocket} className="me-2" /> New Trip
            </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    </div>

    <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body>

            </Card.Body>
    </Card>

    </>
    );
};