import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../../interfaces/users.interface";


export const selectedUser = createFeatureSelector<any>('user')

export const getAllUser = createSelector(
  selectedUser,
  state => state.getUser
)

export const profile = createSelector(
  selectedUser,
  state => state.profile
)

export const getById = createSelector(
  selectedUser,
  state => state.profile
)