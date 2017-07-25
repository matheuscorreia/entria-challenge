import React, { Component } from 'react'
import UserListItem from '../components/UserListItem'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
  padding: 20px 0px;
  font-family: 'Nunito';
  line-height: 0.6em;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20;
  margin: 10;
  min-width: 80%;
  list-style-type: none;
`

export default class UserList extends Component {

  render() {
    return (
      <Wrapper>
        <List>
          {
            this.props.users.map((user, i) => {
              return (
                <UserListItem
                  key={i}
                  {...user}
                  onClick={() => this.props.history.push(`/${user.login.username}`)}
                />
              )
            })
          }
        </List>
      </Wrapper>
    )
  }

}
