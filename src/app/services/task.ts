import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MyTask, TaskDetailPage, TaskListPage } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class Task {
  constructor(private http: HttpClient) { }
  // URL = 'http://localhost:3001/'
  URL = 'https://pms-backend-vb2n.onrender.com/'

  createTasks(id: string, data: any): Observable<any> {
    return this.http.post(`${this.URL}task/create-task/${id}`, data, { withCredentials: true })
  }

  getAllTasks(): Observable<TaskListPage[]> {
    return this.http.get<TaskListPage>(`${this.URL}task`).pipe(map(r => r.tasks))
  }

  getTaskById(id: string): Observable<TaskDetailPage> {
    return this.http.get<TaskDetailPage>(`${this.URL}task/${id}`, { withCredentials: true }).pipe(map(r => r.task),)
  }
  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.URL}task/${id}`, { withCredentials: true })
  }

  assignTask(id: string, userId: string): Observable<any> {
    return this.http.post(`${this.URL}task/${id}/assign-task`, { userId }, { withCredentials: true })
  }
  upadateTask(mileId: string, taskId: string, status: string): Observable<TaskDetailPage> {
    return this.http.post<TaskDetailPage>(`${this.URL}task/${mileId}/update-status/${taskId}`, { status }, { withCredentials: true })
  }
  myTask(): Observable<MyTask[]> {
    return this.http.get<MyTask>(`${this.URL}task/mytasks`, { withCredentials: true }).pipe(map(r => r.tasks))
  }
}
