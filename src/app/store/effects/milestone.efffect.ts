import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Milstone } from "../../services/milstone";
import { milestoneAction } from "../actions/milestone.action";
import { catchError, EMPTY, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { projectAction } from "../actions/project.action";
import { taskAction } from "../actions/task.action";


@Injectable()

export class MilestoneEffect {
  private action$ = inject(Actions)
  private milestoneService = inject(Milstone)

  loadMilestone = createEffect(() => {
    return this.action$.pipe(
      ofType(milestoneAction.loadMilestone),
      exhaustMap(() => this.milestoneService.getAllMilestone().pipe(
        map(mile => milestoneAction.loadMilestoneSuccess({ payload: mile })),
        catchError(() => EMPTY)
      ))
    )
  })

  createMilestone = createEffect(() => {
    return this.action$.pipe(
      ofType(milestoneAction.createMilstone),
      exhaustMap(({ id, data }) => this.milestoneService.createMilestone(id, data).pipe(
        mergeMap(() => [projectAction.getProjectById({ id }), milestoneAction.loadMilestone()]
        ),

        catchError(() => EMPTY)
      ))
    )
  })

  getMilestoneById = createEffect(() => {
    return this.action$.pipe(
      ofType(milestoneAction.getMilestoneById),
      exhaustMap(({ id }) => this.milestoneService.getMilestoneById(id).pipe(
        mergeMap((res) => [milestoneAction.getMilestoneByIdSuccess({ getById: res }), taskAction.loadTask()]),
        catchError(() => EMPTY)
      ))
    )
  })

  deleteMilestone = createEffect(() => {
    return this.action$.pipe(
      ofType(milestoneAction.deleteMilestone),
      exhaustMap((action) => this.milestoneService.deleteMilestone(action.id).pipe(
        map(() => milestoneAction.deleteMilestoneSuccess({ id: action.id }))
      ))

    )
  })

}

