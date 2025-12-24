import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Auth } from '../services/auth';
import { combineLatest, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
// import { myTaskAction } from '../store/actions/myTask.action';

@Component({
  selector: 'app-header',
  imports: [NgIf, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  constructor(private auth: Auth, private router: Router, private store: Store) { }
  isProfile: boolean = false;
  isMenu: boolean = false;
  isLoggedIn: boolean = false;
  profileExists: boolean = false;
  userRole: string = ''

    ;
  ngOnInit() {
    this.auth.checkToken.subscribe((res) => { this.isLoggedIn = res });
    this.auth.checkRole.subscribe(res => this.userRole = res)

    this.checkProfile()
  }

  checkProfile() {
    this.auth.checkPrfile.subscribe((res) => {
      this.profileExists = res
      console.log(res);
      console.log('Profile exists:', res);

    })

    // if (localStorage.getItem("User")) {
    //   this.profileExists = true
    // } else {
    //   this.profileExists = false
    // }
  }
  logout() {
    this.auth.logoutUser()
    // this.store.dispatch(myTaskAction.clearTask())
    this.router.navigate(['/login'])

  }

  onMenuCheck = () => {
    this.isMenu = !this.isMenu
  }

  onProfileCheck = () => {
    this.isProfile = !this.isProfile
  }



}
