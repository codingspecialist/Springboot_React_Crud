import React, { useState } from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';

const Book = (props) => {

	const [book, setBook] = useState({
		title: '',
		author: '',
		coverPhotoURL: '',
		isbnNumber: '',
		price: '',
		language: ''
	});

	const submitBook = (e) => {
		alert(book.title);
		e.preventDefault();
	}

	const bookChange = (e)=>{
		setBook({
			...book,
			[e.target.name]:e.target.value
		});
		console.log(book.title);
	}

	return (
		<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header>Add Book</Card.Header>
			<Form id="bookFormId" onSubmit={submitBook}>
				<Card.Body> 

					<Form.Row>
						<Form.Group as={Col} controlId="formGridTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control required type="text" name="title" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Title" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridAuthor">
							<Form.Label>Author</Form.Label>
							<Form.Control required type="text" name="author" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Author" />
						</Form.Group>
					</Form.Row>


					<Form.Row>
						<Form.Group as={Col} controlId="formGridCoverPhotoURL">
							<Form.Label>Tover Photo URLitle</Form.Label>
							<Form.Control required type="text" name="coverPhotoURL" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Cover Photo URL" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridISBNNumber">
							<Form.Label>ISBN Number</Form.Label>
							<Form.Control required type="text" name="isbnNumber" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book ISBN Number" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridPrice">
							<Form.Label>Price</Form.Label>
							<Form.Control required type="text" name="price" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Price" />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridLanguage">
							<Form.Label>Language</Form.Label>
							<Form.Control required type="text" name="language" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Language" />
						</Form.Group>
					</Form.Row>

				</Card.Body>
				<Card.Footer style={{ "textAlign": "right" }}>
					<Button size="sm" variant="success" type="submit">
						Submit
  					</Button>
				</Card.Footer>
			</Form>
		</Card>
	);
};

export default Book;