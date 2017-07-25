import React from 'react'
import styled from 'styled-components'

const UserPictureThumbnail = ({ url }) => {
  return (
    <Thumbnail src={url} alt="Profile Pic"/>
  )
}

const Thumbnail = styled.img`
  border-radius: 5px;
`

export default UserPictureThumbnail
