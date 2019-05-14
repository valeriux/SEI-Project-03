import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'

import CabinMap from './CabinMap'

class CabinShow extends React.Component{

  constructor(props){
    super(props)

    this.state={
      data: null
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/cabins/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/cabins/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/cabins'))
  }

  canModify() {
    return Auth.isAuthenticated()
  }


  render() {
    // console.log(this.state.data)
    if(!this.state.data) return null

    return(
      <section className="section">
        <div className="container">

          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{this.state.data.title}</h1>
            </div>
            {this.canModify() &&
              <div className="level-right">
                <Link to={`/cabins/${this.state.data._id}/edit`} className="button is-primary">Edit</Link>
                <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
              </div>
            }
          </div>
          <hr/>

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.data.image} alt={this.state.data.name}/>
              </figure>
            </div>
          </div>

          <CabinMap
            data={this.state.data}
          />

        </div>
      </section>
    )
  }
}

export default CabinShow
