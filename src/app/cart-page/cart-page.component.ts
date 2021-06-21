import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartBooks: any;
  constructor() {}

  ngOnInit(): void {
    let data = localStorage.getItem('cart');

    if (data !== null) {
      this.cartBooks = JSON.parse(data);
    } else {
      this.cartBooks = [];
    }

    console.log('this.cartBooks :>> ', this.cartBooks);
  }
}
