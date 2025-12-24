import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneListingPage } from './milestone-listing-page';

describe('MilestoneListingPage', () => {
  let component: MilestoneListingPage;
  let fixture: ComponentFixture<MilestoneListingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestoneListingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilestoneListingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
