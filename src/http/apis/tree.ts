import { BaseResult } from '../common'
import { httpGet } from '../http-manager'

export type Tree = {
  children?: Tree[]
  courseId?: number
  id: number
  name: string
  order?: number
  parentChapterId?: number
  userControlSetTop?: boolean
  visible?: number
}

/**
 * 体系数据
 */
export async function requestTree() {
  try {
    const result = await httpGet<BaseResult<Tree[]>>({ path: '/tree/json' })
    return result.data
  } catch(e) {
    return Promise.reject(e)
  }
}