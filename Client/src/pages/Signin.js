
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'; 
import { useDispatch } from 'react-redux'; 
import { signin } from '../actions/auth';

import { Routes } from "../routes";
import BgImage from "../assets/img/illustrations/signin.svg";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

export default () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signin( formData, history ));
        console.log(formData);
    };

    //* handleChange here is useful to dynamically set each state field
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //optional chaining operator added here
        const token = res?.tokenId; 

        try {
            dispatch({ type: 'AUTH', data: { result, token } });

            history.push('/dashboard/Trips');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful");
    }


    return (
        <main className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})`}}>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <p className="text-center">
                        <Card.Link as={Link} to={Routes.Trips.path} className="text-gray-700">
                            <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
                        </Card.Link>
                    </p>
                    <Row>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h3 className="mb-0">Sign in to Travel Dash</h3>
                            </div>
                            <Form className="mt-4" onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-4">
                                    <Form.Label>Your Email</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </InputGroup.Text>
                                        <Form.Control name="email" onChange={handleChange} autoFocus required type="email" placeholder="example@company.com" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Group id="password" className="mb-1">
                                        <Form.Label>Your Password</Form.Label>
                                        <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUnlockAlt} />
                                        </InputGroup.Text >
                                        <Form.Control name="password" onChange={handleChange} required type="password" placeholder="Password" />
                                        </InputGroup>
                                    </Form.Group>
                                    <div className="d-flex justify-content-end my-2">
                                        <Card.Link className="small text-end">Lost password?</Card.Link>
                                    </div>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                Sign in
                                </Button>
                            </Form>
                            <div className="mt-3 mb-4 text-center">
                                <span className="fw-normal">or</span>
                            </div>
                            
                            <div className="d-flex justify-content-center my-4">
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    render={(renderProps) => (
                                        <Button className="w-100 tn-icon-only btn-pill text-google" color='primary' onClick={renderProps.onClick} variant="outline-light">
                                        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                                        </Button>
                                    )}
                                    onSuccess={googleSuccess}
                                    onFailure={googleFailure}
                                    cookiePolicy="single_host_origin"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <span className="fw-normal">
                                Not registered?
                                <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                                    {` Create account `}
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