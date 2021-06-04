package com.javainuse.controller;

import com.javainuse.db.CategoryRepository;
import com.javainuse.db.UserRepository;
import com.javainuse.model.Book;
import com.javainuse.model.Category;
import com.javainuse.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "categories")
public class CategoryController {@Autowired

private CategoryRepository categoryRepository;

    @GetMapping("/get")
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @PostMapping("/add")
    public void createCategory(@RequestBody Category cate) {
        categoryRepository.save(cate);
    }

    @PutMapping("/update")
    public void updateCategory(@RequestBody Category cate) {
        categoryRepository.save(cate);
    }

    @DeleteMapping(path = { "/{id}" })
    public Category deleteCategory(@PathVariable("id") long id) {
        Category cate = categoryRepository.getOne(id);
        categoryRepository.deleteById(id);
        return cate;
    }
}
