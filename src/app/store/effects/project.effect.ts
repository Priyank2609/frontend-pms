import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { Project } from '../../services/project';
import { projectAction } from '../actions/project.action';
import { ProjectReportResponse } from '../../interfaces/projectDetail.interface';
import { Router } from '@angular/router';
import { milestoneAction } from '../actions/milestone.action';




@Injectable()
export class ProjectEffects {
  private actions$ = inject(Actions);
  private projectService = inject(Project);
  private router = inject(Router)

  loadProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(projectAction.loadProject),
      exhaustMap(() => this.projectService.getAllProject()
        .pipe(
          map(proj => projectAction.loadProjectSuccess({ payload: proj })),
          catchError(() => EMPTY)
        ))
    );
  });

  createProjectEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(projectAction.createProject),
      exhaustMap(({ data }) => this.projectService.createPrject(data).pipe(map((proj: any) => projectAction.createProjectSuccess({ createProject: proj.newProject })),
        catchError(() => EMPTY)))
    )
  })

  getProjectById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(projectAction.getProjectById),
      exhaustMap(({ id }) => this.projectService.getProjectById(id).pipe(
        tap(res => console.log('API Response:', res)),
        mergeMap((proj: any) => [projectAction.getProjectByIdSuccess({ projectByID: proj }), milestoneAction.loadMilestone()]),
        catchError(() => EMPTY)
      ))
    )
  })

  assignProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(projectAction.assignProject),

      exhaustMap(({ prodId, userId }) => this.projectService.assignProject(prodId, userId).pipe(map(() => projectAction.getProjectById({ id: prodId })),

        catchError(() => EMPTY)))
    )
  })
  getProjectProgress$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(projectAction.getProjectProgress),
      exhaustMap(() => this.projectService.getProjectProgress().pipe(
        tap(res => console.log('API Response:', res))
        , map((proj) => projectAction.getProjectProgressSuccess({ progress: proj })),
        catchError(() => EMPTY)
      ))
    )
  })

  deleteProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(projectAction.deleteProject),
      exhaustMap((action) => this.projectService.deleteProject(action.id).pipe(map(() => projectAction.deleteProjectSuccess({ id: action.id })),
        catchError(() => EMPTY)))
    )
  })
}