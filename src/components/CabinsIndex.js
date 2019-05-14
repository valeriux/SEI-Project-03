
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CabinCard from './CabinCard'

class CabinsIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('api/cabins')
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    console.log(this.state.data)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.data.map(cabin =>
              <div key={cabin._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to ={`/cabins/${cabin._id}`}>
                  <CabinCard {...cabin} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CabinsIndex
