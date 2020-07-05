import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { TreeSelector } from './TreeSelector'
import { ArticlesFragment } from './ArticlesFragment'

type Props = {
  // ignore
} & RouteComponentProps

export const TreePage = (props: Props) => {
  // 第二级选中的 ID
  const [secondStageId, setSecondStageId] = useState<number | null>(null)

  useEffect(() => {}, [])

  return (
    <div>
      体系
      <TreeSelector 
        onChange={ids => setSecondStageId(ids.secondStageId)}
      />
      {
        secondStageId !== null && <ArticlesFragment cid={secondStageId}/>
      }
    </div>
  )
}
