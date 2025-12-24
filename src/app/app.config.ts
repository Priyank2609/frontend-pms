import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { projectReducer } from './store/reducers/project.reducer';
import { ProjectEffects } from './store/effects/project.effect';
import { provideHttpClient } from '@angular/common/http';
import { userReducer } from './store/reducers/user.reducer';
import { UserEffects } from './store/effects/user.effect';
import { milestoneReducer } from './store/reducers/milestone.reducer';
import { MilestoneEffect } from './store/effects/milestone.efffect';
import { taskReducer } from './store/reducers/task.reducer';
import { TaskEffect } from './store/effects/task.effect';
import { commentReducer } from './store/reducers/comment.reducer';
import { CommentEffect } from './store/effects/comment.effect';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideStore({
      project: projectReducer,
      user: userReducer,
      milestone: milestoneReducer,
      task: taskReducer,
      comment: commentReducer

    }),
    provideEffects(ProjectEffects, UserEffects, MilestoneEffect, TaskEffect, CommentEffect),
    provideStoreDevtools(),
    provideHttpClient()


  ]
};
