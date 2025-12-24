import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMilestone } from './create-milestone';

describe('CreateMilestone', () => {
  let component: CreateMilestone;
  let fixture: ComponentFixture<CreateMilestone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMilestone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMilestone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
