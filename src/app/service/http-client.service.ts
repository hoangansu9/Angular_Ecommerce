import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
import { Category } from '../model/Category';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>(
      'http://localhost:8080/users/add',
      newUser
    );
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8080/books/get');
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>(
      'http://localhost:8080/books/add',
      newBook
    );
  }
  deleteBook(id) {
    return this.httpClient.delete<Book>('http://localhost:8080/books/' + id);
  }
  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>(
      'http://localhost:8080/books/update',
      updatedBook
    );
  }

  getCategory() {
    return this.httpClient.get<Category[]>(
      'http://localhost:8080/categories/get'
    );
  }

  addCategory(newCategory: Category) {
    return this.httpClient.post<Category>(
      'http://localhost:8080/categories/add',
      newCategory
    );
  }
  deleteCategory(id) {
    return this.httpClient.delete<Category>(
      'http://localhost:8080/categories/' + id
    );
  }
  updateCategory(updatedCategory: Category) {
    return this.httpClient.put<Category>(
      'http://localhost:8080/categories/update',
      updatedCategory
    );
  }
}
