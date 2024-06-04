import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = `https://jsonplaceholder.typicode.com`;
  constructor(private http: HttpClient) { }

  getPosts(index: number = 1){
    let uri = `${this.baseUrl}/posts`
    return this.http.get(uri)
  }
}
