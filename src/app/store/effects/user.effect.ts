import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Auth } from "../../services/auth";
import { userAction } from "../actions/user.action";
import { catchError, EMPTY, exhaustMap, map, mergeMap } from "rxjs";




@Injectable()

export class UserEffects {
  private action$ = inject(Actions)
  private userService = inject(Auth)

  loadUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(userAction.loadUser),
      exhaustMap(() => this.userService.getAllUser()
        .pipe(
          map((user: any) => userAction.loadUserSuccess({ payload: user })),
          catchError(() => EMPTY)
        ))
    )
  })

  loadProfile = createEffect(() => {
    return this.action$.pipe(
      ofType(userAction.loadProfile),
      exhaustMap(() => this.userService.getUserProfile().pipe(
        map((user) => userAction.loadProfileSuccess({ profile: user }))
      ))
    )
  })

  getProfileByID = createEffect(() => {
    return this.action$.pipe(
      ofType(userAction.getProfileById),
      exhaustMap(({ id }) => this.userService.getUserById(id).pipe(map((res) => userAction.getProfileByIdSuccess({ data: res })),
        catchError(() => EMPTY)))
    )
  })

  createProfile = createEffect(() => {
    return this.action$.pipe(
      ofType(userAction.createProfile),
      exhaustMap(({ data }) => this.userService.userProfile(data).pipe(
        map((res) => userAction.createProfileSuccess({ profile: data })),
        catchError(() => EMPTY)
      ))
    )
  })


  updateProfile = createEffect(() => {
    return this.action$.pipe(
      ofType(userAction.updateProfile),
      exhaustMap(({ id, data }) => this.userService.updateProfile(id, data).pipe(
        mergeMap((res) => [userAction.updateProfileSuccess({ new: res }), userAction.loadProfile()]),
        catchError(() => EMPTY)
      ))
    )
  })
}




