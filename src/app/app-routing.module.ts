import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './admin/books/books.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { UsersComponent } from './admin/users/users.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'admin/categories', component: CategoriesComponent },
  { path: '', component: ShopComponent },
  { path: 'book/:bookId', component: ShopDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
