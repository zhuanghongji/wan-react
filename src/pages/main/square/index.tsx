import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = {
  // ignore
} & RouteComponentProps

export const SquarePage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      广场
    </div>
  )
}
