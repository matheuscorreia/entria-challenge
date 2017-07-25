import React, { Component } from 'react'
import styled from 'styled-components'

import AngleLeft from 'react-icons/lib/fa/angle-left'

import UserPictureBig from '../components/UserPictureBig'
import HighlightText from '../components/HighlightText'
import SmallText from '../components/SmallText'

import { capitalize } from '../utils/functions'

export default class UserDetails extends Component {

  constructor(props) {
    super(props)
    let index = this.props.users.findIndex(u => {
      return u.login.username === this.props.match.params.username
    })

    let userDefault = {
      picture: {
        large: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
      },
      name: {
        first: 'Not',
        last: 'Found',
      },
      login: {
        username: 'notfound',
      },
      location: {
        street: '',
      },
    }

    this.user = this.props.users[index] || userDefault
  }

  render() {
    const displayName = `${capitalize(this.user.name.first)} ${capitalize(this.user.name.last)}`
    return (
      <Wrapper>
        <Button onClick={this.props.history.goBack}><AngleLeft size={40}/></Button>
        <UserPictureBig url={this.user.picture.large} />
        <HighlightText text={displayName} />
        <SmallText text={'@'+this.user.login.username} />
        <Details>
          <tbody>
            <tr>
              <td><HighlightText text="Email:"/></td>
              <td>{this.user.email}</td>
            </tr>
            <tr>
              <td><HighlightText text="Address:"/></td>
              <td>{this.user.location.street}</td>
            </tr>
            <tr>
              <td><HighlightText text="Phone:"/></td>
              <td>{this.user.phone}</td>
            </tr>
          </tbody>
        </Details>
      </Wrapper>
    )
  }

}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

  font-family: 'Nunito';
  line-height: 1.5em;
`

const Details = styled.table`
  margin-top: 20px;
  width: 50%;
`

const Button = styled.button`
  position: absolute;
  top: 5px;
  left: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`
