import { Article, BaseList, BaseResult } from '../common'
import { httpGet } from '../http-manager'

/**
 * 问答列表数据
 * 
 * @param params.pageNum 页码，拼接在连接中，从 0 开始。
 */
export async function requestWenDaList(params: {
  pageNum: number
}) {
  try {
    const { pageNum } = params
    const result = await httpGet<BaseResult<BaseList<Article>>>({ path: `/wenda/list/${pageNum}/json` })
    return result.data 
  } catch(e) {
    return Promise.reject(e)
  }
}