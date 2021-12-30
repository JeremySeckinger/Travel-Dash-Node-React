import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "@themesberg/react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createTrip, updateTrip } from "../../actions/trips";

const PostTripForm = ({ currentId, setCurrentId, setShowDefault }) => {
  const [tripData, setTripData] = useState({ title: "", status: "", body: "" });
  const trip = useSelector((state) =>
    currentId ? state.trips.find((t) => t._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(user);

  useEffect(() => {
    if (trip) setTripData(trip);
  }, [trip]); // <--dependency array (when the value changes from nothing-->trip then uses the above function)

  const handleSubmit = async (e) => {
    // once user submits--> send post request with all data entered
    e.preventDefault(); // stops browser from refreshing

    if (currentId) {
      dispatch(
        updateTrip(currentId, {
          ...tripData,
          name: user?.result?.name,
          image: user?.result?.imageUrl,
        })
      );
    } else {
      dispatch(
        createTrip({
          ...tripData,
          name: user?.result?.name,
          image: user?.result?.imageUrl,
        })
      );
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setTripData({ title: "", status: "", body: "" });
    handleClose();
  };

  const handleClose = () => setShowDefault(false);

  if (!user?.result?.name) {
    return (
      <div>
        <span>Sign in to create your own trip</span>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h3>{currentId ? "Edit" : "Add"} Trip</h3>
          <Row>
            <Form noValidate onSubmit={handleSubmit} className="col s12">
              <Row>
                <Form.Group className="mb-3" id="title">
                  <Form.Label>Title</Form.Label>
                  {/* have to use the spread operator in this syntax to make the data persist below */}
                  <Form.Control
                    type="text"
                    placeholder="Enter trip title"
                    name="title"
                    value={tripData.title}
                    onChange={(e) =>
                      setTripData({ ...tripData, title: e.target.value })
                    }
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={tripData.status}
                    onChange={(e) =>
                      setTripData({ ...tripData, status: e.target.value })
                    }
                  >
                    <option>Select Public or Private</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label sm="2">Add trip details here</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Add trip details here"
                    style={{ height: "100px" }}
                    name="body"
                    value={tripData.body}
                    onChange={(e) =>
                      setTripData({ ...tripData, body: e.target.value })
                    }
                  />
                </Form.Group>
              </Row>
              <Col className="mt-3">
                <Button variant="info" className="m-1" type="submit">
                  Save
                </Button>
                <Button variant="tertiary" className="m-1" onClick={clear}>
                  Cancel
                </Button>
              </Col>
            </Form>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default PostTripForm;
