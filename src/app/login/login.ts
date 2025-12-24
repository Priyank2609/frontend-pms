import { ChangeDetectorRef, Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
// import { myTaskAction } from '../store/actions/myTask.action';


@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth: Auth, private router: Router, private cd: ChangeDetectorRef, private store: Store) { }

  error = ''
  isLogin(form: any) {
    const values = {
      email: form.value.email,
      password: form.value.password
    }

    this.auth.loginUser(values).subscribe({
      next: (res) => {
        console.log(res)
        this.auth.setLogin(res.token, res.userExists)
        console.log(res.userExists);

        form.reset()
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.error = err.error.message
        console.log("Login Error:", err.error.message);
        this.cd.detectChanges()
        // alert("Invalid Email or Password!");
      }
    }
    )
    // this.store.dispatch(myTaskAction.loadMytask())

  }

}
