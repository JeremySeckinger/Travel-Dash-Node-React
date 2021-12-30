import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signup } from "../actions/auth";

import { Routes } from "../routes";
import BgImage from "../assets/img/pages/ian-schneider-jk8rarn6lmw-unsplash-min.jpg";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData, history));
    console.log(formData);
  };

  //* handleChange here is useful to dynamically set each state field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push("/dashboard/Trips");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful");
  };

  return (
    <main
      className="justify-content-center form-bg-image"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <section className="d-flex align-items-center my-5 mt-lg-5 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link
              as={Link}
              to={Routes.Trips.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p>
          <Row>
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 px-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-3" onSubmit={handleSubmit}>
                  <Form.Group id="firstName" className="mb-4">
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text></InputGroup.Text>
                      <Form.Control
                        name="firstName"
                        onChange={handleChange}
                        autoFocus
                        required
                        type="firstName"
                        placeholder="first name"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="lastName" className="mb-4">
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text></InputGroup.Text>
                      <Form.Control
                        name="lastName"
                        onChange={handleChange}
                        autoFocus
                        required
                        type="lastName"
                        placeholder="last name"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        onChange={handleChange}
                        autoFocus
                        required
                        type="email"
                        placeholder="example@company.com"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        name="password"
                        onChange={handleChange}
                        required
                        type="password"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        name="confirmPassword"
                        onChange={handleChange}
                        required
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>
                <div className="my-2 text-center">
                  <span className="fw-normal">or</span>
                </div>

                <div className="d-flex justify-content-center my-2">
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                      <Button
                        className="w-100 tn-icon-only btn-pill text-google"
                        color="primary"
                        onClick={renderProps.onClick}
                        variant="outline-light"
                      >
                        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                      </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={Routes.Signin.path}
                      className="fw-bold"
                    >
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
