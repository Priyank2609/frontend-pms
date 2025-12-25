import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Projects } from '../interfaces/project.interface';
import { ProjectReportResponse } from '../interfaces/projectDetail.interface';
import { Progress } from '../interfaces/progress.interface';

@Injectable({
  providedIn: 'root',
})


export class Project {

  constructor(private http: HttpClient) { }
  // URL = 'http://localhost:3001/'
  // URL = 'https://pms-backend-vb2n.onrender.com/'
  URL = 'https://pms-backend-vb2n.onrender.com/'

  createPrject(data: any) {
    return this.http.post(`${this.URL}project/create-project`, data, {
      withCredentials: true
    })
  }

  getAllProject = (): Observable<Projects[]> => {
    return this.http.get<{ projects: Projects[] }>(`${this.URL}project`, { withCredentials: true }).pipe(map(p => p.projects))
  }

  getProjectById = (id: string): Observable<ProjectReportResponse> => {
    return this.http.get<ProjectReportResponse>(`${this.URL}project/${id}`, { withCredentials: true }).pipe(map(r => r.report))
  }
  assignProject = (id: string, userId: string): Observable<any> => {
    return this.http.post(`${this.URL}project/${id}/assign`, { userId }, {
      withCredentials: true
    })
  }

  getProjectProgress = (): Observable<Progress> => {
    return this.http.get<Progress>(`${this.URL}project/progress`, { withCredentials: true })
  }
  deleteProject = (id: string): Observable<any> => {
    return this.http.delete(`${this.URL}project/${id}`, { withCredentials: true })
  }
}
