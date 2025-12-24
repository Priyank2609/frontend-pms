import { Component } from '@angular/core';
import { Project } from '../services/project';
import { Observable } from 'rxjs';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, NgForOf, NgIf, NgClass } from '@angular/common';
import { Projects } from '../interfaces/project.interface';
import { RouterLink } from "@angular/router";
import { selectAllProject, selectedProject } from '../store/selectors/project.selector';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-project-page',
  imports: [FormsModule, NgForOf, AsyncPipe, RouterLink, NgIf, NgClass],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {
  allProject!: Observable<Projects[]>



  constructor(private proj: Project, private store: Store<Projects[]>) {
    this.allProject = this.store.select(selectAllProject)
  }


}
