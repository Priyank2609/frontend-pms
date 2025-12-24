import { createReducer, on } from "@ngrx/store";
import { MyTask, TaskListPage } from "../../interfaces/task.interface";
import { taskAction } from "../actions/task.action";
import { TaskDetailPage } from "../../task-detail-page/task-detail-page";


const initialState = {
  getAllTask: [] as any,
  getTaskById: {} as TaskDetailPage | any,
  getMyTask: [] as MyTask[]
}


export const taskReducer = createReducer(initialState,
  on(taskAction.loadTaskSuccess, (state, action) => {
    return {
      ...state,
      getAllTask: action.payload
    }
  }),

  on(taskAction.createTaskSuccess, (state, action) => {
    return {
      ...state,
      getAllTask: [...state.getAllTask, action.createTask]
    }
  }),

  on(taskAction.getTaskByIdSuccess, (state, acion) => {
    return {
      ...state,
      getTaskById: acion.taskId
    }
  }),

  on(taskAction.assignToSuccess, (state, action) => {
    return {
      ...state,
      getAllTask: state.getAllTask.map((item: any) => item._id === action.task._id ? action.task : item)
    }
  })
  ,

  on(taskAction.myTaskSuccess, (state, action) => {
    return {
      ...state,
      getMyTask: action.myTask

    }
  }),
  on(taskAction.updateStatusSuceess, (state, action) => ({
    ...state,

    getAllTask: state.getAllTask.map((item: any) =>
      item._id === action.task._id ? action.task : item
    ),

    getTaskById:
      state.getTaskById?._id === action.task._id
        ? action.task
        : state.getTaskById
  })),


  on(taskAction.deleteTaskSuccess, (state, action) => {
    return {
      ...state,
      getAllTask: state.getAllTask.filter((item: any) => item.id !== action.id)
    }
  })
)
