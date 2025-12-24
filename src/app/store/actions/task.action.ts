import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { MyTask, TaskListPage } from "../../interfaces/task.interface";
import { TaskDetailPage } from "../../task-detail-page/task-detail-page";


export const taskAction = createActionGroup({
  source: 'task',
  events: {
    'load task': emptyProps,
    'load task success': props<{ payload: TaskListPage[] }>(),


    'create task ': props<{ id: string, data: any }>(),
    'create task success': props<{ createTask: any }>(),

    'get task by id': props<{ id: string }>(),
    'get task by id success': props<{ taskId: TaskDetailPage }>(),


    'my task ': emptyProps,
    'my task success': props<{ myTask: MyTask[] }>(),

    'delete task': props<{ id: string }>(),
    'delete task success': props<{ id: string }>(),


    'assign to': props<{ id: string, userId: string }>(),
    'assign to success': props<{ task: any }>(),

    'update status': props<{ mileId: string, taskId: string, status: string }>(),
    'update status suceess': props<{ task: any }>()
  }
})