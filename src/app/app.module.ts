import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddbookComponent } from './admin/books/addbook/addbook.component';
import { BooksComponent } from './admin/books/books.component';
import { ViewbookComponent } from './admin/books/viewbook/viewbook.component';
import { AddcategoryComponent } from './admin/categories/addcategory/addcategory.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ViewcategoryComponent } from './admin/categories/viewcategory/viewcategory.component';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { UsersComponent } from './admin/users/users.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { PageMenuComponent } from './header/page-menu/page-menu.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { ViewedComponent } from './viewed/viewed.component';
import { DropdownDirective } from 'src/shared/dropdown.directive';
import { BookDetailComponent } from './book-detail/book-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    FooterComponent,
    AdduserComponent,
    ViewuserComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
    ShopbookComponent,
    CategoriesComponent,
    AddcategoryComponent,
    ViewcategoryComponent,
    CopyrightComponent,
    NewsletterComponent,
    ViewedComponent,
    HeaderComponent,
    PageMenuComponent,
    TopBarComponent,
    MainNavComponent,
    HeaderMainComponent,
    DropdownDirective,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
