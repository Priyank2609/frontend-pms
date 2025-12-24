import { Component } from '@angular/core';
import { Milstone } from '../services/milstone';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from "@angular/router";
import { Store } from '@ngrx/store';
import { allMilestone, selectedMilestone } from '../store/selectors/milestone.selector';

@Component({
  selector: 'app-milestone-listing-page',
  imports: [NgFor, AsyncPipe, RouterLink, NgIf],
  templateUrl: './milestone-listing-page.html',
  styleUrl: './milestone-listing-page.css',
})
export class MilestoneListingPage {

  constructor(private store: Store) {
    this.milestones = store.select(allMilestone)
  }
  milestones!: Observable<any>


}
