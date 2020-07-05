import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { articleListReducer } from './apis/article-list'
import { naviListReducer } from './apis/navi'
import { userArticleListReducer } from './apis/user-article-list'
import { wenDaListReducer } from './apis/wenda-list'

const logger = createLogger()
const rootReducer = combineReducers({
  articleList: articleListReducer,
  naviList: naviListReducer,
  userArticleList: userArticleListReducer,
  wenDaList: wenDaListReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer, 
  applyMiddleware(
    thunk,
    logger,
  ),
)