import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [NgIf, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(private auth: Auth) { }

  userRole: string = ''

  ngOnInit() {
    this.auth.checkRole.subscribe(res => this.userRole = res)
  }
}
