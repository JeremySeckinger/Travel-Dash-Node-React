import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Button, Dropdown, Modal } from "@themesberg/react-bootstrap";
import { useDispatch } from "react-redux";

import { getTrips } from "../../actions/trips";
import Trips from "../../components/Trips/Trips";
import PostTripForm from "../../components/Form/Form";

export default () => {
  const [currentId, setCurrentId] = useState(null);
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrips());
  }, [currentId, dispatch]);

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle
            as={Button}
            variant="primary"
            size="sm"
            className="mt-2"
          >
            <FontAwesomeIcon icon={faPlus} className="" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item
              className="fw-bold"
              onClick={() => setShowDefault(true)}
            >
              <FontAwesomeIcon icon={faRocket} className="me-2" /> New Trip
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Trips setCurrentId={setCurrentId} setShowDefault={setShowDefault} />

      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <PostTripForm
          currentId={currentId}
          setCurrentId={setCurrentId}
          setShowDefault={setShowDefault}
        />
      </Modal>
    </React.Fragment>
  );
};
