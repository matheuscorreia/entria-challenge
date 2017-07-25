import React from 'react'
import styled from 'styled-components'

const SmallText = ({ text }) => {
  return (
    <SmallTextStyled>{text}</SmallTextStyled>
  )
}

const SmallTextStyled = styled.p`
  font-weight: 700;
  font-size: 0.8em;
  color: #a7a7a7;
`

export default SmallText
