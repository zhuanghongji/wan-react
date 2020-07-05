import { Article, BaseList, BaseResult } from '../common'
import { httpGet } from '../http-manager'


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
    const result = await httpGet<BaseResult<BaseList<Article>>>({ path: `/article/list/${pageNum}/json` })
    return result.data 
  } catch(e) {
    return Promise.reject(e)
  }
}