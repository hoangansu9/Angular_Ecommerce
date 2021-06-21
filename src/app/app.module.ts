import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownDirective } from 'src/shared/dropdown.directive';
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
import { BrandsComponent } from './brands/brands.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { PageMenuComponent } from './header/page-menu/page-menu.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopContentComponent } from './shop/shop-content/shop-content.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { ViewedComponent } from './viewed/viewed.component';
@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    UsersComponent,
    FooterComponent,
    AdduserComponent,
    ViewuserComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
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
    ShopComponent,
    ShopSidebarComponent,
    ShopContentComponent,
    ShopDetailComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
