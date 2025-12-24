import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../services/auth';
import { AsyncPipe, NgForOf, UpperCasePipe, NgIf } from '@angular/common';
import { Project } from '../services/project';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../services/task';
import { Store } from '@ngrx/store';
import { projectAction } from '../store/actions/project.action';
import { taskAction } from '../store/actions/task.action';


@Component({
  selector: 'app-assign-user',
  imports: [NgForOf, UpperCasePipe, NgIf],
  templateUrl: './assign-user.html',
  styleUrl: './assign-user.css',
})
export class AssignUser {

  constructor(private user: Auth, private proj: Project, private route: ActivatedRoute, private store: Store, private router: Router, private cd: ChangeDetectorRef, private task: Task) {

  }
  role!: string;
  allUsers: any[] = [];
  filteredUsers: any[] = [];
  error: string = '';

  ngOnInit() {

    this.role = this.user.checkRole.value;
    console.log("Logged-in role:", this.role);




    this.user.getAllUser().subscribe({
      next: (users) => {
        this.allUsers = users;
        this.filterByRole()
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
    console.log(this.filteredUsers);
    console.log(this.allUsers);
  }


  assignUser(userId: string) {

    const prodId: any = this.route.snapshot.params['id']

    // this.proj.assignProject(projectId, userId).subscribe({
    //   next: (res) => {
    //     console.log('User assigned successfully', res);
    //     this.router.navigate([`project/${projectId}`])

    //   },
    //   error: (err) => {
    //     console.log('Error assigning user', err.error.message);
    //     this.error = err.error.message
    //     this.cd.detectChanges()
    //   }

    // })


    this.store.dispatch(projectAction.assignProject({ prodId, userId }))
    this.router.navigate([`project/${prodId}`])



  }


  filterByRole() {
    if (this.role === "Admin") {
      this.filteredUsers = this.allUsers.filter((u) => u.role === "Project Manager")

    } else if (this.role === "Team Leader") {
      this.filteredUsers = this.allUsers.filter((u) => u.role === 'Employee')
    }
  }


  handleAssign(userId: string) {
    if (this.role === "Admin") {
      this.assignUser(userId);
    } else if (this.role === "Team Leader") {
      this.assignTask(userId);
    }
  }


  assignTask(userId: string) {
    const taskId = this.route.snapshot.params['id']


    this.store.dispatch(taskAction.assignTo({ id: taskId, userId: userId }))
    this.router.navigate([`/task/${taskId}`])
    // this.task.assignTask(taskId, userId).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.router.navigate([`/task/${taskId}`])

    //   },
    //   error: (err) => {
    //     console.log('Error assigning user', err.error.message);
    //     this.error = err.error.message
    //     this.cd.detectChanges()
    //   }
    // })


  }

}
