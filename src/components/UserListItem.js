import React, { Component } from 'react'
import Color from 'color'
import styled from 'styled-components'

import AngleRight from 'react-icons/lib/fa/angle-right'

// Components
import UserPictureThumbnail from './UserPictureThumbnail'
import HighlightText from './HighlightText'
import SmallText from './SmallText'

// Utils
import { randomHex, capitalize } from '../utils/functions'

// Styles ------------------------------------------------
const ListItem = styled.li`
  margin: 5px;
  padding: 10px;
  background-color: ${Color('#FFFFFF').darken(0.02).string()};
  box-shadow: 0px 0px 2px 0px rgba(171,171,171,0.45);
  transition: all 0.1s ease-in;
  &:hover {
    border-left: 10px solid;
    border-color: ${props => props.borderColor || 'black'};
  }
`

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    line-height: 1.6em;
    text-align: center;
  }
  svg {
    align-self: center;
  }
`
// Styles ------------------------------------------------


class UserListItem extends Component{
  constructor(props) {
    super(props)
    this.state = {
      color: randomHex(10,250),
    }
  }

  render() {
    const displayName = `${capitalize(this.props.name.first)} ${capitalize(this.props.name.last)}`

    return (
      <ListItem borderColor={this.state.color}>
        <MainContent>
          <UserPictureThumbnail url={this.props.picture.thumbnail}/>
          <div>
            <HighlightText color={this.state.color} text={displayName}/>
            <SmallText text={`@${this.props.login.username}`}/>
          </div>
          <button onClick={this.props.onClick} style={{backgroundColor: 'transparent', border: 0, cursor: 'pointer'}}>
            <AngleRight color={this.state.color} size={30}/>
          </button>
        </MainContent>
      </ListItem>
    )
  }
}

export default UserListItem
