import { Tree } from '../../http'

export const SET_TREE_LIST = 'SET_TREE_LIST'

export type SetTreeListAction = {
  type: typeof SET_TREE_LIST
  data: Tree[]
}

export const setTreeList = (data: Tree[]): SetTreeListAction => ({ 
  type: SET_TREE_LIST, 
  data, 
}) 

export type SetTreeListState = Tree[]

const initialState: SetTreeListState = []

export function treeListReducer(
  state = initialState, 
  action: SetTreeListAction,
): SetTreeListState {
  switch(action.type) {
  case SET_TREE_LIST:
    return [...action.data]
  default:
    return state
  }
}