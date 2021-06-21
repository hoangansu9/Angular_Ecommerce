import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/Book';
import { HttpClientService } from '../service/http-client.service';



@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css'],
})
export class ShopDetailComponent implements OnInit {
  book: Book | undefined;
  booksRecieved: Book;
  constructor(
    private route: ActivatedRoute,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {
    this.httpClientService
      .getBooks()
      .subscribe((response) => this.handleSuccessfulResponse(response));

    let data = localStorage.getItem('cart');

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('bookId'));
    this.httpClientService
      .getBookById(productIdFromRoute)
      .subscribe((response) => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    const bookwithRetrievedImageField = response;
    bookwithRetrievedImageField.id = this.booksRecieved.id;
    bookwithRetrievedImageField.name = this.booksRecieved.name;
    bookwithRetrievedImageField.retrievedImage =
      'data:image/jpeg;base64,' + this.booksRecieved.picByte;
    bookwithRetrievedImageField.author = this.booksRecieved.author;
    bookwithRetrievedImageField.price = this.booksRecieved.price;
    bookwithRetrievedImageField.category_id = this.booksRecieved.category_id;
    bookwithRetrievedImageField.picByte = this.booksRecieved.picByte;
  }

  addToCart() {
    let book = this.booksRecieved
    
    let cartData = [];

    let data = localStorage.getItem('cart');

    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(this.booksRecieved);
    localStorage.setItem('cart', JSON.stringify(cartData));
    book.isAdded = true;
  }
  
}
