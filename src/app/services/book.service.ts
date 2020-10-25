import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private baseUrl = 'http://localhost:8080/api/books';

  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl).pipe(
      map(response => {
        // console.log(response);
        return response.map(o => new Book(o))
      }),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    )
  }

  getBookView(id: string): Observable<Book> {
    return this.httpClient.get<Book>(this.baseUrl + '/' + id).pipe(
      map(response => {
        return new Book(response)
      }),
      catchError((e: any) => Observable.throw(this.errorHandler(e)))
    )
  }

  addBook(emp: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.baseUrl, emp).pipe(
      catchError((e: any) => Observable.throw(this.errorHandler(e))));
  }

  deleteBook(id: string): Observable<{}> {
    return this.httpClient.delete(this.baseUrl + '/' + id).pipe(
      catchError((e: any) => Observable.throw(this.errorHandler(e))));
  }

  updateBook(emp: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.baseUrl, emp).pipe(
      catchError((e: any) => Observable.throw(this.errorHandler(e))));
  }

  errorHandler(errorResp: any): void {
    let msg = `status: ${errorResp.status}\nmessage: ${errorResp.error[Object.keys(errorResp.error)[0]]}`
    alert(msg)
  }
}
