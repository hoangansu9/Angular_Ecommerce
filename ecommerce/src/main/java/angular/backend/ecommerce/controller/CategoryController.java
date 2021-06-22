package angular.backend.ecommerce.controller;


import angular.backend.ecommerce.db.CategoryRepository;
import angular.backend.ecommerce.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "categories")
public class CategoryController {
  @Autowired

  private CategoryRepository categoryRepository;

  @GetMapping("/get")
  public List<Category> getCategories() {
    return categoryRepository.findAll();
  }

  @GetMapping(path = {"/get/{id}"})
  public Optional<Category> getCategoryById(@PathVariable("id") long id) {
    return categoryRepository.findById(id);
  }

  @PostMapping("/add")
  public void createCategory(@RequestBody Category cate) {
    categoryRepository.save(cate);
  }

  @PutMapping("/update")
  public void updateCategory(@RequestBody Category cate) {
    categoryRepository.save(cate);
  }

  @DeleteMapping(path = {"/{id}"})
  public Category deleteCategory(@PathVariable("id") long id) {
    Category cate = categoryRepository.getOne(id);
    categoryRepository.deleteById(id);
    return cate;
  }
}
