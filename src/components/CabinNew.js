import React from 'react'
import Auth from '../lib/Auth'
import axios from 'axios'
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
    axios.post('/api/cabins', this.state.data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` }
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
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">



              <h1 className="title is-3"> Add a new Cabin</h1>
              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      placeholder="eg: Lodge on the lake"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.title && <div className="help is-danger">{this.state.errors.title}</div>}
                </div>


                <div className="field">

                  <label className="label">Image</label>
                  <ReactFilestack
                    apikey="A0y7LFvTfTXGeE0Xy0f9vz"
                    buttonText="Upload Photo Cabin"
                    buttonClass="button"
                    options={choices}
                    preload={true}
                    onSuccess={this.handleUploadedImages}
                  />
                  {this.state.data.image && <img src={this.state.data.image} />}
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}
                </div>


                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name="price"
                      placeholder="eg: £120"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.number && <div className="help is-danger">{this.state.errors.number}</div>}
                </div>



                <div className="field">
                  <label className="label">Sleeps</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="sleeps"
                      placeholder="eg: 4"
                      onChange={this.handleChange} />
                  </div>
                  {this.state.errors.sleeps&& <div className="help is-danger">{this.state.errors.sleeps}</div>}
                </div>

                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      placeholder="eg: 1 Seaside Avenue, Hastings"
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
                      onChange={this.handleChange}/>
                  </div>
                  {this.state.errors.email && <div className="help is-danger">
                    {this.state.errors.email}</div>}
                </div>
                <button
                  className="button is-primary is-centered">
                  Add Cabin
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
