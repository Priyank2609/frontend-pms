import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-cta-section',
  imports: [NgIf, RouterLink],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection {

  constructor(private auth: Auth, private router: Router) { }
  isLoggedIn: boolean = false;


  ngOnInit() {
    this.auth.checkToken.subscribe((res) => { this.isLoggedIn = res });
  }

  logout() {
    this.auth.logoutUser()
    this.router.navigate(['/login'])

  }
}
