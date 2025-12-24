import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, NgForOf, UpperCasePipe, NgIf, NgClass, LowerCasePipe } from '@angular/common';
import { Project } from '../services/project';
import { Progress } from '../interfaces/progress.interface';
import { Store } from '@ngrx/store';
import { projectProgress } from '../store/selectors/project.selector';
import { projectAction } from '../store/actions/project.action';


@Component({
  selector: 'app-dashboard',
  imports: [NgForOf, AsyncPipe, UpperCasePipe, NgIf, NgClass],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private auth: Auth, private proj: Project, private store: Store) { }

  users!: Observable<any>
  project!: Observable<any>
  progress!: Observable<any>
  value: string = ''


  ngOnInit() {
    this.users = this.auth.getAllUser()
    this.project = this.proj.getAllProject()

    this.progress = this.store.select(projectProgress)
    // console.log(this.progress);
    this.getValue()

  }

  getValue = () => {
    const name = JSON.parse(localStorage.getItem("Profile") || '')

    this.value = name.username


  }



}
