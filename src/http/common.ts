
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

export type Article = {
  apkLink: string
  audit: number
  author: string
  canEdit: boolean
  chapterId: number
  chapterName: string
  collect: boolean
  courseId: number
  desc: string
  descMd: string
  envelopePic: string
  fresh: boolean
  id: number
  link: string
  niceDate: string
  niceShareDate: string
  origin: string
  prefix: string
  projectLink: string
  publishTime: number
  realSuperChapterId: number
  selfVisible: number
  shareDate: number
  shareUser: string
  superChapterId: number
  superChapterName: string
  tags: Tag[]
  title: string
  type: number
  userId: number
  visible: number
  zan: number
}

export type Tag = {
  name: string
  url: string
}
