/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { requestProjectList } from '../../../http'
import { ArticleItem } from './ArticleItem'
import styled from 'styled-components'
import { useRootSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { setProjectList } from '../../../redux'

const Container = styled.div`
  background-color: white;
`

export const ArticlesFragment = React.memo(() => {
  const {
    data: articles,
  } = useRootSelector(state => state.projectList)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('aaaa')
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      const list = await requestProjectList({ pageNum: 0 })
      dispatch(setProjectList(list.datas))
    } catch(e) {
      // igonre
    }
  }

  return (
    <Container>
      {
        articles && articles.map(article => (
          <ArticleItem 
            key={article.id}
            data={article}
          />
        ))
      }
    </Container>
  )
})
