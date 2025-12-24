import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { userAction } from '../store/actions/user.action';
import { getById } from '../store/selectors/user.selector';

@Component({
  selector: 'app-emploee-view-page',
  imports: [AsyncPipe, UpperCasePipe, RouterLink, DatePipe],
  templateUrl: './emploee-view-page.html',
  styleUrl: './emploee-view-page.css',
})
export class EmploeeViewPage {
  constructor(private auth: Auth, private route: ActivatedRoute, private store: Store) { }

  employee!: Observable<any>

  ngOnInit() {

    this.getUserById()
  }

  getUserById() {
    this.route.params.subscribe((param) => {
      this.store.dispatch(userAction.getProfileById({ id: param['id'] }))
    })
    console.log(this.employee);

    this.employee = this.store.select(getById)

  }

}
