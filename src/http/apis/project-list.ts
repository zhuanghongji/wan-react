import { Article, BaseList, BaseResult } from '../common'
import { httpGet } from '../http-manager'


/**
 * 最新项目
 * 
 * @param params.pageNum 页码，拼接在连接中，从 0 开始。
 */
export async function requestProjectList(params: {
  pageNum: number
}) {
  try {
    const { pageNum } = params
    const result = await httpGet<BaseResult<BaseList<Article>>>({ path: `/article/listproject/${pageNum}/json` })
    return result.data 
  } catch(e) {
    return Promise.reject(e)
  }
}