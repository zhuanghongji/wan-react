import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = {
  // ignore
} & RouteComponentProps

export const QAPage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      问答
    </div>
  )
}
