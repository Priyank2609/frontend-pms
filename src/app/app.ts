import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Store } from '@ngrx/store';
import { projectAction } from './store/actions/project.action';
import { Projects } from './interfaces/project.interface';
import { userAction } from './store/actions/user.action';
import { milestoneAction } from './store/actions/milestone.action';
import { taskAction } from './store/actions/task.action';
import { commentAction } from './store/actions/comment.action';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pms');

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(projectAction.loadProject())
    this.store.dispatch(userAction.loadUser())
    this.store.dispatch(milestoneAction.loadMilestone())
    this.store.dispatch(taskAction.loadTask())
    this.store.dispatch(commentAction.getAllComment())
    this.store.dispatch(projectAction.getProjectProgress());
  }
}
