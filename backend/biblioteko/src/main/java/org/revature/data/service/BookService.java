package org.revature.data.service;

import java.util.List;

import org.revature.data.entity.Book;
import org.revature.data.repository.BookRepo;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {

	private final BookRepo bookRepo;

	public List<Book> getAllBooks() {
		return bookRepo.findAll();
	}

	public Book getBook(Long id) {
		return bookRepo.findById(id).get();
	}

	public Book createBook(Book book) {
		return bookRepo.save(book);
	}
}
