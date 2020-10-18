import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookFormGroup: FormGroup;

  submitted: boolean = false;

  book: Book;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.book = new Book();

    this.buildBookForm();
  }

  buildBookForm() {
    this.bookFormGroup = this.formBuilder.group({
      book: this.formBuilder.group({
        _id: [this.book._id],
        title: new FormControl(this.book.title, [Validators.required, Validators.minLength(2)]),
        author: [this.book.author, Validators.required],

      })
    })
  }

  get title() { return this.bookFormGroup.get('book').get('title'); }
  get author() { return this.bookFormGroup.get('book').get('author'); }
  onSubmit() {
    this.submitted = true;

    if (this.bookFormGroup.invalid) {
      return;
    }

    // if (this.employeeFormGroup.get('employee').value.id != '') {
    //   this.employeeService.updateEmployee(this.employeeFormGroup.get('employee').value)
    //     .subscribe(emp => {
    //       if (emp) {
    //         this.router.navigate(['employee'])
    //       }
    //       else { alert("Name and Date of hire are required") }
    //     });
    // }
    // else {
    this.bookService.addBook(this.bookFormGroup.get('book').value)
      .subscribe(b => {
        if (b) {
          this.router.navigate(['home'])
        }
        else { alert("Name and Date of hire are required") }
      });
    // }

  }

}
