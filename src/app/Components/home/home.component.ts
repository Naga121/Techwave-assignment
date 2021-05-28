import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  services:any;

  constructor(private bookService:BookService) { 
  
  }

  ngOnInit(): void {
    this.bookService.getServices().subscribe(
      (data)=>this.services = data
    );
  }

}
