import { Component } from '@angular/core';
import { Project } from '../services/project';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { projectAction } from '../store/actions/project.action';


@Component({
  selector: 'app-create-project',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-project.html',
  styleUrl: './create-project.css',
})
export class CreateProject {

  constructor(private proj: Project, private store: Store, private form: FormBuilder, private router: Router) { }

  projectForm!: FormGroup
  ngOnInit() {
    this.projectForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]

    })

  }


  createProj = () => {

    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(projectAction.createProject({ data: this.projectForm.value })
    )
    this.router.navigate(['projects'])
  }
  get f() {
    return this.projectForm.controls;
  }

}
