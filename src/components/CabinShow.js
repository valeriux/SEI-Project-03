import React from 'react'
import axios from 'axios'
//import Auth from '../lib/Auth'

class CabinShow extends React.Component{
  constructor(props){
    super(props)

    this.state={
      data: null
    }

  }

  componentDidMount() {
    axios.get(`/api/cabins/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }


  render() {
    if(!this.state.data) return null
    return(
      <section className="section">
        <div className="container">

          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{this.state.data.title}</h1>
            </div>
            <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
          </div>

          <hr/>

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.data.image} alt={this.state.data.name}/>
              </figure>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default CabinShow
