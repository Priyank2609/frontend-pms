import { ChangeDetectorRef, Component } from '@angular/core';
import { email } from '@angular/forms/signals';
import { Auth } from '../services/auth';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [FormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private reg: Auth, private route: Router, private cd: ChangeDetectorRef) { }
  selectedRole: string = "";
  error: string = ''
  userReg = (form: any) => {
    console.log(form.value)

    const data = {
      email: form.value.email,
      username: form.value.username,
      role: form.value.role,
      password: form.value.password,
      developer: form.value.developer
    }
    this.reg.registerUser(data).subscribe({
      next: (res) => {
        console.log("User registered:", res);

        form.reset();
        this.route.navigate(['/login']);
      },

      error: (err) => {
        console.log("Registration Error:", err.error.message);
        this.error = err.error.message;
        this.cd.markForCheck()
      }
    })


  }

}
