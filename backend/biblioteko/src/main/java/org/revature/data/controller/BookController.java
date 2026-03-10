package org.revature.data.controller;

import java.util.List;

import org.revature.data.entity.Book;
import org.revature.data.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/books")
public class BookController {

	@Autowired
	private final BookService bookService;

	@GetMapping
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}

	@GetMapping("{bookid}")
	public Book getBook(@PathVariable("bookid") Long bookId) {
		return bookService.getBook(bookId);
	}

	@PostMapping
	public Book createBook(@RequestBody Book book) {
		return bookService.createBook(book);
	}

}
