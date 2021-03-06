import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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
    @Inject(DOCUMENT) private _document: Document,
    private route: ActivatedRoute,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('bookId'));
    this.httpClientService
      .getBookById(productIdFromRoute)
      .subscribe((response) => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    const bookwithRetrievedImageField = response;
    bookwithRetrievedImageField.retrievedImage =
      'data:image/jpeg;base64,' + bookwithRetrievedImageField.picByte;
    this.getCateName(bookwithRetrievedImageField.category_id);
    this.booksRecieved = bookwithRetrievedImageField;
    console.log('this.booksRecieved :>> ', this.booksRecieved);
  }

  getCateName(id) {
    this.httpClientService.getCategoryById(id).subscribe((response) => {
      const { name } = response;
      this.booksRecieved.cateName = name;
    });
  }
  addToCart() {
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(this.booksRecieved);
    localStorage.setItem('cart', JSON.stringify(cartData));
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
}
