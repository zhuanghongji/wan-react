import { Article } from "../../http"

export const SET_PROJECT_LIST = 'SET_PROJECT_LIST'

export type SetProjectListAction = {
  type: typeof SET_PROJECT_LIST
  data: Article[]
}

export const setProjectList = (data: Article[]): SetProjectListAction => ({ 
  type: SET_PROJECT_LIST, 
  data, 
}) 

export type SetProjectListState = {
  data: Article[]
} 

const initialState: SetProjectListState = {
  data: []
}

export function projectList(
  state = initialState, 
  action: SetProjectListAction,
): SetProjectListState {
  switch(action.type) {
  case SET_PROJECT_LIST:
    return {
      ...state,
      data: action.data,
    }
  default:
    return state
  }
}