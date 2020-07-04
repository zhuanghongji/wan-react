import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = {
  // ignore
} & RouteComponentProps

export const NaviPage = (props: Props) => {
  useEffect(() => {}, [])

  return (
    <div>
      导航
    </div>
  )
}
