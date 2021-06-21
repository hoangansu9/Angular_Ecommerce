package angular.backend.ecommerce.controller;

import java.io.IOException;
import java.util.*;

import angular.backend.ecommerce.db.BookRepository;
import angular.backend.ecommerce.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import javax.swing.text.html.Option;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "books")
public class BookController {

    private byte[] bytes;

    @Autowired
    private BookRepository bookRepository;

  @GetMapping("/paging")
  public ResponseEntity<Map<String, Object>> getAllTutorials(
    @RequestParam(required = false) String title,
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "10") int size
  ) {

    try {
      List<Book> tutorials = new ArrayList<Book>();
      Pageable paging = PageRequest.of(page-1, size);

      Page<Book> pageTuts;
      pageTuts = bookRepository.findAll(paging);

      tutorials = pageTuts.getContent();

      Map<String, Object> response = new HashMap<>();
      response.put("tutorials", tutorials);
      response.put("currentPage", pageTuts.getNumber());
      response.put("totalItems", pageTuts.getTotalElements());
      response.put("totalPages", pageTuts.getTotalPages());

      return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


    @GetMapping("/get")
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
  @GetMapping("/get/{id}")
  public Optional<Book> getBookById(@RequestParam Long id) {
    return bookRepository.findById(id);
  }


    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
    }

    @PostMapping("/add")
    public void createBook(@RequestBody Book book) throws IOException {
        book.setPicByte(this.bytes);
        bookRepository.save(book);
        this.bytes = null;
    }

    @PutMapping("/update")
    public void updateBook(@RequestBody Book book) {
        bookRepository.save(book);
    }

    @DeleteMapping(path = { "/{id}" })
    public Book deleteBook(@PathVariable("id") long id) {
        Book book = bookRepository.getOne(id);
        bookRepository.deleteById(id);
        return book;
    }



}
