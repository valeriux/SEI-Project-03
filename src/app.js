import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './style.scss'

import Home from './components/Home'
import CabinShow from './components/CabinShow'
import CabinsIndex from './components/CabinsIndex'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>

          <Switch>
            <Route path="/cabins/:id" component={CabinShow}/>
            <Route path="/cabins" component={CabinsIndex} />
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
