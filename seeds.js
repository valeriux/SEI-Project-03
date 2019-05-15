const mongoose = require('mongoose')
const Cabin = require('./models/Cabin')
const User = require('./models/User')

// creating two users in our userSchema to test the comment/message system
mongoose.connect('mongodb://localhost:27017/cabins-db', (err, db) => {

  db.dropDatabase()

    .then(() => {

      return User.create([{
        username: 'Haylins',
        email: 'haylins@outlook.co.uk',
        password: 'pass',
        passwordConfirmation: 'pass',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Welsh_Dragon_%28Y_Ddraig_Goch%29.svg/1200px-Welsh_Dragon_%28Y_Ddraig_Goch%29.svg.png',
        bio: 'I am Haylins, I like the pretty things with the views. Hmmm, shiny'
      }, {
        username: 'Aimen',
        email: 'aimen@hotmail.com',
        password: 'pass',
        passwordConfirmation: 'pass',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Welsh_Dragon_%28Y_Ddraig_Goch%29.svg/1200px-Welsh_Dragon_%28Y_Ddraig_Goch%29.svg.png',
        bio: 'I am Aimen, I like what Charlotte likes'
      }])
    })
    .then(users => {
      Cabin.create([
        {
          title: 'Floating Portal',
          image: 'https://a0.muscache.com/im/pictures/9a5a21e2-6e48-4ec3-902e-f289c01f549e.jpg?aki_policy=x_large',
          price: 150,
          sleeps: 4,
          address: '2 Fletching Lane, Uckfield, East Sussex',
          postcode: 'TN22 3SS',
          longitude: -0.19607,
          latitude: 50.92269,
          description: 'The Haven Pod is a new and unique place to stay. Floating peacefully on the water, the eco-friendly Haven Pod takes "waterfront views" to a new level.',
          email: 'nicebackend@aiman.co.uk',
          createdBy: users[0]
        },
        {
          title: 'Lodge on the lake',
          image: 'https://a0.muscache.com/im/pictures/4901a149-7687-4475-8816-ec1f70a3ea1b.jpg?aki_policy=xx_large',
          price: 120,
          sleeps: 2,
          address: '405 S Coast Rd, Telscombe Cliffs, Peacehaven',
          postcode: 'TN22 3SS',
          longitude: -0.19607,
          latitude: 50.92269,
          description: 'Wake up to panoramic views overlooking the lake, enjoy some breakfast on the decking watching the feeding fish or letting the world go by before setting about your day, its the perfect spot for fishing, walking, cycling, sightseeing or shopping!',
          email: 'valeria@ga.co.uk',
          createdBy: users[0]
        },
        {
          title: 'Luxury Cabin',
          image: 'https://a0.muscache.com/im/pictures/dd496910-a0bd-4dc6-a82c-c1650d9a2430.jpg?aki_policy=xx_large',
          price: 180,
          sleeps: 2,
          address: '14 Cavendish Lane, Eastbourne',
          postcode: 'BN21 3RR',
          longitude: 0.28895,
          latitude: 50.77086,
          description: 'A cosy, airy space - complete with wood-burning stove, pizza oven and fully-equipped kitchen - with great views over National Trust land. The Hut is perfect for those wanting to escape the big smoke, to chill in front of the fire, swim at secluded beaches or get to know this wilder patch of the English countryside and coastline.',
          email: 'charlotte@ga.co.uk',
          createdBy: users[0]
        },
        {
          title: 'Cliff Top Cabin',
          image: 'https://coolstays.imgix.net/18433.jpg?&h=700&fit=crop&auto=compress',
          price: 200,
          sleeps: 2,
          address: 'The Dell, Sandy Cliff Drive',
          postcode: 'BN10 7HX',
          longitude: -0.00765,
          latitude: 50.79247,
          description: 'Stylish and chic coastal chalet perfect for romantic getaways. Beautiful sea views to be enjoyed from every room as well as from an impressive decked area. Luxuriously furnished, The Dell is idyllic both inside and out',
          email: 'tormund@giantbitty.co.uk',
          createdBy: users[0]
        },
        {
          title: 'Harbour-side Hut',
          image: 'https://coolstays.imgix.net/47187.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 4,
          address: 'Harbour Beach Hut 1, Harbourside',
          postcode: 'BN17 5LH',
          longitude: -0.54108,
          latitude: 50.80244,
          description: 'Beautifully appointed and five star standard throughout, this hut will sleep four with the use of a double sofa bed. Fantastic location on the waterfront with a delightful view over the River. Amazing dining in this food lover\'s paradise.',
          email: 'chesneyhawkes@oneandonly.co.uk',
          createdBy: users[0]
        },
        {
          title: 'Beach Hut Living',
          image: 'https://coolstays.imgix.net/47282.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 4,
          address: 'Climping Beach Hut 1, Climping',
          postcode: 'BN17 5DL',
          longitude: -0.54599,
          latitude: 50.80604,
          description: 'Chill back vibes will surround you in this beautiful, modern, luxury take on a beach hut. Enjoy glorious sea-side walks, lapping waves and a whole host of amenities.',
          email: 'ga@generalasembly.co.uk',
          createdBy: users[0]
        },
        {
          title: 'La Vida Lake-side',
          image: 'https://coolstays.imgix.net/73434.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 5,
          address: '26 Anderby Creek, Brightwell',
          postcode: 'BN27 3QS',
          longitude: 0.21111,
          latitude: 50.86331,
          description: 'A tranquil lakeside cabin, just moments from the unspoilt golden sands of the Sussex coast. Stylishly revived, the cabin has a sophisticated and stylish edge with a subtle coastal feel and is suitabale for couples and families alike.',
          email: 'rickymartin@howdidntyouknow.com',
          createdBy: users[0]
        },
        {
          title: 'Luxury Cabin with Hot Tub',
          image: 'https://coolstays.imgix.net/78595.jpg?&h=700&fit=crop&auto=compress',
          price: 180,
          sleeps: 3,
          address: '3 Sauchope Lane, Seaside',
          postcode: 'TN40 1LS',
          longitude: 0.48133,
          latitude: 50.83874,
          description: 'Escape the hustle and bustle and relax with panormic views. Open plan living areas complete with wood burning stoves, for cosy nights in.Double bedroom with en-suite bathroom has a stylish decor and super-comfy beds',
          email: 'jonsnow@hotaunties.com',
          createdBy: users[0]
        },
        {
          title: 'Vistas of Tranquility',
          image: 'https://coolstays.imgix.net/80708.jpg?&vib=12&high=0&shad=0&sat=0&exp=0&bri=0&con=0&sharp=0&fp-x=0.49&fp-y=0.56&fp-z=1&rot=0&h=700&fit=crop&auto=compress',
          price: 180,
          sleeps: 3,
          address: '1 Clifftops Drive, Skyeville',
          postcode: 'BN24 6HS',
          longitude: 0.34813,
          latitude: 50.81116,
          description: 'A delightfully remote escape  with breath-taking coastal views. Enjoy luxury all year around in a peaceful location with no disturbances',
          email: 'aimandidit@noididnt.com',
          createdBy: users[0]
        },
        {
          title: 'Hobbit Cabin On The Lake',
          image: 'https://gwaliafarm.co.uk/wp-content/uploads/2014/05/P1060389.jpg',
          price: 180,
          sleeps: 3,
          address: '10 Swimmers Lane, Arundel',
          postcode: 'BN18 9AU',
          longitude: 0.34813,
          latitude: 50.81116,
          description: 'Explore woodlands and freshwater swimming from this sustainable wood cabin. Fully equipped to cater for all your needs you can escape to tranquility while still having small town amenities and great pubs within a ten minute walk',
          email: 'oggyoggyoggy@oioioi.com',
          createdBy: users[0]
        },
        {
          title: 'Lakeside Retreat',
          image: 'https://www.somerleyton.co.uk/wp-content/uploads/2017/07/fritton-140.jpg',
          price: 210,
          sleeps: 3,
          address: '7 Windmill Hill Bottom Lane, Herstmonceux',
          postcode: 'BN27 4RS',
          longitude: 0.33631,
          latitude: 50.88686,
          description: 'Stylish log cabin within the ground of a great English country house. Enjoy cosy nights in with the log burner and fresh morning swims. Enjoy the magnificent flowering rhododendrons and specimen trees of the Hall\'s garden, but also some open glades.',
          email: 'ifyouhaveanid@inyourdatabase.com',
          createdBy: users[0]
        },
        {
          title: 'Woods and Water',
          image: 'https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Lakeside-log-cabin.jpg',
          price: 210,
          sleeps: 4,
          address: '20 Bewlbridge Lane, Bewl',
          postcode: 'TN3 8JH',
          longitude: 0.39345,
          latitude: 51.08209,
          description: 'Your retreat boasts a cosy open plan living area, wood burning stove and  incredible views from every part of the house. Opening out from the glass doors in the kitchen, you will have your own private veranda which steps down to its own jetty. The decking is an ideal place to wine and dine and to your pier, you\'ll find a private curved beach. Island Lodge also comes with a Finnish hot tub.',
          email: 'valeriano@moredogsjustno.com',
          createdBy: users[0]
        },
        {
          title: 'Beautiful Beach Hut',
          image: 'https://i1.wp.com/www.director.co.uk/wp-content/uploads/2016/11/dog-friendly-cary-arms-beach-huts.jpg?fit=1000%2C500&ssl=1',
          price: 210,
          sleeps: 3,
          address: '12 Eastbourne Lane, Pevensey Bay, Pevensey',
          postcode: 'BN24 6HS',
          longitude: 0.34813,
          latitude: 50.81116,
          description: 'Enjoy the a traditional English beach hut holiday but with stylish modern luxury and amenity. Wake up to the lapping of waves and crystal clear waters while being a short distance from the vibrancy of sea-side town life with all its eateries, wine bars and traditional british pubs',
          email: 'dontforget@topopulate.com',
          createdBy: users[0]
        },
        {
          title: 'Shepherd\'s Hut Retreat',
          image: 'https://hostunusual.com/?page_type=show_image&img=the-shepherd-hut-retreat-lakeside-hot-tub.jpg&w=800&h=520&canvas=frame&bgcolour=dadada&q=50',
          price: 90,
          sleeps: 2,
          address: '10 Crewkerne Lane, Trumpington, Pevensey',
          postcode: 'TN6 3NR',
          longitude: 0.26131,
          latitude: 51.05346,
          description: 'You\'ll find The Shepherd\'s Hut Retreat in an idyllic rural location, surrounded by organic farmland. Beautifully positioned between the trees and on the water\'s edge, each hut features a private bathroom, a well-equipped kitchen and WiFi. You\'ll also have your own decking and fire pit to make the most of those amazing views.',
          email: 'dontforget@topopulate.com',
          createdBy: users[0]
        },
        {
          title: 'Starbed Hideaway',
          image: 'https://hostunusual.com/?page_type=show_image&img=starbed-hideaways-double-pattern.jpg&w=800&h=520&canvas=frame&bgcolour=dadada&q=50',
          price: 145,
          sleeps: 2,
          address: '10 Crewkerne Lane, Trumpington, Pevensey',
          postcode: 'BN24 6HS',
          longitude: 0.34813,
          latitude: 50.81116,
          description: 'Are you looking for an entirely different kind of fresh escape?  How about one that allows you to enjoy the blissful peace and lush tranquillity of nature at its absolute finest, all the while living in the lap of indulgent luxury? You can luxuriate in the company of your loved one, beside a gently glowing wood-burning stove. Head outside to the radial deck by evening, with snug seating and a warming firepit to spend endless evenings beside, whiling away your holiday hours by chatting fondly about life, love and everything in between! StarBed Hideaways is the embodiment of your holiday dreams.',
          email: 'dontforget@topopulate.com',
          createdBy: users[0]
        },
        {
          title: 'Rustic Cabin in the Woods',
          image: 'https://coolstays.imgix.net/71112.jpg?&vib=11&high=0&shad=0&sat=0&exp=2&bri=0&con=15&sharp=0&fp-x=0.56&fp-y=0.47&fp-z=1.2&rot=0&h=700&fit=crop&auto=compress',
          price: 160,
          sleeps: 2,
          address: 'Fisherman\'s Hut, Twyford Lane, Haywards Heath',
          postcode: 'RH17 7DJ',
          longitude: -0.00817,
          latitude: 51.06104,
          description: 'An inspirational, handcrafted cabin, hidden off the beaten track. Gorgeous location on the edge of your own private lake. Sit on the deck with your morning coffee and bask in the wonders of nature. The cabin make use of solar power, wood burners and composting techniques making it fully eco friendly.',
          email: 'dontforget@topopulate.com',
          createdBy: users[0]
        }
      ])
        .then(() => mongoose.connection.close())
        .catch(err => {
          console.log(err)
          mongoose.connection.close()
        })
    })
})
