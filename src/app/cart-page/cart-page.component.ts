import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../service/toastService';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartBooks: any;
  constructor(
    private modalService: NgbModal,
    public toastService: ToastService,
    private router: Router
  ) {}
  total = 0;
  closeResult: string;
  active = 1;

  ngOnInit() {
    let data = localStorage.getItem('cart');

    if (data !== null) {
      this.cartBooks = JSON.parse(data);
    } else {
      this.cartBooks = [];
    }
    this.onTotal();
  }
  onTotal() {
    this.cartBooks.forEach((element) => {
      this.total += Number(element.price);
    });
  }
  openWindowLogin(content) {
    this.modalService.open(content, { windowClass: 'login' });
  }
  showSuccess() {
    this.toastService.show('Đặt hàng thành công! ༼ つ ◕_◕ ༽つ', {
      classname: 'bg-success text-light',
      delay: 10000,
    });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
    this.emptyCart();
  }
  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
  emptyCart() {
    this.cartBooks = [];
    localStorage.clear();
  }
}
