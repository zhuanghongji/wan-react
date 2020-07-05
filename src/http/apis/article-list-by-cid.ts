import { Article, BaseList, BaseResult } from '../common'
import { httpGet } from '../http-manager'

/**
 * 体系文章列表
 * 
 * @param params.pageNum 页码，拼接在连接中，从 0 开始。
 * @param params.cid 体系第二级 id。
 */
export async function requestArticleListByCid(params: {
  pageNum: number
  cid: number 
}) {
  try {
    const { pageNum, cid } = params
    const result = await httpGet<BaseResult<BaseList<Article>>>({ path: `/article/list/${pageNum}/json?cid=${cid}` })
    return result.data 
  } catch(e) {
    return Promise.reject(e)
  }
}