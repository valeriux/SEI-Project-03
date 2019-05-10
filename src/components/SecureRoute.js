import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../lib/Auth'
import Flash from '../lib/Flash'

const SecureRoute = ({ component: Component, ...otherProps }) => {

  if(Auth.isAuthenticated()) return <Route {...otherProps} component={Component}/>

  Flash.setMessage('Log in please')

  // Flash.setMessage('Danger', 'You are not authorised to do that')
  return <Redirect to="/login" />
}

export default SecureRoute
