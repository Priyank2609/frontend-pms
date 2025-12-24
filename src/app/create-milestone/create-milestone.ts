import { Component } from '@angular/core';
import { Milstone } from '../services/milstone';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { projectAction } from '../store/actions/project.action';
import { milestoneAction } from '../store/actions/milestone.action';

@Component({
  selector: 'app-create-milestone',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './create-milestone.html',
  styleUrl: './create-milestone.css',
})
export class CreateMilestone {
  constructor(private mile: Milstone, private router: Router, private form: FormBuilder, private route: ActivatedRoute, private store: Store) { }

  milestoneForm!: FormGroup
  submitted = false;
  ngOnInit() {

    this.milestoneForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.milestoneForm.controls;
  }

  createMile = () => {

    this.submitted = true;

    if (this.milestoneForm.invalid) {
      return;
    }

    const id = this.route.snapshot.params['id'];
    console.log(id);

    this.store.dispatch(milestoneAction.createMilstone({ id: id, data: this.milestoneForm.value }))
    console.log(this.milestoneForm.value);
    this.router.navigate([`project/${id}`]);


    // this.mile.createMilestone(this.milestoneForm.value, projId).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.router.navigate([`project/${projId}`]);
    //   },
    //   error: (err) => {
    //     console.error('Error creating milestone:', err);
    //   }
    // });
  };
}
