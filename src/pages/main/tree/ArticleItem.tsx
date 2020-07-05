import React from 'react'
import { Space, Tag } from 'antd'
import { HeartTwoTone, BookTwoTone } from '@ant-design/icons'
import { Article } from '../../../http'
import styled from 'styled-components'

type Props = {
  data: Article
}

const Container = styled.div`
  /* background-color: red; */
  padding: 1rem 2rem;
`

const TitleRow = styled.div`
  flex-direction: row;
  text-align: left;
`

const Title = styled.span`
  font-size: 1.3em;
  color: black;
  font-weight: bold;
  text-align: left;
`

const InfoRow = styled.div`
  flex-direction: row;
  font-size: 0.8em;
  text-align: left;
`

const LabelText = styled.span`
  color: grey;
  /* margin-left: 1rem; */
`

const ValueText = styled.span`
  color: grey;
  margin-right: 1rem;
`

export const ArticleItem = React.memo((props: Props) => {
  const { data } = props
  const {
    author,
    link,
    collect,
    niceDate,
    niceShareDate,
    title,
    tags,
    shareUser,
    superChapterName,
    chapterName,
    fresh,
  } = data 

  return (
    <Container>
      <TitleRow>
        <Space>
          <Title>{title}</Title>
          { fresh && <Tag color="magenta">新</Tag> }
        </Space>
      </TitleRow>
      
      <InfoRow>
        <LabelText>分享人：</LabelText>
        <ValueText>{shareUser}</ValueText>
        <LabelText>分类：</LabelText>
        <ValueText>{`${superChapterName}/${chapterName}`}</ValueText>
        <LabelText>时间：</LabelText>
        <ValueText>{niceDate}</ValueText>
        <BookTwoTone twoToneColor={collect ? '#eb2f96' : '#BDBDBD'} />
      </InfoRow>
    </Container>
  )
})
