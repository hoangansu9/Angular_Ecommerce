import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent implements OnInit {
  closeResult: string;
  active = 1;

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openWindowLogin(content) {
    this.modalService.open(content, { windowClass: 'login' });
  }
}
