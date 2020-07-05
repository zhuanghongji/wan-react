import React, { useEffect, useState } from 'react'
import { Space, Tag, Divider } from 'antd'
import { Article, requestTree } from '../../../http'
import styled from 'styled-components'
import { useRootSelector } from '../../../hooks'
import { useDispatch } from 'react-redux'
import { setTreeList } from '../../../redux'

const { CheckableTag } = Tag

const Container = styled.div`
  background-color: white;
  padding: 1rem 2rem;
`

const TabContainer = styled.div`
  width: 800px;
  flex-direction: row;
  text-align: left;
`

type Props = {
  onChange: (ids: {
    firstStageId: number,
    secondStageId: number,
  }) => void
}

/**
 * 体系选择器
 */
export const TreeSelector = React.memo((props: Props) => {
  const { onChange } = props 

  // 第一级选中的 ID
  const [firstStageId, setFirstStageId] = useState<number | null>(null)
  // 第二级选中的 ID
  const [secondStageId, setSecondStageId] = useState<number | null>(null)

  const treeList = useRootSelector(state => state.treeList)
  const dispatch = useDispatch()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    try {
      const list = await requestTree()
      const [tree] = list
      const [child] = tree.children ?? []
      const firstId = tree.id ?? null
      const secondId = child.id ?? null
      setFirstStageId(firstId)
      setSecondStageId(secondId)
      dispatch(setTreeList(list))
      if (firstId !== null && secondId !== null) {
        onChange({
          firstStageId: firstId,
          secondStageId: secondId,
        })
      }
    } catch(e) {
      // igonre
    }
  }

  const handleFirstStageIdChange = (toId: number) => {
    setFirstStageId(toId)
    const children = treeList.find(({ id }) => id === toId)?.children
    const secondTree = children && children[0]
    const secondId = secondTree ? secondTree.id : null
    setSecondStageId(secondId)
    if (secondId !== null) {
      onChange({
        firstStageId: toId,
        secondStageId: secondId,
      })
    }
  }

  const handleSecondStageIdChange = (toId: number) => {
    setSecondStageId(toId)
    if (firstStageId === null) {
      return
    }
    onChange({
      firstStageId: firstStageId,
      secondStageId: toId,
    })
  }
  
  if (treeList.length === 0) {
    return null 
  }
  if (firstStageId === null || secondStageId === null) {
    return null 
  }
  return (
    <Container>
      <Space direction="vertical">
        <TabContainer>
          {
            treeList.map(tree => {
              const { id, name } = tree
              return (
                <CheckableTag 
                  key={id} 
                  style={{ marginTop: 4, marginBottom: 4 }}
                  checked={id === firstStageId}
                  onChange={checked => {
                    if (!checked) {
                      return
                    }
                    handleFirstStageIdChange(id)
                  }}
                >{name}</CheckableTag>
              )
            })
          }
        </TabContainer>
        <Divider />
        <TabContainer>
          {
            treeList.find(tree => tree.id === firstStageId)?.children?.map(tree => {
              const { id, name } = tree
              return (
                <CheckableTag 
                  key={id} 
                  checked={id === secondStageId}
                  onChange={checked => {
                    if (!checked) {
                      return
                    }
                    handleSecondStageIdChange(id)
                  }}
                >{name}</CheckableTag>
              )
            })
          }
        </TabContainer>
      </Space>
      
    </Container>
  )
})
