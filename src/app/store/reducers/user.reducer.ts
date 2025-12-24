import { createReducer, on } from "@ngrx/store";
import { User } from "../../interfaces/users.interface";
import { userAction } from "../actions/user.action";




const initialState = {
  getUser: [] as User[],
  profile: {},
  getProfil: {}
}


export const userReducer = createReducer(initialState,
  on(userAction.loadUserSuccess, (state, action) => {
    return {
      ...state,
      getUser: action.payload
    }
  }),

  on(userAction.loadProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.profile
    }
  }),
  on(userAction.getProfileByIdSuccess, (state, action) => {
    return {
      ...state,
      profile: action.data

    }
  }),

  on(userAction.createProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.profile
    }
  }),


  on(userAction.updateProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.new
    }
  })
)