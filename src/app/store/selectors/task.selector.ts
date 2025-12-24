import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskListPage } from "../../interfaces/task.interface";


export const selectedTask = createFeatureSelector<any>('task')

export const getAllTask = createSelector(
  selectedTask,
  state => state.getAllTask
)

export const getTaskById = createSelector(
  selectedTask,
  state => state.getTaskById
)

export const getMyTask = createSelector(
  selectedTask,
  state => state.getMyTask
)