import { ChangeDetectorRef, Component } from '@angular/core';
import { Comment } from '../services/comment';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { commentAction } from '../store/actions/comment.action';
import { getCommentById } from '../store/selectors/comment.selector';


@Component({
  selector: 'app-comment-detail-page',
  imports: [NgIf, NgForOf, AsyncPipe, DatePipe],
  templateUrl: './comment-detail-page.html',
  styleUrl: './comment-detail-page.css',
})
export class CommentDetailPage {

  constructor(private comm: Comment, private route: ActivatedRoute, private router: Router, private check: ChangeDetectorRef, private store: Store) { }
  error: string = ''
  comment!: Observable<any>
  currentUser: string = ''

  ngOnInit() {
    const commentId = this.route.snapshot.params['commentId']
    console.log(commentId);

    this.store.dispatch(commentAction.getCommentById({ id: commentId }))

    this.comment = this.store.select(getCommentById)
    const user = JSON.parse(localStorage.getItem('Profile') || '')
    console.log(user);
    this.currentUser = user._id
    console.log(this.currentUser);

  }

  deleteComment(id: string) {
    const taskId = this.route.snapshot.params['taskId']
    console.log(taskId);
    console.log(id);

    this.store.dispatch(commentAction.deleteComment({ id: id }))
    alert("comment has deleted")
    this.router.navigate([`task/${taskId}`])

    // this.comm.deleteComment(id).subscribe({
    //   next: (res) => {
    //     console.log("Deleted comment", res);

    //   },
    //   error: (err) => {
    //     this.error = err.error.message
    //     this.check.markForCheck()

    //   }
    // })

  }
}
