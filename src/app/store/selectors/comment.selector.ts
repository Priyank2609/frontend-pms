import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectedComment = createFeatureSelector<any>('comment')


// export const getAllComment = createSelector(
//   selectedComment,
//   state => state.getAllComment
// )

export const getCommentById = createSelector(
  selectedComment,
  state => state.getCommentById
)