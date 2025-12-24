import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploeeViewPage } from './emploee-view-page';

describe('EmploeeViewPage', () => {
  let component: EmploeeViewPage;
  let fixture: ComponentFixture<EmploeeViewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploeeViewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploeeViewPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
