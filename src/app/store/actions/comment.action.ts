import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const commentAction = createActionGroup({

  source: 'comment',
  events: {

    'get all comment': emptyProps,
    'get all comment success': props<{ comment: any }>(),


    'create comment': props<{ id: string, data: any }>(),
    'create comment success': props<{ comment: any }>(),


    'get comment by id': props<{ id: string }>(),
    'get comment by id success': props<{ data: any }>(),

    'delete comment': props<{ id: string }>(),
    'delete comment success': props<{ id: string }>()
  }
})