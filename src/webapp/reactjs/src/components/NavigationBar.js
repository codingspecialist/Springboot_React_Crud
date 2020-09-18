import React from 'react';
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Link to={"/"} className="navbar-brand">
					Book Shop
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to={"/add"} className="nav-link">Add Book</Link>
						<Link to={"/list"} className="nav-link">Book List</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavigationBar;