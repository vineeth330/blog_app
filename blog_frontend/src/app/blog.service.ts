import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id?: number;
  title: string;
  content: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://127.0.0.1:8000/api/posts/'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
  sentdata(data:any){
    console.log(data)
    return this.http.post('http://127.0.0.1:8000/register',data)
  }
  loginuser(data:any){
    console.log(data)
    return this.http.post('http://127.0.0.1:8000/login',data)
  }
  id=0
  setdata(data:any){
    this.id=data
  }
  getbyid(data:any){
    return this.http.get('http://127.0.0.1:8000/view_item/?id='+data)
  }
  view(){
    return this.http.get('http://127.0.0.1:8000/view_item/')
  }
  update(data:any){
    return this.http.post('http://127.0.0.1:8000/update_item/',data)
  }
  delete(data:any){
    return this.http.delete(`http://127.0.0.1:8000/item/${data}/delete`)
  }
}
