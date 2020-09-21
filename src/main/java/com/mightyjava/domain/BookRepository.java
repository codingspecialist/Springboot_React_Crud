package com.mightyjava.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book, Long> {
	
	@Query(value = "SELECT * FROM book WHERE title like %?1%", nativeQuery = true)
	Page<Book> mFindSearch(Pageable pageable, String search);
}
