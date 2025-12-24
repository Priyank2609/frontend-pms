import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUser } from './assign-user';

describe('AssignUser', () => {
  let component: AssignUser;
  let fixture: ComponentFixture<AssignUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
