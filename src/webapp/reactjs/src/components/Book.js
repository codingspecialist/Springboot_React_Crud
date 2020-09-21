import React, { useState } from 'react';
import { Card, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';

const Book = (props) => {

	const [book, setBook] = useState({
		id: '',
		title: '',
		author: '',
		isbnNumber: '',
		price: '',
		language: ''
	});

	useEffect(() => {
		let bookId;
		if(props.match !== undefined){
			bookId = props.match.params.id;
		}

		if (bookId) {
			findBookById(bookId);
		} else{ 
			bookReset();
		}
	},[]);

	const findBookById = (bookId) => {
		axios.get("http://localhost:8081/rest/books/" + bookId)
			.then(res => {
				if (res.data != null) {
					setBook(res.data);
				}
			}).catch(error => {
				console.error("Error - " + error)
			});
	}

	// 성공후 input에 글을 비우려면 value에 state가 연결되어야 한다. (과제)
	const submitBook = (e) => {
		e.preventDefault();

		axios.post("http://localhost:8081/rest/books", book)
			.then(res => {
				if (res.data != null) {
					console.log(res.data);
					bookReset();
					alert("Book Saved Successfully");
				}
			});
	}

	const updateBook = (e) => {
		e.preventDefault();

		axios.put("http://localhost:8081/rest/books", book)
			.then(res => {
				if (res.data != null) {
					console.log(res.data);
					bookReset();
					alert("Book Update Successfully");
				}
			});
	}

	const bookReset = () => {
		setBook({
			id: '',
			title: '',
			author: '',
			isbnNumber: '',
			price: '',
			language: ''
		});
	}

	const bookChange = (e) => {
		setBook({
			...book,
			[e.target.name]: e.target.value //동적 변수 할당법 []
		});
	}

	const bookList = () => {
		props.history.push("/list"); // props의 history 사용하기  
	}

	return (
		<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header>{book.id ? 'Update Book' : 'Add Book'}</Card.Header>
			<Form id="bookFormId" onSubmit={book.id ? updateBook : submitBook} >
				<Card.Body>

					<Form.Group as={Col} controlId="formGridTitle">
						<Form.Label>Title</Form.Label>
						<Form.Control required type="text" value={book.title} name="title" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Title" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridAuthor">
						<Form.Label>Author</Form.Label>
						<Form.Control required type="text" value={book.author} name="author" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Author" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridISBNNumber">
						<Form.Label>ISBN Number</Form.Label>
						<Form.Control required type="text" value={book.isbnNumber} name="isbnNumber" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book ISBN Number" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPrice">
						<Form.Label>Price</Form.Label>
						<Form.Control required type="text" value={book.price} name="price" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Price" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridLanguage">
						<Form.Label>Language</Form.Label>
						<Form.Control required type="text" value={book.language} name="language" onChange={bookChange} className={"bg-dark text-white"} placeholder="Enter Book Language" />
					</Form.Group>

				</Card.Body>
				<Card.Footer style={{ "textAlign": "right" }}>
					<Button size="sm" variant="success" type="submit">
						{book.id ? 'Update' : 'Save'}
					</Button>{'  '}
					<Button size="sm" variant="info" type="reset" onClick={bookReset}>
						Reset
  					</Button>{'  '}
					<Button size="sm" variant="info" type="button" onClick={bookList}>
						Book List
  					</Button>
				</Card.Footer>
			</Form>
		</Card>
	);
};

export default Book;