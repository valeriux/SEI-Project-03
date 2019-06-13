import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import ReactFilestack from 'filestack-react'
const choices = {
  accept: 'image/*',
  transformations: {
    rotate: true,
    crop: true,
    circle: true
  }
}
class CabinNew extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {},
      errors: {},
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUploadedImages = this.handleUploadedImages.bind(this)
  }

  handleChange(e) {
    const data = {...this.state.data, [e.target.name]: e.target.value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.get(`https://api.postcodes.io/postcodes/${this.state.data.postcode}`)
      .then(res => {
        console.log(res.data.result)
        const { longitude, latitude } = res.data.result
        this.setState({ data: {...this.state.data, longitude, latitude} })
      })
      .then(() => {
        return axios.post('/api/cabins', this.state.data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
      })
      .then(() => this.props.history.push('/cabins'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }


  handleUploadedImages(result) {
    console.log(this.state.data)
    const data = { ...this.state.data, image: result.filesUploaded[0].url }
    this.setState({ data })
  }

  render() {
    console.log(this.state.data)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <h1 className="title is-3"> Upload your Cabin!</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      placeholder=" Cabin by the sea"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name[0]}</div>}
                </div>
                <div className="field">
                  <label className="label">Image</label>
                  <ReactFilestack
                    apikey="A0y7LFvTfTXGeE0Xy0f9vz"
                    buttonText="Upload Photo Product"
                    buttonClass="button"
                    options={choices}
                    preload={true}
                    onSuccess={this.handleUploadedImages}
                  />
                  {this.state.data.image && <img src={this.state.data.image} />}
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image[0]}</div>}
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="description"
                      placeholder=" A lovely cabin by the sea..."
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.description && <div className="help is-danger">{this.state.errors.description[0]}</div>}
                </div>
                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input
                      className="input"
                      name="price"
                      placeholder=" 0"
                      value={this.state.data.price || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.price && <div className="help is-danger">{this.state.errors.price[0]}</div>}
                <div className="field">
                  <label className="label">Sleeps</label>
                  <div className="control">
                    <input
                      className="input"
                      name="sleeps"
                      placeholder=" 0"
                      value={this.state.data.sleeps || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder=" 1 Seaside Avenue, Hastings"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.address && <div className="help is-danger">{this.state.errors.address}</div>}
                </div>
                <div className="field">
                  <label className="label">Postcode</label>
                  <div className="control">
                    <input
                      className="input"
                      name="postcode"
                      placeholder="eg: SE1 4NN"
                      value={this.state.data.postcode || ''}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.state.errors.postcode && <div className="help is-danger">{this.state.errors.postcode}</div>}
                <button className="button is-light is-large">
                  <p>Upload Cabin</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default CabinNew
