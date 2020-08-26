import React from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';

const Footer = () => {
	let fullYear = new Date().getFullYear();
	return (
		<Navbar fixed="bottom" bg="dark">
			<Container>
				<Col lg={12} className="text-muted">
					<div>{fullYear}-{fullYear+1}, All Rights Reserved by Cos</div>
				</Col>
			</Container>
		</Navbar>
	);
};

export default Footer;