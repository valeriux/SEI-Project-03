import React from 'react'
import Auth from '../lib/Auth'
import axios from 'axios'
class CabinEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    axios.get(`api/cabins/${this.props.match.params.id}`)
      .then(res => this.setState({data: res.data}))
  }
  handleChange(e) {
    const data = {...this.state.data, [e.target.name]: e.target.value} //existing data + the bit the user is typing
    this.setState({ data })
  }
  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()

    axios.get(`https://api.postcodes.io/postcodes?q=${this.state.data.postcode}`)
      .then(res => {
        // console.log(res)
        const lat = res.data.result[0].latitude
        const long = res.data.result[0].longitude
        const data = {...this.state.data, longitude: long, latitude: lat}
        this.setState({ data })
      })
      .then(() => {
        axios.put(`api/cabins/${this.state.data._id}`, this.state.data, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      })
      .then(() => this.props.history.push('/cabins'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      name="title"
                      placeholder="eg: Sea View Sanctuary"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.title && <div className="help is-danger">{this.state.errors.title}</div>}
                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="eg: image.png"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}
                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input
                      className="input"
                      name="price"
                      placeholder="eg: £200"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.price && <div className="help is-danger">{this.state.errors.price}</div>}
                <div className="field">
                  <label className="label">Sleeps</label>
                  <div className="control">
                    <input
                      className="input"
                      name="sleeps"
                      placeholder="eg: 4"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.sleeps && <div className="help is-danger">{this.state.errors.sleeps}</div>}
                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      className="input"
                      name="address"
                      placeholder="eg: 1 Seaside Avenue, Hastings, SE1 4NN"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.address && <div className="help is-danger">{this.state.errors.address}</div>}

                <div className="field">
                  <label className="label">Postcode</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="postcode"
                      placeholder="SE1 4NN"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.postcode && <div className="help is-danger">{this.state.errors.postcode}</div>}
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      type="textarea"
                      name="description"
                      placeholder="eg: A tranquil lakeside cabin, just moments from the unspoilt golden sands of the Sussex coast."
                      onChange={this.handleChange} />
                  </div>

                  {this.state.errors.description && <div className="help is-danger">{this.state.errors.description}</div>}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="eg: example@example.co.uk"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default CabinEdit
