package com.mightyjava.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class Book {

	@Id
	@GeneratedValue
	private Long id;
	
	@NotNull
	private String title;
	
	@NotNull
	private String author;

	@NotNull
	private Long isbnNumber;
	
	@NotNull
	private Double price;
	
	@NotNull
	private String language;


}
