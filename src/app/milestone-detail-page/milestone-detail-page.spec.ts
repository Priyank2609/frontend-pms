import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneDetailPage } from './milestone-detail-page';

describe('MilestoneDetailPage', () => {
  let component: MilestoneDetailPage;
  let fixture: ComponentFixture<MilestoneDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestoneDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilestoneDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
