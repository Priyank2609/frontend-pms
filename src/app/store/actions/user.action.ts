import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../../interfaces/users.interface";




export const userAction = createActionGroup({
  source: 'user',
  events: {
    'load user': emptyProps,
    'load user success': props<{ payload: User[] }>(),

    'load profile': emptyProps,
    'load profile success': props<{ profile: any }>(),

    'get profile by id': props<{ id: string }>(),
    'get profile by id success': props<{ data: any }>(),

    'create profile': props<{ data: any }>(),
    'create profile success': props<{ profile: any }>(),

    'update profile': props<{ id: string, data: any }>(),
    'update profile success': props<{ new: any }>()
  }
})