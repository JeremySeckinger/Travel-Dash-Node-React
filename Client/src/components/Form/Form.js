import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "@themesberg/react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";

import { createTrip, updateTrip } from "../../actions/trips";

const PostTripForm = ({ currentId, setCurrentId, setShowDefault }) => {
  const [tripData, setTripData] = useState({ title: "", status: "", body: "" });
  const trip = useSelector((state) =>
    currentId ? state.trips.find((t) => t._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (trip) setTripData(trip);
  }, [trip]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="d-flex">
        <span className="my-5" style={{ width: "44%", margin: "auto" }}>
          Sign in to create your own trip
        </span>
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
                  <Form.Label sm="2">
                    {currentId ? "Edit" : "Add"} trip details here
                  </Form.Label>
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      placeholder: "Add trip details here",
                    }}
                    data={trip?.body || {}}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                      setTripData({ ...tripData, body: data });
                    }}
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
