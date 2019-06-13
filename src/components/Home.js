import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  render() {
    return (
      <section className="hero is-fullheight-with-navbar" style={{
        backgroundImage: 'url(\'../images/CabinBackground.jpg\')'
      }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title hometitle">Cabin Fever</h1>
            <h2 className="subtitle homesubtitle">small spaces with BIG VIEWS</h2>
          </div>
        </div>


      </section>

    )
  }
}




export default Home
