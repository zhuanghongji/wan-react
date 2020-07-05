import { Navi } from '../../http'

export const SET_NAVI_LIST = 'SET_NAVI_LIST'

export type SetNaviListAction = {
  type: typeof SET_NAVI_LIST
  data: Navi[]
}

export const setNaviList = (data: Navi[]): SetNaviListAction => ({ 
  type: SET_NAVI_LIST, 
  data, 
}) 

export type SetNaviListState = Navi[]

const initialState: SetNaviListState = []

export function naviListReducer(
  state = initialState, 
  action: SetNaviListAction,
): SetNaviListState {
  switch(action.type) {
  case SET_NAVI_LIST:
    return [...action.data]
  default:
    return state
  }
}