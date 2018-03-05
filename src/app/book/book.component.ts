import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  //Add a function for log out by simply delete JWT token
  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Getting a list of book data from RESTful API 
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    this.http.get('/api/book', httpOptions).subscribe(data => {
      this.books = data;
      console.log(this.books);
    }, err => {
      if(err.status === 401) {
        this.router.navigate(['login']);
      }
    });

  }

}
