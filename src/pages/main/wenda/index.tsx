import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { ArticlesFragment } from './ArticlesFragment'

type Props = {
  // ignore
} & RouteComponentProps

export const WenDaPage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      问答
      <ArticlesFragment />
    </div>
  )
}
