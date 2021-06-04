import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category>;
  selectedCategory: Category;
  action: string;
  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.refreshData();
    this.httpClientService
      .getCategory()
      .subscribe((response) => this.handleSuccessfulResponse(response));
    this.activatedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];
      const selectedCategoryId = params['id'];
      if (selectedCategoryId) {
        this.selectedCategory = this.categories.find(
          (category) => category.id === +selectedCategoryId
        );
      }
    });
  }
  refreshData() {
    this.httpClientService
      .getCategory()
      .subscribe((response) => this.handleSuccessfulResponse(response));

    this.activatedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];
    });
  }

  handleSuccessfulResponse(response) {
    this.categories = response;
  }
  viewCategory(id: number) {
    this.router.navigate(['admin', 'categories'], {
      queryParams: { id, action: 'view' },
    });
  }
  addCategory() {
    this.selectedCategory = new Category();
    this.router.navigate(['admin', 'categories'], {
      queryParams: { action: 'add' },
    });
  }
}
