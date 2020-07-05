/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { requestNavi } from '../../../http'
import styled from 'styled-components'
import { useRootSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { setNaviList } from '../../../redux'
import { Card, Space, List, Button } from 'antd'

const Container = styled.div`
  /* background-color: white; */
`

export const NaviListFragment = React.memo(() => {

  const naviList = useRootSelector(state => state.naviList)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('aaaa')
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      const data = await requestNavi()
      console.log('bbb', data)
      dispatch(setNaviList(data))
    } catch(e) {
      // igonre
    }
  }

  return (
    <Container>
      <Space direction="vertical" >
        {
          naviList.length > 0 && naviList.map((navi, index) => {
            const { cid, name, articles } = navi
            return (
              <Card 
                key={cid} 
                style={{ width: 800 }}
                headStyle={{ textAlign: 'left' }}
                bodyStyle={{ textAlign: 'left' }}
                title={name}
              >
                <List 
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={articles}
                  renderItem={item => (
                    <Button 
                      style={{ marginTop: 4, marginBottom: 4 }}
                      type="link"
                    >{item.title}</Button>
                  )}
                />
              </Card>
            )
          })
        }
      </Space>
    </Container>
  )
})
