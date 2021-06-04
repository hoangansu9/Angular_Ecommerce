import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css'],
})
export class ViewcategoryComponent implements OnInit {
  @Input()
  category: Category;
  @Output()
  categoryDeletedEvent = new EventEmitter();
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  deleteCategory() {
    this.httpClientService
      .deleteCategory(this.category.id)
      .subscribe((category) => {
        this.categoryDeletedEvent.emit();
        this.router.navigate(['admin', 'categories']);
      });
  }
}
