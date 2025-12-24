import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Milestone } from "../../interfaces/milestone.interface";



export const milestoneAction = createActionGroup({
  source: 'milestone',
  events: {
    'load milestone': emptyProps,
    'load milestone success': props<{ payload: Milestone[] }>(),


    'create milstone': props<{ id: string, data: any }>(),
    'create milestone success': props<{ milestone: Milestone }>(),


    'get milestone by id': props<{ id: string }>(),
    'get milestone by id success': props<{ getById: any }>(),


    'delete milestone': props<{ id: string }>(),
    'delete milestone success': props<{ id: string }>()
  }
})