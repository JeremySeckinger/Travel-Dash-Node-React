import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Button, Dropdown, Modal} from '@themesberg/react-bootstrap';
import { useDispatch } from 'react-redux';

//TODO update imports using relative path--temp fix
import { getTrips } from '/Users/jeremyseckinger/Desktop/Docs/100-Devs/100-hrs-project/travel-dash-react-node/Client/src/actions/trips.js';
import Trips from '/Users/jeremyseckinger/Desktop/Docs/100-Devs/100-hrs-project/travel-dash-react-node/Client/src/components/Trips/Trips.js';
import PostTripForm from '/Users/jeremyseckinger/Desktop/Docs/100-Devs/100-hrs-project/travel-dash-react-node/Client/src/components/Form/Form.js';



export default () => {

    const [currentId, setCurrentId] = useState(null);
    const [showDefault, setShowDefault] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrips());
    }, [currentId, dispatch]);

    return (
    <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <Dropdown className="btn-toolbar">
                <Dropdown.Toggle as={Button} variant="primary" size="sm" className="mt-2">
                    <FontAwesomeIcon icon={faPlus} className="" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                <Dropdown.Item className="fw-bold" onClick={() => setShowDefault(true)}>
                    <FontAwesomeIcon icon={faRocket} className="me-2" /> New Trip
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <Trips setCurrentId={setCurrentId} setShowDefault={setShowDefault}/>

        <Modal as={Modal.Dialog} centered show={showDefault}> 
            <PostTripForm currentId={currentId} setCurrentId={setCurrentId} setShowDefault={setShowDefault}/>
        </Modal>
    </>
    );
};