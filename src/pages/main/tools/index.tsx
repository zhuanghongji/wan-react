import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = {
  // ignore
} & RouteComponentProps

export const ToolsPage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      工具
    </div>
  )
}
