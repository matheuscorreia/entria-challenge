import React, { Component } from 'react'
// import Loadable from 'react-loadable'
// import styled from 'styled-components'
import { BrowserRouter as Router, Route } from "react-router-dom"

// import {Provider} from "react-redux"
//
// import Loading from '../components/Loading'

import UserDetails from '../scenes/UserDetails'
import UserList from '../scenes/UserList'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      users: [],
    }
    
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(users => this.setState({users: users.results}))
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => <UserList users={this.state.users} {...props}/>} />
          <Route path="/:username" render={props => <UserDetails users={this.state.users} {...props}/>} />
        </div>
      </Router>
    )
  }
}

export default App
