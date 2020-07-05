import { Article } from '../../http'

export const SET_USER_ARTICLE_LIST = 'SET_USER_ARTICLE_LIST'

export type SetUserArticleListAction = {
  type: typeof SET_USER_ARTICLE_LIST
  data: Article[]
}

export const setUserArticleList = (data: Article[]): SetUserArticleListAction => ({ 
  type: SET_USER_ARTICLE_LIST, 
  data, 
}) 

export type SetUserArticleListState = {
  data: Article[]
} 

const initialState: SetUserArticleListState = {
  data: []
}

export function userArticleListReducer(
  state = initialState, 
  action: SetUserArticleListAction,
): SetUserArticleListState {
  switch(action.type) {
  case SET_USER_ARTICLE_LIST:
    return {
      ...state,
      data: action.data,
    }
  default:
    return state
  }
}