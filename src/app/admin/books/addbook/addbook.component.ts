import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { Book } from '../../../model/Book';
import { HttpClientService } from '../../../service/http-client.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent implements OnInit {
  @Input()
  book: Book;
  

  @Output()
  bookAddedEvent = new EventEmitter();

  public selectedFile;
  imgURL: any;
  categories: Array<Category>;
  constructor(
    private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.httpClientService
      .getCategory()
      .subscribe((response) => this.handleSuccessfulResponse(response));
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  saveBook() {
    //If there is no book id then it is an add book call else it is an edit book call
    if (this.book.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient
        .post('http://localhost:8080/books/upload', uploadData, {
          observe: 'response',
        })
        .subscribe((response) => {
          if (response.status === 200) {
            this.httpClientService.addBook(this.book).subscribe((book) => {
              this.bookAddedEvent.emit();
              this.router.navigate(['admin', 'books']);
            });
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        });
    } else {
      this.httpClientService.updateBook(this.book).subscribe((book) => {
        this.bookAddedEvent.emit();
        this.router.navigate(['admin', 'books']);
      });
    }
  }
  handleSuccessfulResponse(response) {
    this.categories = response;
  
  }
}
