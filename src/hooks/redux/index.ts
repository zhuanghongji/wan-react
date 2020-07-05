import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

export function useRootSelector<T>(selector: (state: RootState) => T) {
  return useSelector((rootState: RootState) => selector(rootState))
}