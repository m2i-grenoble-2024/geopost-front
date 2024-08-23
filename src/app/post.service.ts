import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './entity';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  fetchAll() {
    return this.http.get<Post[]>('http://localhost:8000/api/post');
  }

  persist(post:Post) {
    return this.http.post<Post>('http://localhost:8000/api/post',post);
  }
}
