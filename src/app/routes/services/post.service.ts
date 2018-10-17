import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostParameters } from '../models/post-parameters';
import { environment } from '@env/environment';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {

  }
  getPagedPosts(postParameter?: any | PostParameters) {
    console.log(environment.SERVER_URL);
    return this.http.get(`${environment.SERVER_URL}/posts`, {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.cgzl.hateoas+json'
      }),
      observe: 'response',
      params: postParameter
    });
  }

  /*
  addPost(post: PostAdd) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/vnd.cgzl.post.create+json',
        'Accept': 'application/vnd.cgzl.hateoas+json'
      })
    };
    return this.http.post<Post>(`${this.apiUrlBase}/posts`, post, httpOptions);
  }  */

  getPostById(id: number | string): Observable<Post> {
    return this.http.get<Post>(`${environment.SERVER_URL}/posts/${id}`);
  }
/*
  partiallyUpdatePost(id: number | string, patchDocument: Operation[]): Observable<any> {
    return this.http.patch(`${this.apiUrlBase}/posts/${id}`, patchDocument,
      {
        headers: { 'Content-Type': 'application/json-patch+json' }
      });
  }
*/


}
