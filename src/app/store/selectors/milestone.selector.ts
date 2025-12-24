import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { Milstone } from "../../services/milstone";


export const selectedMilestone = createFeatureSelector<any>('milestone')


export const allMilestone = createSelector(
  selectedMilestone,
  state => state.milestone
)


export const getMileById = createSelector(
  selectedMilestone,
  state => state.getById
)