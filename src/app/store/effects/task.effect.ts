import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Task } from "../../services/task";
import { catchError, EMPTY, exhaustMap, map, mergeMap, tap } from "rxjs";
import { taskAction } from "../actions/task.action";
import { milestoneAction } from "../actions/milestone.action";


@Injectable()

export class TaskEffect {
  private action$ = inject(Actions)
  private taskService = inject(Task)

  loadTask = createEffect(() => {
    return this.action$.pipe(
      ofType(taskAction.loadTask),
      exhaustMap(() => this.taskService.getAllTasks().pipe(map(task => taskAction.loadTaskSuccess({ payload: task })),
        catchError(() => EMPTY)
      ))
    )
  })

  createTask = createEffect(() => {
    return this.action$.pipe(
      ofType(taskAction.createTask),
      exhaustMap(({ id, data }) => this.taskService.createTasks(id, data).pipe(mergeMap(() => [milestoneAction.getMilestoneById({ id }), taskAction.loadTask()]),
        catchError(() => EMPTY)))
    )
  })

  getTaskById = createEffect(() => {
    return this.action$.pipe(
      ofType(taskAction.getTaskById),
      exhaustMap(({ id }) => this.taskService.getTaskById(id).pipe(
        tap((res) => console.log("Api", res)
        ),
        map((res: any) => taskAction.getTaskByIdSuccess({ taskId: res }))
      ))

    )
  })

  assignTo = createEffect(() => {
    return this.action$.pipe(
      ofType(taskAction.assignTo),
      exhaustMap(({ id, userId }) => this.taskService.assignTask(id, userId).pipe(
        mergeMap((res) => [taskAction.assignToSuccess({ task: res }), taskAction.getTaskById({ id: id })]),
        catchError(() => EMPTY)
      ))
    )
  })


  getMyTask = createEffect(() => {
    return this.action$.pipe(
      ofType(taskAction.myTask),
      exhaustMap(() => this.taskService.myTask().pipe(
        tap((res) => console.log("Api", res)
        ),
        map((res) => taskAction.myTaskSuccess({ myTask: res })),
        catchError(() => EMPTY)
      ))
    )
  })

  updateStatus = createEffect(() => {
    return this.action$.pipe(
      ofType(taskAction.updateStatus),
      exhaustMap(({ mileId, taskId, status }) => this.taskService.upadateTask(mileId, taskId, status).pipe(mergeMap((res) => [taskAction.updateStatusSuceess({ task: status }), taskAction.myTask(), taskAction.getTaskById({ id: taskId })]),

        catchError(() => EMPTY)))
    )
  })


  deleteTask = createEffect(() => {
    return this.action$.pipe(
      ofType(taskAction.deleteTask),
      exhaustMap(({ id }) => this.taskService.deleteTask(id).pipe(map(() => taskAction.loadTask()),
        catchError(() => EMPTY)))
    )
  })
}