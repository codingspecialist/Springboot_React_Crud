import React, { useState, useEffect, useRef } from 'react';
import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createRef } from 'react';

const BookList = (props) => {

	const [books, setBooks] = useState([]);

	/* Array.from()으로 길이가 5, 값이 0인 배열 생성하기 */
	// const arr = Array.from({length: 5}, () => 0);
	// console.log(arr); // => Array(5) [0, 0, 0, 0, 0]
	// console.log(arr[0]); // => 0
	// console.log(arr.length); // => 5
	
	// useRef는 하나만 참조할 때는 사용하기 좋은데 여러개를 참조하려면 createRef()를 사용해야 한다.
	const refBooks =Array.from({ length: books.length  }).map(() => createRef());

	const changeColor = (i) => {
		if(refBooks[i].current.style.color == 'red'){
			refBooks[i].current.style.color = 'white';
		}else{
			refBooks[i].current.style.color = 'red';
		}
	}

	const findAllBooks = () => {
		axios.get("http://localhost:8081/rest/books")
			.then(({ data }) => setBooks(data));
	};

	const deleteBook = (bookId) => {
		axios.delete("http://localhost:8081/rest/books/"+bookId).then(res=>{
			if(res.data != null){
				alert("delete ok");
				setBooks(books.filter(book => book.id !== bookId));
			}
		});
	};

	// didMount(), didUpdate(), willUnMount()
	useEffect(() => {
		findAllBooks();
	}, []);



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
							<tr align="center" >
								<td colSpan="6">{books.length} No Books Available.</td>
							</tr>
							:
							books.map((book, i) => (
								<tr key={book.id} ref={refBooks[i]} onClick={()=> changeColor(i)}>
									<td>{book.title}</td>
									<td>{book.author}</td>
									<td>{book.isbnNumber}</td>
									<td>{book.price}</td>
									<td>{book.language}</td>
									<td>
										<ButtonGroup>
											<Link to={"/edit/"+book.id} className="btn btn-sm btn-outline-primary">수정</Link>
											<Button variant="danger" size="sm" onClick={() => deleteBook(book.id)}>삭제</Button>
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