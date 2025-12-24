import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Auth } from '../services/auth';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, NgIf],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  constructor(private auth: Auth) { }
  isLoggedIn: boolean = false;
  userRole: string = ''

  ngOnInit() {

    this.auth.checkToken.subscribe(status => this.isLoggedIn = status);
    this.auth.checkRole.subscribe(role => this.userRole = role)



  }

}
