import { Article } from '../../http'

export const SET_WEN_DA_LIST = 'SET_WEN_DA_LIST'

export type SetWenDaListAction = {
  type: typeof SET_WEN_DA_LIST
  data: Article[]
}

export const setWenDaList = (data: Article[]): SetWenDaListAction => ({ 
  type: SET_WEN_DA_LIST, 
  data, 
}) 

export type SetWenDaListState = {
  data: Article[]
} 

const initialState: SetWenDaListState = {
  data: []
}

export function wenDaListReducer(
  state = initialState, 
  action: SetWenDaListAction,
): SetWenDaListState {
  switch(action.type) {
  case SET_WEN_DA_LIST:
    return {
      ...state,
      data: action.data,
    }
  default:
    return state
  }
}