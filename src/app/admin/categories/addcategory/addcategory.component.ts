import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css'],
})
export class AddcategoryComponent implements OnInit {
  @Input()
  category: Category;
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) {}
  @Output()
  categoryAddedEvent = new EventEmitter();

  ngOnInit(): void {}
  addCategory() {
    this.httpClientService.addCategory(this.category).subscribe((category) => {
      this.categoryAddedEvent.emit();
      this.router.navigate(['admin', 'categories']);
    });
  }
}
