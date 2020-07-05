/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { requestUserArticleList, requestArticleListByCid } from '../../../http'
import { ArticleItem } from './ArticleItem'
import styled from 'styled-components'
import { useRootSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { setUserArticleList, setArticleListByCid } from '../../../redux'

const Container = styled.div`
  background-color: white;
`

type Props = {
  cid: number 
}

export const ArticlesFragment = React.memo((props: Props) => {
  const { cid } = props
  const articleListByCid = useRootSelector(state => state.articleListByCid)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(`cid = ${cid}`)
    onLoad(cid)
  }, [cid])

  const onLoad = async (cidValue: number) => {
    try {
      const list = await requestArticleListByCid({ pageNum: 0, cid: cidValue })
      dispatch(setArticleListByCid(cidValue, list.datas))
    } catch(e) {
      // igonre
    }
  }

  const articles = articleListByCid[cid]?.data
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
