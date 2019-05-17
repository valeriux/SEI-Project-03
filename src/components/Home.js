import React from 'react'

const imagesCabins  =[
  'https://coolstays.imgix.net/18433.jpg?&h=700&fit=crop&auto=compress',
  'https://adorable-home.com/wp-content/uploads/2017/02/Fantasy-Bamboo-Cabin-9.jpg',
  'https://i1.wp.com/www.director.co.uk/wp-content/uploads/2016/11/dog-friendly-cary-arms-beach-huts.jpg?fit=1000%2C500&ssl=1',
  'https://adorable-home.com/wp-content/uploads/2017/02/Fantasy-Bamboo-Cabin-4.jpg',
  'https://adorable-home.com/wp-content/uploads/2015/06/Amazing-cabins-4-1024x683.jpg',
  'https://a0.muscache.com/im/pictures/dd496910-a0bd-4dc6-a82c-c1650d9a2430.jpg?aki_policy=xx_large',
  'https://hostunusual.com/?page_type=show_image&img=the-shepherd-hut-retreat-lakeside-hot-tub.jpg&w=800&h=520&canvas=frame&bgcolour=dadada&q=50',
  'http://www.godsavethepoints.com/wp-content/uploads/2017/11/Eagle-brae.jpg',
  'https://adorable-home.com/wp-content/uploads/2017/02/Bamboo-cabin.jpg',
  'https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Lakeside-log-cabin.jpg'
]

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: imagesCabins,
      actualImage: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      let actualImage = this.state.actualImage + 1
      actualImage === this.state.images.length ? actualImage = 0:null
      this.setState({ actualImage })
    }, 1900)
  }


  render() {
    return (
      <section className="hero is-fullheight" style={{
        backgroundImage: `url(${imagesCabins[this.state.actualImage]})`
      }}>
        <div className="hero-body">
          <div className="container">

            <div className="bird-container bird-container--one">
              <div className="bird bird--one"></div>
            </div>

            <div className="bird-container bird-container--two">
              <div className="bird bird--two"></div>
            </div>

            <div className="bird-container bird-container--three">
              <div className="bird bird--three"></div>
            </div>

            <div className="bird-container bird-container--four">
              <div className="bird bird--four"></div>
            </div>

            <div className="container title-container has-text-right">
              <h1 className="title hometitle1">Cabin Fever</h1>
              <h2 className="subtitle1">Small spaces big views</h2>
            </div>

          </div>
        </div>


      </section>

    )
  }
}




export default Home
