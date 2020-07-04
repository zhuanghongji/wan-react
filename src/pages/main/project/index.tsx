import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = {
  // ignore
} & RouteComponentProps

export const ProjectPage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      项目
    </div>
  )
}
