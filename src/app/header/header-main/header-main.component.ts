import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HttpClientService } from 'src/app/service/http-client.service';
@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css'],
})
export class HeaderMainComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  constructor(
    private router: Router,
    private httpClientService: HttpClientService
  ) {}
  cartBooks: any;
  ngOnInit() {
    let data = localStorage.getItem('cart');

    if (data !== null) {
      this.cartBooks = JSON.parse(data);
    } else {
      this.cartBooks = [];
    }
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartBooks = [];
    localStorage.clear();
  }
}
