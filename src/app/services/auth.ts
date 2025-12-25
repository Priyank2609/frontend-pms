import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ProfileResponse } from '../interfaces/profile.interface';
import { User } from '../interfaces/users.interface';
import { UserResponse } from '../interfaces/userDetail.interface';

@Injectable({
  providedIn: 'root',
})
export class Auth {



  private loginCheck = new BehaviorSubject<boolean>(!!localStorage.getItem("Token"))
  checkToken = this.loginCheck

  private profileCheck = new BehaviorSubject<boolean>(false)
  checkPrfile = this.profileCheck

  private roleCheck = new BehaviorSubject<string>(this.getRole())
  checkRole = this.roleCheck


  private getRole(): string {
    const profile = localStorage.getItem("Profile");
    return profile ? JSON.parse(profile).role : ''

  }

  private isValidProfile(): boolean {
    const profileStr = localStorage.getItem("Profile");

    if (!profileStr || profileStr === "undefined" || profileStr === "null") {
      return false;
    }

    const profileObj = JSON.parse(profileStr);

    return !!profileObj.profile;
  }
  constructor(private http: HttpClient) {
    this.profileCheck.next(this.isValidProfile())
  }

  URL = 'http://localhost:3001/'
  // URL = 'https://pms-backend-vb2n.onrender.com/'

  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.URL}users/login`, data, {
      withCredentials: true
    })
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.URL}users/register`, data, {
      withCredentials: true
    })

  }
  setLogin(token: string, user: any) {
    localStorage.setItem("Token", token)
    localStorage.setItem("Profile", JSON.stringify(user))
    this.profileCheck.next(this.isValidProfile())
    this.loginCheck.next(true)
    this.roleCheck.next(user.role)
  }
  logoutUser() {
    localStorage.removeItem("Token")
    localStorage.removeItem("Profile")
    this.profileCheck.next(false)
    this.loginCheck.next(false)
    this.roleCheck.next('')
  }
  getAllUser(): Observable<User[]> {
    return this.http.get<User>(`${this.URL}users`, { withCredentials: true }).pipe(map(r => r.users))
  }
  getUserById(id: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.URL}users/${id}`, { withCredentials: true }).pipe(map(r => r.user))
  }


  userProfile(data: any) {

    return this.http.post(`${this.URL}profile/create-profile`, data, {
      withCredentials: true

    }).pipe(
      tap((res: any) => {
        const storedUser = JSON.parse(localStorage.getItem("Profile") || '{}');

        storedUser.profile = res.newProfile;

        localStorage.setItem("Profile", JSON.stringify(storedUser));
        this.profileCheck.next(true);
      })
    );

  }

  setProfile = () => {
    this.checkPrfile.next(this.isValidProfile())
  }
  getUserProfile(): Observable<any> {
    return this.http.get<ProfileResponse>(`${this.URL}profile`, { withCredentials: true }).pipe(map(p => p.profile || ''))
  }
  updateProfile(id: string, data: any): Observable<any> {

    return this.http.patch(`${this.URL}profile/update-profile/${id}`, data, { withCredentials: true })
  }



}
