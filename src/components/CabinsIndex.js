import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CabinCard from './CabinCard'
import IndexMap from './IndexMap'

class CabinsIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      MapView: true,
      ListView: false
    }
    this.MapView = this.MapView.bind(this)
    this.ListView = this.ListView.bind(this)
  }

  ListView() {
    this.setState({
      MapView: false,
      ListView: true
    })
  }

  MapView() {
    this.setState({
      MapView: true,
      ListView: false
    })
  }

  componentDidMount() {
    axios.get('api/cabins')
      .then(res => this.setState({ data: res.data }))
  }


  render() {
    console.log(this.state, 'this is state')
    return (
      <section className="section">
        <div className="container">

          <div className="level-left">
            <button className="button is-light is-large fas fa-map-marker-alt" onClick={this.MapView}>
              <p className="map-list subtitle is-4">Map View</p>
            </button>
            <button className="button is-light is-large fas fa-list" onClick={this.ListView}>
              <p className="map-list subtitle is-4">List View</p>
            </button>
          </div>

          {this.state.MapView && <IndexMap className="show" cabins={this.state.data}/>}

          {this.state.ListView &&
          <div className="columns is-multiline listviewflex">
            {this.state.data.map(cabin =>
              <div key={cabin._id} className="column is-one-third-desktop is-half-tablet">
                <Link to ={`/cabins/${cabin._id}`}>
                  <CabinCard {...cabin} />
                </Link>
              </div>
            )}
          </div>
          }
        </div>
      </section>
    )
  }
}

export default CabinsIndex
