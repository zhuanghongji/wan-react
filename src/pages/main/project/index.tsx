import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { ArticlesFragment } from './ArticlesFragment'

type Props = {
  // ignore
} & RouteComponentProps

export const ProjectPage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      项目
      <ArticlesFragment />
    </div>
  )
}
