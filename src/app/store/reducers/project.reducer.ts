import { createReducer, on } from "@ngrx/store"

import { Projects } from "../../interfaces/project.interface";
import { projectAction } from "../actions/project.action";
import { ProjectReportResponse } from "../../interfaces/projectDetail.interface";
import { Progress } from "../../interfaces/progress.interface";






const initialState = {
  project: [] as Projects[],
  selectProjectById: {} as ProjectReportResponse,
  progress: {} as Progress
}


export const projectReducer = createReducer(
  initialState,
  on(projectAction.loadProjectSuccess, (state, action) => {
    return {
      ...state,
      project: action.payload
    };
  }),
  on(projectAction.createProjectSuccess, (state, action) => {

    return {
      ...state,
      project: [...state.project, action.createProject]
    };
  }),
  on(projectAction.getProjectByIdSuccess, (state, action) => {
    return {
      ...state,
      selectProjectById: action.projectByID
    }

  }),
  on(projectAction.assignProjectSuccess, (state, action) => {
    return {
      ...state,
      project: state.project.map((item) => item._id === action.project.id ? action.project : item)
    }
  }),
  on(projectAction.getProjectProgressSuccess, (state, action) => {
    return {
      ...state,
      progress: action.progress
    }
  }),
  on(projectAction.deleteProjectSuccess, (state, action) => {
    return {
      ...state,
      project: state.project.filter((item) => item._id !== action.id)
    }
  })
);