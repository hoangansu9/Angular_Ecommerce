package com.javainuse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.javainuse.db.UserRepository;
import com.javainuse.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/get")
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@PostMapping("/add")
	public void createUser(@RequestBody User user) {
		userRepository.save(user);
	}

	@DeleteMapping(path = { "/{id}" })
	public User deleteUser(@PathVariable("id") long id) {
		User user = userRepository.getOne(id);
		userRepository.deleteById(id);
		return user;
	}
}