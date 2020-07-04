
// see src/setupProxy.js
// export const BASE_URL = 'https://www.wanandroid.com'
export const BASE_URL = '/api'

export type BaseResult<T> = {
  data: T
  errorCode: number
  errorMsg: string
}

export type BaseList<T> = {
  curPage: number
  datas: T[]
  offset: number
  over: boolean
  pageCount: number
  size: number
  total: number
}

export type Tag = {
  name: string
  url: string
}
