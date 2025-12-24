import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userAction } from '../store/actions/user.action';

@Component({
  selector: 'app-create-profile',
  imports: [FormsModule],
  templateUrl: './create-profile.html',
  styleUrl: './create-profile.css',
})
export class CreateProfile {
  constructor(private prof: Auth, private router: Router, private store: Store) { }


  createProfile = (form: any) => {
    const data = {
      fullname: form.value.fullname,
      phone: form.value.phone,
      address: form.value.address
    }

    this.store.dispatch(userAction.createProfile({ data: data }))
    this.router.navigate(['/'])
    // this.prof.userProfile(data).subscribe({
    //   next: (res) => {
    //     console.log(res)
    //     this.router.navigate(['/'])
    //   }
    // }
    // )

  }



}
