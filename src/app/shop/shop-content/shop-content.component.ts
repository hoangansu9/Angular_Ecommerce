import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/model/Book';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css'],
})
export class ShopContentComponent implements OnInit {
  books: Array<Book>;
  booksRecieved: Array<Book>;

  cartBooks: any;

  faShoppingCart = faShoppingCart;
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private router: Router,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit() {
    this.httpClientService
      .getBooks()
      .subscribe((response) => this.handleSuccessfulResponse(response));

    let data = localStorage.getItem('cart');

    if (data !== null) {
      this.cartBooks = JSON.parse(data);
    } else {
      this.cartBooks = [];
    }
  }

  handleSuccessfulResponse(response) {
    this.books = new Array<Book>();

    this.booksRecieved = response;
    for (const book of this.booksRecieved) {
      const bookwithRetrievedImageField = new Book();
      bookwithRetrievedImageField.id = book.id;
      bookwithRetrievedImageField.name = book.name;

      bookwithRetrievedImageField.retrievedImage =
        'data:image/jpeg;base64,' + book.picByte;
      bookwithRetrievedImageField.author = book.author;
      bookwithRetrievedImageField.price = book.price;
      bookwithRetrievedImageField.picByte = book.picByte;
      this.books.push(bookwithRetrievedImageField);
    }
  }

  addToCart(bookId) {
    let book = this.books.find((book) => {
      return book.id === +bookId;
    });
    let cartData = [];

    let data = localStorage.getItem('cart');

    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(book);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    book.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartBooks = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
  emptyCart() {
    this.cartBooks = [];
    localStorage.clear();
  }
}
