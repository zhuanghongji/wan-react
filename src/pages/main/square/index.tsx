import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { ArticlesFragment } from './ArticlesFragment'

type Props = {
  // ignore
} & RouteComponentProps

export const SquarePage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      广场
      <ArticlesFragment />
    </div>
  )
}
