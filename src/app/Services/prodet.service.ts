import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdetService {

  constructor( private http:HttpClient) {  }

  getDetails(id:number):Observable<object>{
    return this.http.get("http://localhost:3000/books/"+id);

  }
}
