import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'

import CabinMap from './CabinMap'

class CabinShow extends React.Component{

  constructor(props){
    super(props)

    this.state={
      cabin: null
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/cabins/${this.props.match.params.id}`)
      .then(res => this.setState({ cabin: res.data }))
  }

  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/cabins/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/cabins'))
  }


  render(){
    const state = this.state.cabin
    if (!this.state.cabin) return null
    return (
      <section className="section show">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{state.title}</h1>
            </div>
          </div>
          <hr />
          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image">
                <img src={state.image} alt={state.title} />
              </figure>
            </div>
            <div className="column is-half-desktop is-full-tablet">
              <div className="column is-half-desktop is-full-tablet">
                <h2 className="title is-6">Sleeps: {state.sleeps}</h2>
                <hr />
              </div>
              <div className="column is-half-desktop is-full-tablet">
                <h2 className="title is-6">Address: {state.address}</h2>
                <hr />
              </div>
              <div className="column is-one-half">
                <h2 className="title is-6">Description: {state.description}</h2>
                <hr />
              </div>
              <div className="level-right">
                <Link to={`/cabins/${state._id}/edit`} className="button is-primary">Edit</Link>
                <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
            <CabinMap data={state} />
          </div>
        </div>
      </section>
    )
  }
}

export default CabinShow
