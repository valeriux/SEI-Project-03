import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import SecureRoute from './components/SecureRoute'

//***Restful****
import CabinNew from './components/CabinNew'
import CabinEdit from './components/CabinEdit'
import CabinShow from './components/CabinShow'
import CabinsIndex from './components/CabinsIndex'
import UserShow from './components/UserShow'
import UserEdit from './components/UserEdit'
import ConversationShow from './components/ConversationShow'



// run top down, routes give component histories, Navbar doesn't have history
class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <Switch>
            <Route path="/conversations/:id" component={ConversationShow} />

            <SecureRoute path="/cabins/:id/Edit" component={CabinEdit}/>
            <SecureRoute path="/cabins/new" component={CabinNew}/>
            <Route path="/cabins/:id" component={CabinShow}/>

            <Route path="/users/:id/edit" component={UserEdit}/>
            <Route path="/users/:id" component={UserShow}/>
            <Route path="/cabins" component={CabinsIndex} />

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
