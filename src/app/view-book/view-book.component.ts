import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  book: Book;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
  ) { }

  getBookView(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.bookService.getBookView(id)
        .subscribe(b => {
          this.book = b;
        });
    }
    else {
      console.log("invalid id");
      
    }

  }

  ngOnInit(): void {
    this.getBookView();
  }

}
