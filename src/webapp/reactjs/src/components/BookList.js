import React, { useState, useEffect } from 'react';
import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';

const BookList = (props) => {

	const [books, setBooks] = useState([]);

	const findAllBooks = () => {
		axios.get("http://localhost:8081/rest/books")
		.then(({data})=> setBooks(data));
	}

	// didMount(), didUpdate(), willUnMount()
	useEffect(() => {
		findAllBooks();
	},[]);

	return (
		<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header>BookList</Card.Header>
			<Card.Body>
				<Table bordered hover striped variant="dark">
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>ISBN Number</th>
							<th>Price</th>
							<th>Language</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{books.length === 0 ? 
							<tr align="center">
								<td colSpan="6">{books.length} No Books Available.</td>
							</tr>
							:
							books.map((book)=> (
								<tr key={book.id}>
									<td>
										<Image src={book.coverPhotoURL} roundedCircle width={25} height={25}/> {book.title}
									</td>
									<td>{book.author}</td>
									<td>{book.isbnNumber}</td>
									<td>{book.price}</td>
									<td>{book.language}</td>
									<td>
										<ButtonGroup>
											<Button variant="warning" size="sm" >수정</Button>
											<Button variant="danger" size="sm">삭제</Button>
										</ButtonGroup>
									</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
};

export default BookList;