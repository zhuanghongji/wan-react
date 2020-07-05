/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { requestArticleList, requestUserArticleList } from '../../../http'
import { ArticleItem } from './ArticleItem'
import styled from 'styled-components'
import { useRootSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { setUserArticleList } from '../../../redux'

const Container = styled.div`
  background-color: white;
`

export const ArticlesFragment = React.memo(() => {
  // const {
  //   data: articles,
  //   error,
  //   loading,
  // } = useRequest(requestArticleList, {
  //   formatResult: result => result.datas,
  //   defaultParams: [{ pageNum: 0 }],
  // })

  const {
    data: articles,
  } = useRootSelector(state => state.userArticleList)
  // const {  } = aaa.
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
      {/* <Button 
        type="primary" 
        onClick={() => {
          console.log('requestArticleList...')
          // requestArticleList({ pageNum: 0 }).then(list => {
          //   console.log('requestArticleList: result = ', list)
          // }).then(e => {
          //   console.log('requestArticleList: error = ', e)
          // })
          // run({ pageNum: 0 })
          setCount(count + 1)
        }}
      >
        Button3
      </Button> */}
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
