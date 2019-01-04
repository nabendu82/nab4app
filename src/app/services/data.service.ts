import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {
    console.log('Data Serviceeeeee...')
   }

   //TODO-Change to Angular 6
   getPosts() {
     return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }
}
