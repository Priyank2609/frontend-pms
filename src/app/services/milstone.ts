import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Milestone, MilestoneDetailPage } from '../interfaces/milestone.interface';

@Injectable({
  providedIn: 'root',
})
export class Milstone {
  constructor(private http: HttpClient) { }
  // URL = 'http://localhost:3001/'
  URL = 'https://pms-backend-vb2n.onrender.com/'

  createMilestone(id: string, data: any): Observable<any> {
    return this.http.post(`${this.URL}milestone/create-milestone/${id}`, data, {
      withCredentials: true
    })
  }
  getAllMilestone(): Observable<Milestone[]> {
    return this.http.get<Milestone>(`${this.URL}milestone`, { withCredentials: true }).pipe(map(r => r.getMilestone))

  }
  getMilestoneById(id: string): Observable<MilestoneDetailPage> {
    return this.http.get<MilestoneDetailPage>(`${this.URL}milestone/${id}`, { withCredentials: true }).pipe(map(r => r.milestone))
  }
  deleteMilestone(id: string): Observable<any> {
    return this.http.delete(`${this.URL}milestone/${id}`, { withCredentials: true })
  }

}
