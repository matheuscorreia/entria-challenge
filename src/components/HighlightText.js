import React from 'react'
import styled from 'styled-components'

const HighlightText = ({ color, text }) => {

  const Highlight = styled.p`
    font-weight: 700;
    font-size: 1.2em;
    color: ${color};
    white-space: nowrap;
  `

  return (
    <Highlight>
      {text}
    </Highlight>
  )

}

export default HighlightText
