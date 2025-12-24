import { createReducer, on } from "@ngrx/store";
import { Milestone } from "../../interfaces/milestone.interface";
import { milestoneAction } from "../actions/milestone.action";



const initialState = {
  milestone: [] as Milestone[],
  getById: null
}



export const milestoneReducer = createReducer(initialState,
  on(milestoneAction.loadMilestoneSuccess, (state, action) => {
    return {
      ...state,
      milestone: action.payload
    }
  }),

  on(milestoneAction.createMilestoneSuccess, (state, action) => {
    return {
      ...state,
      milestone: [...state.milestone, action.milestone]
    }
  }),
  on(milestoneAction.getMilestoneByIdSuccess, (state, action) => {
    return {
      ...state,
      getById: action.getById
    }
  }),

  // on(milestoneAction.deleteMilestoneSuccess, (state, action) => {
  //   return {
  //     ...state,
  //     milestone: state.milestone.filter((item) => item. !== action.id)
  //   }
  // })
  on(milestoneAction.deleteMilestoneSuccess, (state, action) => {
    return {
      ...state,
      milestone: state.milestone.filter(
        item => item._id !== action.id
      )
    }
  })

)