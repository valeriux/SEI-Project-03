// THIS FILE CREATES DATABASE

const mongoose = require('mongoose')
const Cabin = require('./models/Cabin')
const User = require('./models/User')


mongoose.connect('mongodb://localhost:27017/cabins-db', (err, db) => {
  db.dropDatabase()

  User.create({
    username: 'admin',
    email: 'admin@ga.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    photo: 'this is a photo',
    bio: 'this is a bio'
  })

    .then(user => {
      return Cabin.create([{
        title: 'Floating Portal',
        image: 'https://a0.muscache.com/im/pictures/9a5a21e2-6e48-4ec3-902e-f289c01f549e.jpg?aki_policy=x_large',
        sleeps: 4,
        address: 'GA',
        description: 'The Haven Pod is a new and unique place to stay. Floating peacefully on the water, the eco-friendly Haven Pod takes “waterfront views” to a new level.',
        email: 'aiman@ga.co.uk',
        createdBy: user
      },

      {
        title: 'Lodge on the lake',
        image: 'https://a0.muscache.com/im/pictures/4901a149-7687-4475-8816-ec1f70a3ea1b.jpg?aki_policy=xx_large',
        sleeps: 2,
        address: 'GA',
        description: 'Wake up to panoramic views overlooking the lake, enjoy some breakfast on the decking watching the feeding fish or letting the world go by before setting about your day, its the perfect spot for fishing, walking, cycling, sightseeing or shopping!',
        email: 'valeria@ga.co.uk',
        createdBy: user
      },


      {
        title: 'Luxury Cabin',
        image: 'https://a0.muscache.com/im/pictures/dd496910-a0bd-4dc6-a82c-c1650d9a2430.jpg?aki_policy=xx_large',
        sleeps: 2,
        address: 'GA',
        description: 'A cosy, airy space - complete with wood-burning stove, pizza oven and fully-equipped kitchen - with great views over National Trust land. The Hut is perfect for those wanting to escape the big smoke, to chill in front of the fire, swim at secluded beaches or get to know this wilder patch of the English countryside and coastline.',
        email: 'charlotte@ga.co.uk',
        createdBy: user

      }])
    })
    .then(() => mongoose.connection.close())
    .catch(err => {
      console.log(err)
      mongoose.connection.close()
    })

})
