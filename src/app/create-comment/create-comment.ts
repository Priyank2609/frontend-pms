import { Component } from '@angular/core';
import { Comment } from '../services/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { commentAction } from '../store/actions/comment.action';

@Component({
  selector: 'app-create-comment',
  imports: [FormsModule],
  templateUrl: './create-comment.html',
  styleUrl: './create-comment.css',
})
export class CreateComment {
  constructor(private comm: Comment, private router: Router, private route: ActivatedRoute, private store: Store) { }

  addComment = (form: any) => {
    const data = {
      comment: form.value.comment
    }
    const taskId = this.route.snapshot.params['id']

    this.store.dispatch(commentAction.createComment({ id: taskId, data: data }))
    this.store.dispatch(commentAction.getAllComment())
    alert("Comment created")
    this.router.navigate([`task/${taskId}`])
    // this.comm.addComment(data, taskId).subscribe({
    //   next: (res) => {
    //     console.log("Sccussfuully added", res);
    //     this.router.navigate([`task/${taskId}`])

    //   }
    // })
  }


}
