import { AsyncPipe, DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../services/task';
import { RouterLink } from "@angular/router";
import { Auth } from '../services/auth';
import { Store } from '@ngrx/store';
import { selectedUser } from '../store/selectors/user.selector';
import { getAllTask, selectedTask } from '../store/selectors/task.selector';


@Component({
  selector: 'app-task-list-page',
  imports: [NgClass, NgForOf, AsyncPipe, RouterLink, NgIf],
  templateUrl: './task-list-page.html',
  styleUrl: './task-list-page.css',
})
export class TaskListPage {
  constructor(private store: Store) {
    this.tasks = store.select(getAllTask)
  }

  tasks: any
  profile: any




}
