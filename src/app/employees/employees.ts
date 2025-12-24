import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf, UpperCasePipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Store } from '@ngrx/store';
import { getAllUser, selectedUser } from '../store/selectors/user.selector';

@Component({
  selector: 'app-employees',
  imports: [NgForOf, UpperCasePipe, AsyncPipe, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {

  constructor(private auth: Auth, private store: Store) {
    this.employees = store.select(getAllUser)
  }

  employees!: Observable<any>

}
