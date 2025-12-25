import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { CommentDetail } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class Comment {
  constructor(private http: HttpClient) { }
  // URL = 'http://localhost:3001/'
  // URL = 'https://pms-backend-vb2n.onrender.com/'
  URL = 'https://pms-backend-vb2n.onrender.com/'


  getAllComment(): Observable<any> {
    return this.http.get(`${this.URL}/comment`, { withCredentials: true })
  }
  addComment(id: string, data: any,): Observable<any> {

    return this.http.post(`${this.URL}comment/create-comment/${id}`, data, { withCredentials: true })
  }
  deleteComment(id: string): Observable<any> {
    return this.http.delete(`${this.URL}comment/${id}`, { withCredentials: true })

  }
  getCommentById(id: string): Observable<CommentDetail> {
    return this.http.get<CommentDetail>(`${this.URL}comment/${id}`, { withCredentials: true }).pipe(map(r => r.comment))
  }

}
