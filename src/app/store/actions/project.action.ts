import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Projects } from "../../interfaces/project.interface";
import { ProjectReportResponse } from "../../interfaces/projectDetail.interface";
import { Progress } from "../../interfaces/progress.interface";



export const projectAction = createActionGroup({
  source: 'project',
  events: {
    'load project': emptyProps,
    'load project success': props<{ payload: Projects[] }>(),



    'create project': props<{ data: any }>(),
    'create project success': props<{ createProject: Projects }>(),


    'get project by id': props<{ id: string }>(),
    'get project by id success': props<{ projectByID: ProjectReportResponse }>(),

    'assign project': props<{ prodId: string, userId: string }>(),
    'assign project success': props<{ project: any }>(),

    'get project progress': emptyProps,
    'get project progress success': props<{ progress: Progress }>(),

    'delete project': props<{ id: string }>(),
    'delete project success': props<{ id: string }>()
  }
})