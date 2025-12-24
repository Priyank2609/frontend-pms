import { ChangeDetectorRef, Component } from '@angular/core';
import { Project } from '../services/project';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, pipe, switchMap } from 'rxjs';
import { AsyncPipe, NgForOf, NgClass, NgIf, DatePipe } from '@angular/common';
import { selectProjectbyId } from '../store/selectors/project.selector';
import { Store } from '@ngrx/store';
import { projectAction } from '../store/actions/project.action';
import { milestoneAction } from '../store/actions/milestone.action';
// import { selectAllProject, selectedProjectById } from '../store/selectors/project.selector';

@Component({
  selector: 'app-project-detail-page',
  imports: [AsyncPipe, NgForOf, NgClass, NgIf, RouterLink, DatePipe],
  templateUrl: './project-detail-page.html',
  styleUrl: './project-detail-page.css',
})
export class ProjectDetailPage {
  constructor(private proj: Project, private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef, private store: Store) { }

  projectDetail!: Observable<any>
  role: string = ''
  error: string = ''
  currentUserId: string = '';

  ngOnInit() {
    this.getUser()
    console.log(selectProjectbyId);
    this.projectDetail = this.store.select(selectProjectbyId)
    this.route.params.subscribe(params => {
      this.store.dispatch(
        projectAction.getProjectById({ id: params['id'] })
      )
    })
    this.store.dispatch(milestoneAction.loadMilestone())


  }

  getUser = () => {

    const user = JSON.parse(localStorage.getItem('Profile') || '')
    this.role = user.role
    console.log(this.role);
    this.currentUserId = user._id
    console.log(this.currentUserId);

  }
  deleteProject(id: string) {

    this.store.dispatch(
      projectAction.deleteProject({ id })
    )

    this.router.navigate(['projects'])
  }

}
