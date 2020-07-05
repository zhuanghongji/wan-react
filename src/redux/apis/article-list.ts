import { Article } from "../../http"

export const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST'

export type SetArticleListAction = {
  type: typeof SET_ARTICLE_LIST
  data: Article[]
}

export const setArticleList = (data: Article[]): SetArticleListAction => ({ 
  type: SET_ARTICLE_LIST, 
  data, 
}) 

export type SetArticleListState = {
  data: Article[]
} 

const initialState: SetArticleListState = {
  data: []
}

export function articleListReducer(
  state = initialState, 
  action: SetArticleListAction,
): SetArticleListState {
  switch(action.type) {
  case SET_ARTICLE_LIST:
    return {
      ...state,
      data: action.data,
    }
  default:
    return state
  }
}