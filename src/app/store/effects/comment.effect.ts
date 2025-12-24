import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Comment } from "../../services/comment";
import { commentAction } from "../actions/comment.action";
import { catchError, EMPTY, exhaustMap, map, mergeMap } from "rxjs";
import { taskAction } from "../actions/task.action";


@Injectable()

export class CommentEffect {
  private action$ = inject(Actions)
  private commentService = inject(Comment)

  loadComment = createEffect(() => {
    return this.action$.pipe(
      ofType(commentAction.getAllComment),
      exhaustMap(() => this.commentService.getAllComment().pipe(
        map((res) => commentAction.getAllCommentSuccess({ comment: res }))
      ))
    )
  })

  createComment = createEffect(() => {
    return this.action$.pipe(
      ofType(commentAction.createComment),
      exhaustMap(({ id, data }) => this.commentService.addComment(id, data).pipe(mergeMap(() => [taskAction.getTaskById({ id })]), catchError(() => EMPTY)))

    )
  })

  getCommentById = createEffect(() => {
    return this.action$.pipe(
      ofType(commentAction.getCommentById),
      exhaustMap(({ id }) => this.commentService.getCommentById(id).pipe(
        map((res) => commentAction.getCommentByIdSuccess({ data: res })),
        catchError(() => EMPTY)
      ))
    )
  })

  deleteComment = createEffect(() => {
    return this.action$.pipe(
      ofType(commentAction.deleteComment),
      exhaustMap(({ id }) => this.commentService.deleteComment(id).pipe(mergeMap(() => [taskAction.getTaskById({ id })]),
        catchError(() => EMPTY)
      ))
    )
  })
}