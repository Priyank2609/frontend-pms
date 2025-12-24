export interface TaskListPage {
  message: string, tasks: []
}

export interface TaskDetailPage {
  message: string, task: any, taskStatus?: any
}

export interface MyTask {
  tasks: []
}