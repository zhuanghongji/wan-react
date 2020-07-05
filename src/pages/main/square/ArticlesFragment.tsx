/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { requestUserArticleList } from '../../../http'
import { ArticleItem } from './ArticleItem'
import styled from 'styled-components'
import { useRootSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { setUserArticleList } from '../../../redux'

const Container = styled.div`
  background-color: white;
`

export const ArticlesFragment = React.memo(() => {
  const {
    data: articles,
  } = useRootSelector(state => state.userArticleList)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('aaaa')
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      const list = await requestUserArticleList({ pageNum: 0 })
      dispatch(setUserArticleList(list.datas))
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
