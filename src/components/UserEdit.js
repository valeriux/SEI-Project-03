import React from 'react'
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

class UserEdit extends React.Component {

  constructor(props) {
    super(props)

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
    e.preventDefault()
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }


  handleSubmit(e) {
    e.preventDefault()

    // Auth.getToken()
    console.log(this.state.data)

    axios.put(`/api/users/${this.props.match.params.id}`, this.state.data)
      .then(res => {
        this.props.history.push(`/users/${res.data._id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))

    console.log(this.state.data)
  }

  handleUploadedImages(result) {
    console.log(this.state.data)
    const data = { ...this.state.data, photo: result.filesUploaded[0].url }
    this.setState({ data })
  }

  render() {
    console.log(this.state.data, 'this.state.data')
    return (
      <section className="section1">
        <div className="container userEdit-container">
          <div className="columns edit-columns is-multiline is-mobile">
            <form className="userEdit-form" onSubmit={this.handleSubmit}>

              <div className="column is-half-desktop is-two-thirds-tablet">

                <h1 className="title is-3 editTitle"> Editing my account </h1>

                <div className="field">

                  <label className="label">Profile Photo</label>
                  <ReactFilestack
                    className="image is-128x128"
                    apikey="A0y7LFvTfTXGeE0Xy0f9vz"
                    buttonText="Upload your Photo"
                    buttonClass="button"
                    options={choices}
                    preload={true}
                    onSuccess={this.handleUploadedImages}
                  />
                  {this.state.data.photo && <img src={this.state.data.photo} />}
                </div>


                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      value={this.state.data.username || ''}
                      placeholder="eg. valeriux..."
                      onChange={this.handleChange}

                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Biography</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="bio"
                      value={this.state.data.bio || ''}
                      placeholder="eg. I enjoy when I spent time with my friends..."
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <br/>

                <div className="level-item">
                  <button className="button is-info submit-edit-button">Submit Changes</button>
                </div>


              </div>


            </form>

          </div>

        </div>

      </section>
    )
  }
}
//


export default UserEdit
