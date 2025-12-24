import { ChangeDetectorRef, Component } from '@angular/core';
import { Task } from '../services/task';
import { AsyncPipe, DatePipe, NgForOf, NgClass, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Auth } from '../services/auth';
import { Comment } from '../services/comment';
import { Store } from '@ngrx/store';
import { taskAction } from '../store/actions/task.action';
import { getTaskById } from '../store/selectors/task.selector';
import { commentAction } from '../store/actions/comment.action';

@Component({
  selector: 'app-task-detail-page',
  imports: [DatePipe, NgForOf, AsyncPipe, NgClass, NgIf, RouterLink],
  templateUrl: './task-detail-page.html',
  styleUrl: './task-detail-page.css',
})
export class TaskDetailPage {
  constructor(private tas: Task, private route: ActivatedRoute, private router: Router, private store: Store, private check: ChangeDetectorRef, private auth: Auth, private comm: Comment) { }
  task!: Observable<any>
  error: string = ''
  role: any
  mileId: string = ''
  currentUser = ''

  ngOnInit() {
    const taskId = this.route.snapshot.params['id']
    // this.task = this.tas.getTaskById(taskId)
    // this.tas.getTaskById(taskId).subscribe(r => console.log(r)
    // )
    this.role = this.auth.checkRole.value
    console.log(this.role);
    this.check.detectChanges()
    const profile = JSON.parse(localStorage.getItem('Profile') || '')


    this.currentUser = profile._id



    this.store.dispatch(taskAction.getTaskById({ id: taskId }))
    this.task = this.store.select(getTaskById)


    console.log(this.currentUser, this.task);
  }
  deleteTask(id: string) {
    // const taskId = this.route.snapshot.params['id']


    this.store.dispatch(taskAction.deleteTask({ id: id }))
    this.router.navigate(['/tasks'])
    // this.tas.deleteTask(id).subscribe({
    //   next: (res) => {
    //     console.log("deleted ", res);
    //     this.router.navigate(['/tasks'])
    //   },
    //   error: (err) => {
    //     console.log("hy");

    //     console.log("Error", err);
    //     this.error = err.error.message
    //     this.check.markForCheck()

    //   }
    // })
  }

  updateStatus(status: string) {

    const taskId = this.route.snapshot.params['id']
    console.log(taskId);
    this.store.select(getTaskById).pipe(take(1)).subscribe(tasks => {
      console.log(tasks.mileStone._id);
      const mileId = tasks.mileStone._id


      this.store.dispatch(taskAction.updateStatus({ mileId: mileId, taskId: taskId, status: status }))
      this.router.navigate(['/my-tasks'])
      // this.tas.upadateTask(mileId, taskId, status).subscribe({
      //   next: (res) => {
      //     console.log(res);
      //     this.task = this.tas.getTaskById(taskId);
      //     this.router.navigate(['/my-tasks'])
      //   }

      // })
    })
    console.log(status);






  }


}
