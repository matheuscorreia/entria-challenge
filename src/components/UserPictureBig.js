import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  border-radius: 50%;

  height: 200px;
  width: 200px;

  margin-bottom: 20px;
`

const UserPictureBig = ({ url }) => {

  return (
    <Image src={url}/>
  )

}

export default UserPictureBig
