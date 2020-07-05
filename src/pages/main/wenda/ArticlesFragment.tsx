import React, { useEffect } from 'react'
import { requestWenDaList } from '../../../http'
import { ArticleItem } from './ArticleItem'
import styled from 'styled-components'
import { useRootSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { setWenDaList } from '../../../redux'

const Container = styled.div`
  background-color: white;
`

export const ArticlesFragment = React.memo(() => {

  const {
    data: articles,
  } = useRootSelector(state => state.wenDaList)
  const dispatch = useDispatch()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      const list = await requestWenDaList({ pageNum: 0 })
      dispatch(setWenDaList(list.datas))
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
