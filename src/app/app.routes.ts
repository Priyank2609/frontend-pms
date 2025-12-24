import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { CreateProfile } from './create-profile/create-profile';
import { ProfilePage } from './profile-page/profile-page';
import { CreateProject } from './create-project/create-project';
import { ProjectPage } from './project-page/project-page';
import { ProjectDetailPage } from './project-detail-page/project-detail-page';
import { AssignUser } from './assign-user/assign-user';
import { Employees } from './employees/employees';
import { EmploeeViewPage } from './emploee-view-page/emploee-view-page';
import { Dashboard } from './dashboard/dashboard';
import { CreateTasks } from './create-tasks/create-tasks';
import { CreateMilestone } from './create-milestone/create-milestone';
import { MilestoneListingPage } from './milestone-listing-page/milestone-listing-page';
import { MilestoneDetailPage } from './milestone-detail-page/milestone-detail-page';
import { TaskListPage } from './task-list-page/task-list-page';
import { TaskDetailPage } from './task-detail-page/task-detail-page';
import { PageNotFound } from './page-not-found/page-not-found';
import { CreateComment } from './create-comment/create-comment';
import { CommentDetailPage } from './comment-detail-page/comment-detail-page';
import { MyTask } from './my-task/my-task';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'createProfile', component: CreateProfile },
  { path: 'profile', component: ProfilePage },

  { path: 'createProject', component: CreateProject },
  { path: 'projects', component: ProjectPage },

  { path: 'milestones', component: MilestoneListingPage },
  { path: 'milestone/:id', component: MilestoneDetailPage },
  { path: 'milestone/:id/createTask', component: CreateTasks },

  { path: 'tasks', component: TaskListPage },
  { path: 'task/:id', component: TaskDetailPage },
  { path: 'task/:id/assignUser', component: AssignUser },
  { path: 'task/:id/createComment', component: CreateComment },
  { path: 'task/:taskId/comment/:commentId', component: CommentDetailPage },
  { path: 'my-tasks', component: MyTask },

  { path: 'assignUser/:id', component: AssignUser },
  { path: 'users/employee', component: Employees },
  { path: 'users/employee/:id', component: EmploeeViewPage },

  { path: 'admin/dashboard', component: Dashboard },


  { path: 'project/:id', component: ProjectDetailPage },
  { path: 'project/:id/createMilestone', component: CreateMilestone },

  { path: '**', component: PageNotFound }


];
