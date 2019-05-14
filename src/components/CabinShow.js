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

<<<<<<< HEAD
  canModify() {
    return Auth.isAuthenticated()
  }


  render() {
    // console.log(this.state.data)
    if(!this.state.data) return null

    return(
      <section className="section">
        <div className="container">
=======
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
>>>>>>> development

          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{this.state.data.title}</h1>
            </div>
<<<<<<< HEAD
            {this.canModify() &&
=======

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


>>>>>>> development
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
