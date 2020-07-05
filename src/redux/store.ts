import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { articleListReducer } from './apis/article-list'

const logger = createLogger()
const rootReducer = combineReducers({
  articleList: articleListReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer, 
  applyMiddleware(
    thunk,
    logger,
  ),
)