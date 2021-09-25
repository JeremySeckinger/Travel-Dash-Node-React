
import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { faSearch, faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Nav, Form, Image, Navbar, Dropdown, Container, InputGroup, Button } from '@themesberg/react-bootstrap';

import { Routes } from "../routes";

export default (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    console.log(user);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/dashboard/Trips');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        //JWT ...

        //When location changes user is set
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

	return (
	<Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
		<Container fluid className="px-0">
			<div className="d-flex justify-content-between w-100">
				<div className="d-flex align-items-center">
					<Form className="navbar-search">
						<Form.Group id="topbarSearch">
							<InputGroup className="input-group-merge search-bar">
							<InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
							<Form.Control type="text" placeholder="Search" />
							</InputGroup>
						</Form.Group>
					</Form>
				</div>
				<Nav className="align-items-center">
					{user ? (
						<Dropdown as={Nav.Item}>
							<Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">             
								<div className="media d-flex align-items-center">
                                { user?.result.imageUrl ? (
                                    <Image src={user?.result.imageUrl} alt={user.result.name} className="user-avatar md-avatar rounded-circle" />
                                ) : (
                                    <Avatar name={user.result.name.charAt(0)} textSizeRatio={1.75} size="48" className="user-avatar md-avatar rounded-circle"/>
                                )}
									<div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
										<span className="mb-0 font-small fw-bold">{user.result.name}</span>
									</div>
								</div>
							</Dropdown.Toggle>
							<Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
								<Dropdown.Item className="fw-bold">
									<FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item className="fw-bold" onClick={logout}>
									<FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					): (
						<Button as={Link} variant="primary" className="animate-hover" to={Routes.Signin.path}><FontAwesomeIcon icon={faSignInAlt} className="animate-left-3 me-3 ms-2" />Sign in</Button>
					)}
				</Nav>
			</div>
		</Container>
	</Navbar>
	);
};
