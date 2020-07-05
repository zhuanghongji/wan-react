import { Article, BaseResult, BaseList } from '../common'
import { httpGet } from '../http-manager'

export type Navi = {
  articles: Article[]
  cid: number 
  name: string 
}

/**
 * 导航数据
 */
export async function requestNavi() {
  try {
    const result = await httpGet<BaseResult<Navi[]>>({ path: '/navi/json' })
    return result.data
  } catch(e) {
    return Promise.reject(e)
  }
}