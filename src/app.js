import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import CabinShow from './components/CabinShow'
import CabinsIndex from './components/CabinsIndex'
import Register from './components/Register'
import Login from './components/Login'
import CabinNew from './components/CabinNew'
import CabinEdit from './components/CabinEdit'

import Conversation from './components/Conversation'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'

import UserShow from './components/UserShow'
import SecureRoute from './components/SecureRoute'


class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <Switch>
            <SecureRoute path="/cabins/:id/Edit" component={CabinEdit}/>
            <SecureRoute path="/cabins/new" component={CabinNew}/>
            <Route path="/cabins/:id" component={CabinShow}/>
            <Route path="/users/:id" component={UserShow}/>
            <Route path="/cabins" component={CabinsIndex} />

            <Route path="/conversation/:id/sendmessageform" component={SendMessageForm} />
            <Route path="/conversation/:id/messagelist" component={MessageList} />
            <Route path="/conversation/:id" component={Conversation} />

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home}/>

          </Switch>

        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
