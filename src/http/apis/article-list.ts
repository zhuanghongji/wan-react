import { Tag, BaseList } from '../common'
import { httpGet } from '../http-manager'

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

/**
 * 首页文章列表
 * 
 * @param params.pageNum 页码，拼接在连接中，从 0 开始。
 */
export async function requestArticleList(params: {
  pageNum: number
}) {
  try {
    const { pageNum } = params
    return await httpGet<BaseList<Article>>({ path: `/article/list/${pageNum}/json` })
  } catch(e) {
    return Promise.reject(e)
  }
}