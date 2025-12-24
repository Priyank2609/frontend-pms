import { ChangeDetectorRef, Component } from '@angular/core';
import { Milstone } from '../services/milstone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, NgForOf, NgClass, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Auth } from '../services/auth';
import { Store } from '@ngrx/store';
import { milestoneAction } from '../store/actions/milestone.action';
import { getMileById } from '../store/selectors/milestone.selector';


@Component({
  selector: 'app-milestone-detail-page',
  imports: [NgForOf, AsyncPipe, DatePipe, NgClass, NgIf, RouterLink],
  templateUrl: './milestone-detail-page.html',
  styleUrl: './milestone-detail-page.css',
})
export class MilestoneDetailPage {
  constructor(private mile: Milstone, private route: ActivatedRoute, private store: Store, private router: Router, private cd: ChangeDetectorRef, private auth: Auth) { }
  milestone!: Observable<any>
  error: string = ''
  role: any
  currentUser: string = ''

  ngOnInit() {

    const mileId = this.route.snapshot.params['id']

    this.store.dispatch(milestoneAction.getMilestoneById({ id: mileId }))
    this.milestone = this.store.select(getMileById)
    this.role = this.auth.checkRole.value
    const user = JSON.parse(localStorage.getItem('Profile') || '')
    console.log(user);

    this.milestone.subscribe(res => {
      console.log(res.project.assignTo);
      this.currentUser = user._id
      console.log(this.currentUser);

    })

  }

  deletemilstone(id: string) {
    // this.mile.deleteMilestone(id).subscribe({
    //   next: (res) => {
    //     console.log("Successfully deleted ", res);
    //     this.router.navigate(['/milestones'])
    //   },
    //   error: (err) => {
    //     console.log("error", err.error.message);
    //     this.error = err.error.message
    //     this.cd.markForCheck()
    //   },
    // })

    this.store.dispatch(milestoneAction.deleteMilestone({ id }))
    this.router.navigate(['/milestones'])
  }
}
