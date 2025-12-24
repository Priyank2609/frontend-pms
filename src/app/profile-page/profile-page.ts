import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { email } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { profile } from '../store/selectors/user.selector';
import { userAction } from '../store/actions/user.action';

@Component({
  selector: 'app-profile-page',
  imports: [AsyncPipe, NgIf, FormsModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  constructor(private prof: Auth, private route: Router, private store: Store) { }
  userProfile!: Observable<any>
  profileData: any;


  editForm = false
  ngOnInit() {
    this.getProfile()
    console.log(this.editForm);
    this.userProfile.subscribe(profile => {
      this.profileData = profile;
    });

  }

  form = {
    email: '',
    fullname: '',
    phone: '',
    address: ''
  }

  enableEdit() {
    this.form = {
      email: this.profileData.user?.email,
      fullname: this.profileData.fullname,
      phone: this.profileData.phone,
      address: this.profileData.address
    };

    this.editForm = true;
    console.log('enable', this.editForm);

  }

  getProfile() {


    this.store.dispatch(userAction.loadProfile())
    this.userProfile = this.store.select(profile);

    // this.userProfile.subscribe(profile => {
    //   this.profileData = profile;
    // });
  }

  updateProfile = () => {
    const profileId = this.profileData._id
    console.log(profileId);

    this.editForm = false

    this.store.dispatch(userAction.updateProfile({ id: profileId, data: this.form }))
    // this.prof.updateProfile(profileId, this.form).subscribe({

    //   next: (res) => {

    //     console.log(res);

    //     this.getProfile()
    //   }
    // })
    console.log(this.editForm);


  }

  closeEdit = () => {
    this.editForm = false
  }
  logoutUser = () => {
    this.prof.logoutUser()
    this.route.navigate(['/login'])
  }
}
