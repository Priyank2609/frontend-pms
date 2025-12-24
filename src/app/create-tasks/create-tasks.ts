import { Component } from '@angular/core';
import { Task } from '../services/task';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { taskAction } from '../store/actions/task.action';


@Component({
  selector: 'app-create-tasks',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-tasks.html',
  styleUrl: './create-tasks.css',
})
export class CreateTasks {
  constructor(private task: Task, private route: ActivatedRoute, private form: FormBuilder, private router: Router, private store: Store) { }

  taskForm!: FormGroup
  error: string = ''
  ngOnInit() {
    this.taskForm = this.form.group({
      name: '',
      description: ''
    })
    console.log(this.error);

  }


  createTask = () => {
    const mileId = this.route.snapshot.params['id']
    console.log(mileId);

    this.store.dispatch(taskAction.createTask({ id: mileId, data: this.taskForm.value }))
    this.router.navigate([`/milestone/${mileId}`])

    // this.task.createTasks(this.taskForm.value, mileId).subscribe({
    //   next: (res) => {
    //     console.log("successfully", res);
    //     this.router.navigate([`/milestone/${mileId}`])
    //   },
    //   error: (err) => {
    //     this.error = err.error.message
    //     console.log(this.error);
    //   }
    // })


  }

}
