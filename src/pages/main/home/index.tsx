import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { ArticlesFragment } from './ArticlesFragment'
import { HotSelector, HotSelectorValue } from './HotSelector'

type Props = {
  // ignore
} & RouteComponentProps

export const HomePage = (props: Props) => {
  const [hotSelectorValue, setHotSelectorValue] = useState<HotSelectorValue>('left')

  useEffect(() => {}, [])

  return (
    <div>
      <HotSelector 
        value={hotSelectorValue} 
        onChangeValue={setHotSelectorValue}
      />
      <ArticlesFragment />
    </div>
  )
}
