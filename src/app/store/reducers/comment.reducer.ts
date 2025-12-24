import { createReducer, on } from "@ngrx/store"
import { commentAction } from "../actions/comment.action"


const initialState = {
  getAllComment: [] as any,
  getCommentById: {}
}



export const commentReducer = createReducer(initialState,



  on(commentAction.getAllCommentSuccess, (state, action) => {
    return {
      ...state,
      getAllComment: action.comment
    }
  }),
  // on(commentAction.createCommentSuccess, (state, action) => {
  //   return {
  //     ...state,
  //     getAllComment: [...state.getAllComment, action.comment]

  //   }
  // }),
  on(commentAction.getCommentByIdSuccess, (state, action) => {
    return {
      ...state,
      getCommentById: action.data
    }
  }),
  on(commentAction.deleteCommentSuccess, (state, action) => {
    return {
      ...state,
      getAllComment: state.getAllComment.filter((item: any) => item.id !== action.id)
    }
  })
)












