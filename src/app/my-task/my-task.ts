import { Component } from '@angular/core';
import { Task } from '../services/task';
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf, NgClass, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Store } from '@ngrx/store';
import { getMyTask } from '../store/selectors/task.selector';
import { taskAction } from '../store/actions/task.action';


@Component({
  selector: 'app-my-task',
  imports: [AsyncPipe, NgForOf, NgClass, RouterLink, NgIf],
  templateUrl: './my-task.html',
  styleUrl: './my-task.css',
})
export class MyTask {
  constructor(private store: Store) {
    this.tasks = store.select(getMyTask)
  }
  tasks!: Observable<any>


  ngOnInit() {
    this.store.dispatch(taskAction.myTask())
  }

}
