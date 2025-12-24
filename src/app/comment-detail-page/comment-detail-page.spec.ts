import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailPage } from './comment-detail-page';

describe('CommentDetailPage', () => {
  let component: CommentDetailPage;
  let fixture: ComponentFixture<CommentDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
