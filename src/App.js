import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Landing from './components/Landing/Landing'
import IndexItems from './components/Item/ShowItems'
import UserHome from './components/UserHome/UserHome'
import CreateItem from './components/Item/CreateItem'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: [],
      isLoggedIn: false
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  setLoggedIn = () => this.setState({ isLoggedIn: true })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        {/* Nav Bar */}
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        {/* Signed out Landing */}
        <Route exact path='/' render={() => (
          <Landing/>
        )} />
        <main className="container">
          {/* Sign Up */}
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          {/* Sign In */}
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} isLoggedIn={true} />
          )} />
          {/* Sign Out */}
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          {/* Change Password */}
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          {/* User Home */}
          <AuthenticatedRoute user={user} path='/user' render={() => (
            <UserHome user={user} />
          )} />
          {/* Show All Items */}
          <AuthenticatedRoute user={user} path='/items' render={() => (
            <IndexItems user={user} />
          )} />
          {/* Add An Item */}
          <AuthenticatedRoute user={user} path='/create-item' render={() => (
            <CreateItem user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
