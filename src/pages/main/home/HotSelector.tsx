import React from 'react'
import styled from 'styled-components'

export type HotSelectorValue = 'left' | 'right'

type Props = {
  value: HotSelectorValue
  onChangeValue: (value: HotSelectorValue) => void 
}

const Container = styled.div`
  padding: 1rem 2rem;
  color: grey;
`

const Text = styled.span<{
  selected: boolean
}>`
  font-size: 1.3em;
  color: ${props => props.selected ? 'black' : 'grey'};
`

const Divider = styled.span`
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`

export const HotSelector = React.memo((props: Props) => {
  const { value, onChangeValue } = props 

  const handleClick = (targetValue: HotSelectorValue) => {
    if (targetValue === value) {
      return
    }
    onChangeValue(targetValue)
  }

  return (
    <Container>
      <Text 
        selected={value === 'left'} 
        onClick={() => handleClick('left')}
      >热门博文</Text>
      <Divider>|</Divider>
      <Text 
        selected={value === 'right'} 
        onClick={() => handleClick('right')}
      >热门项目</Text>
    </Container>
  )
})
