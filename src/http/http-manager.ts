import axios from 'axios'
import { BASE_URL, BaseResult } from './common'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 10,
  headers: {'X-Custom-Header': 'foobar'}
});

export type HttpGetOptions = {
  path: string
}

export async function httpGet<T>(options: HttpGetOptions): Promise<T> {
  try {
    const { path } = options
    const resp = await instance.get<T>(path)
    return resp.data
  } catch (e) {
    return Promise.reject(e)
  }
}
