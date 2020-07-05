import { Article } from "../../http"

export const SET_ARTICLE_LIST_BY_CID = 'SET_ARTICLE_LIST_BY_CID_BY_CID'

export type SetArticleListByCidAction = {
  type: typeof SET_ARTICLE_LIST_BY_CID
  cid: number 
  data: Article[]
}

export const setArticleListByCid = (cid: number, data: Article[]): SetArticleListByCidAction => ({ 
  type: SET_ARTICLE_LIST_BY_CID, 
  cid,
  data, 
}) 

export type SetArticleListByCidState = {
  [cid: number]: {
    data: Article[]
  }
} 

const initialState: SetArticleListByCidState = {}

export function articleListByCidReducer(
  state = initialState, 
  action: SetArticleListByCidAction,
): SetArticleListByCidState {
  switch(action.type) {
  case SET_ARTICLE_LIST_BY_CID:
    return {
      ...state,
      [action.cid]: { data: action.data },
    }
  default:
    return state
  }
}