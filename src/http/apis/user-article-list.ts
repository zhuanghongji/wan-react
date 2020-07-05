import { Article, BaseList, BaseResult } from '../common'
import { httpGet } from '../http-manager'

/**
 * 广场列表数据
 * 
 * 注：可能出现 "返回列表数据 < 每页数据"，因为有自见的文章被过滤掉了。
 * 
 * @param params.pageNum 页码，拼接在连接中，从 0 开始。
 */
export async function requestUserArticleList(params: {
  pageNum: number
}) {
  try {
    const { pageNum } = params
    const result = await httpGet<BaseResult<BaseList<Article>>>({ path: `/user_article/list/${pageNum}/json` })
    return result.data 
  } catch(e) {
    return Promise.reject(e)
  }
}