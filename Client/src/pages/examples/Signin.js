
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'; //brought in for google auth addition
import { useDispatch } from 'react-redux'; //brought in redux for google auth addition

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {
    const dispatch = useDispatch();

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //optional chaining operator added here
        const token = res?.tokenId; 

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
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
                <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
                    <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
                </Card.Link>
                </p>
                <Row>
                <Col xs={12} className="d-flex align-items-center justify-content-center">
                    <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                    <div className="text-center text-md-center mb-4 mt-md-0">
                        <h3 className="mb-0">Sign in to our platform</h3>
                    </div>
                    <Form className="mt-4">
                        <Form.Group id="email" className="mb-4">
                        <Form.Label>Your Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                            <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required type="email" placeholder="example@company.com" />
                        </InputGroup>
                        </Form.Group>
                        <Form.Group>
                        <Form.Group id="password" className="mb-4">
                            <Form.Label>Your Password</Form.Label>
                            <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faUnlockAlt} />
                            </InputGroup.Text>
                            <Form.Control required type="password" placeholder="Password" />
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <Form.Check type="checkbox">
                            <FormCheck.Input id="defaultCheck5" className="me-2" />
                            <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                            </Form.Check>
                            <Card.Link className="small text-end">Lost password?</Card.Link>
                        </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                        Sign in
                        </Button>
                    </Form>

                    <div className="mt-3 mb-4 text-center">
                        <span className="fw-normal">or login with</span>
                    </div>


            {/* //* Adding Google Auth Login */}
                    <div className="d-flex justify-content-center my-4">
                        <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                            <Button 
                                className="w-100 tn-icon-only btn-pill text-google"
                                color='primary' 
                                onClick={renderProps.onClick} 
                                // disabled={renderProps.disabled} 
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