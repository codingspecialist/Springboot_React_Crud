package com.mightyjava.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mightyjava.domain.Book;
import com.mightyjava.domain.BookRepository;

@CrossOrigin
@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping({"", "/"})
	public ResponseEntity<List<Book>> findAll() {
		return new ResponseEntity<>(bookRepository.findAll(), HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Book> save(@RequestBody Book book){
		Book bookEntity = bookRepository.save(book);
		return new ResponseEntity<>(bookEntity, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Book> findById(@PathVariable long id){
		
		Book bookEntity = bookRepository.findById(id).orElseThrow(()-> {
			return new IllegalStateException("Book id not found");
		});
		return new ResponseEntity<>(bookEntity, HttpStatus.CREATED);
	}
	
	@PutMapping({"", "/"})
	public ResponseEntity<Book> update(@RequestBody Book book){
		Book bookEntity = bookRepository.save(book);
		return new ResponseEntity<>(bookEntity, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable long id){
		bookRepository.deleteById(id);
		return new ResponseEntity<>("delete ok", HttpStatus.OK);
	}
}

