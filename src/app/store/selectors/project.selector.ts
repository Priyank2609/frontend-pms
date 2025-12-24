import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Projects } from "../../interfaces/project.interface";
import { ProjectReportResponse } from "../../interfaces/projectDetail.interface";


export const selectedProject = createFeatureSelector<any>('project')

export const selectAllProject = createSelector(
  selectedProject,
  state => state.project
)

export const selectProjectbyId = createSelector(
  selectedProject, state => state.selectProjectById
)
export const projectProgress = createSelector(
  selectedProject,
  state => state.progress
)