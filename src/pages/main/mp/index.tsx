import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = {
  // ignore
} & RouteComponentProps

export const MPPage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      公众号
    </div>
  )
}
