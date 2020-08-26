import React from 'react';
import { Jumbotron } from 'react-bootstrap';
const Welcome = () => {
	return (
		<Jumbotron className="bg-dark text-white">
			<h1>Welcome to Book Shop</h1>
			<p>Good friends, good books, and a sleepy conscience</p>
			<footer className="blockquote-footer">
				Created by Cos
			</footer>
		</Jumbotron>
	);
};

export default Welcome;