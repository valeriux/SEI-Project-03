const mongoose = require('mongoose')
const Cabin = require('./models/Cabin')
const User = require('./models/User')


mongoose.connect('mongodb://localhost:27017/cabins-db', (err, db) => {

  db.dropDatabase()

    .then(() => {

      User.create({
        username: 'user',
        email: 'user@ga.co',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
    })

    .then(user => {
      Cabin.create([


        {
          title: 'Floating Portal',
          image: 'https://a0.muscache.com/im/pictures/9a5a21e2-6e48-4ec3-902e-f289c01f549e.jpg?aki_policy=x_large',
          price: 150, // add in £ and pn
          sleeps: 4,
          address: '2 Fletching Lane, Uckfield, East Sussex',
          postcode: 'TN22 3SS',
          description: 'The Haven Pod is a new and unique place to stay. Floating peacefully on the water, the eco-friendly Haven Pod takes "waterfront views" to a new level.',
          email: 'nicebackend@aiman.co.uk',
          createdBy: user
        },
        {
          title: 'Lodge on the lake',
          image: 'https://a0.muscache.com/im/pictures/4901a149-7687-4475-8816-ec1f70a3ea1b.jpg?aki_policy=xx_large',
          price: 120,
          sleeps: 2,
          address: '405 S Coast Rd, Telscombe Cliffs, Peacehaven',
          postcode: 'TN22 3SS',
          description: 'Wake up to panoramic views overlooking the lake, enjoy some breakfast on the decking watching the feeding fish or letting the world go by before setting about your day, its the perfect spot for fishing, walking, cycling, sightseeing or shopping!',
          email: 'valeria@ga.co.uk',
          createdBy: user
        },
        {
          title: 'Luxury Cabin',
          image: 'https://a0.muscache.com/im/pictures/dd496910-a0bd-4dc6-a82c-c1650d9a2430.jpg?aki_policy=xx_large',
          price: 180,
          sleeps: 2,
          address: '14 Cavendish Lane, Eastbourne,',
          postcode: 'BN21 3RR',
          description: 'A cosy, airy space - complete with wood-burning stove, pizza oven and fully-equipped kitchen - with great views over National Trust land. The Hut is perfect for those wanting to escape the big smoke, to chill in front of the fire, swim at secluded beaches or get to know this wilder patch of the English countryside and coastline.',
          email: 'charlotte@ga.co.uk',
          createdBy: user
        },
        {
          title: 'Cliff Top Cabin',
          image: 'https://coolstays.imgix.net/18433.jpg?&h=700&fit=crop&auto=compress',
          price: 200,
          sleeps: 2,
          address: 'The Dell, Sandy Cliff Drive,',
          postcode: 'BN10 7HX',
          description: 'Stylish and chic coastal chalet perfect for romantic getaways. Beautiful sea views to be enjoyed from every room as well as from an impressive decked area. Luxuriously furnished, The Dell is idyllic both inside and out',
          email: 'tormund@giantbitty.co.uk',
          createdBy: user
        },
        {
          title: 'Harbour-side Hut',
          image: 'https://coolstays.imgix.net/47187.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 4,
          address: 'Harbour Beach Hut 1, Harbourside',
          postcode: 'BN17 5LH',
          description: 'Beautifully appointed and five star standard throughout, this hut will sleep four with the use of a double sofa bed. Fantastic location on the waterfront with a delightful view over the River. Amazing dining in this food lover\'s paradise.',
          email: 'chesneyhawkes@oneandonly.co.uk',
          createdBy: user
        },
        {
          title: 'Beach Hut Living',
          image: 'https://coolstays.imgix.net/47282.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 4,
          address: 'Climping Beach Hut 1, Climping,',
          postcode: 'BN17 5DL',
          description: 'Chill back vibes will surround you in this beautiful, modern, luxury take on a beach hut. Enjoy glorious sea-side walks, lapping waves and a whole host of amenities.',
          email: 'ga@generalasembly.co.uk',
          createdBy: user
        },
        {
          title: 'La Vida Lake-side',
          image: 'https://coolstays.imgix.net/73434.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 5,
          address: '26 Anderby Creek, Brightwell',
          postcode: 'BN27 3QS',
          description: 'A tranquil lakeside cabin, just moments from the unspoilt golden sands of the Sussex coast. Stylishly revived, the cabin has a sophisticated and stylish edge with a subtle coastal feel and is suitabale for couples and families alike.',
          email: 'rickymartin@howdidntyouknow.com',
          createdBy: user
        },
        {
          title: 'Luxury Cabin with Hot Tub',
          image: 'https://coolstays.imgix.net/78595.jpg?&h=700&fit=crop&auto=compress',
          price: 180,
          sleeps: 3,
          address: '3 Sauchope Lane, Seaside,',
          postcode: 'TN40 1LS',
          description: 'Escape the hustle and bustle and relax with panormic views. Open plan living areas complete with wood burning stoves, for cosy nights in.Double bedroom with en-suite bathroom has a stylish decor and super-comfy beds',
          email: 'jonsnow@hotaunties.com',
          createdBy: user
        },
        {
          title: 'Vistas of Tranquility',
          image: 'https://coolstays.imgix.net/80708.jpg?&vib=12&high=0&shad=0&sat=0&exp=0&bri=0&con=0&sharp=0&fp-x=0.49&fp-y=0.56&fp-z=1&rot=0&h=700&fit=crop&auto=compress',
          price: 180,
          sleeps: 3,
          address: '1 Clifftops Drive, Skyeville',
          postcode: 'BN24 6HS',
          description: 'A delightfully remote escape  with breath-taking coastal views. Enjoy luxury all year around in a peaceful location with no disturbances',
          email: 'aimandidit@noididnt.com',
          createdBy: user
        },
        {
          title: 'Hobbit Cabin On The Lake',
          image: 'https://gwaliafarm.co.uk/wp-content/uploads/2014/05/P1060389.jpg',
          price: 180,
          sleeps: 3,
          address: '10 Swimmers Lane, Arundel',
          postcode: 'BN18 9AU',
          description: 'Explore woodlands and freshwater swimming from this sustainable wood cabin. Fully equipped to cater for all your needs you can escape to tranquility while still having small town amenities and great pubs within a ten minute walk',
          email: 'oggyoggyoggy@oioioi.com',
          createdBy: user
        },
        {
          title: 'Lakeside Retreat',
          image: 'https://www.somerleyton.co.uk/wp-content/uploads/2017/08/Fritton-Hall-Retreats003.jpg',
          price: 210,
          sleeps: 3,
          address: '7 Windmill Hill Bottom Lane, Herstmonceux,',
          postcode: 'BN27 4RS',
          description: 'Stylish log cabin within the ground of a great English country house. Enjoy cosy nights in with the log burner and fresh morning swims. Enjoy the magnificent flowering rhododendrons and specimen trees of the Hall\'s garden, but also some open glades.',
          email: 'ifyouhaveanid@inyourdatabase.com',
          createdBy: user
        },
        {
          title: 'Woods and Water',
          image: 'https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Lakeside-log-cabin.jpg',
          price: 210,
          sleeps: 4,
          address: '20 Bewlbridge Lane, Bewl',
          postcode: 'TN3 8JH',
          description: 'Your retreat boasts a cosy open plan living area, wood burning stove and  incredible views from every part of the house. Opening out from the glass doors in the kitchen, you will have your own private veranda which steps down to its own jetty. The decking is an ideal place to wine and dine and to your pier, you\'ll find a private curved beach. Island Lodge also comes with a Finnish hot tub.',
          email: 'valeriano@moredogsjustno.com',
          createdBy: user
        },
        {
          title: 'Beautiful Beach Hut',
          image: 'https://i1.wp.com/www.director.co.uk/wp-content/uploads/2016/11/dog-friendly-cary-arms-beach-huts.jpg?fit=1000%2C500&ssl=1',
          price: 210,
          sleeps: 3,
          address: '12 Eastbourne Lane, Pevensey Bay, Pevensey',
          postcode: 'BN24 6HS',
          description: 'Enjoy the a traditional English beach hut holiday but with stylish modern luxury and amenity. Wake up to the lapping of waves and crystal clear waters while being a short distance from the vibrancy of sea-side town life with all its eateries, wine bars and traditional british pubs',
          email: 'dontforget@topopulate.com',
          createdBy: user
        },
        {
          title: 'Shepherd\'s Hut Retreat',
          image: 'https://hostunusual.com/?page_type=show_image&img=the-shepherd-hut-retreat-lakeside-hot-tub.jpg&w=800&h=520&canvas=frame&bgcolour=dadada&q=50',
          price: 90,
          sleeps: 2,
          address: '10 Crewkerne Lane, Trumpington, Pevensey',
          postcode: 'BN24 6HS',
          description: 'You\'ll find The Shepherd\'s Hut Retreat in an idyllic rural location, surrounded by organic farmland. Beautifully positioned between the trees and on the water\'s edge, each hut features a private bathroom, a well-equipped kitchen and WiFi. You\'ll also have your own decking and fire pit to make the most of those amazing views.',
          email: 'dontforget@topopulate.com',
          createdBy: user
        },
        {
          title: 'Starbed Hideaway',
          image: 'https://hostunusual.com/?page_type=show_image&img=starbed-hideaways-double-pattern.jpg&w=800&h=520&canvas=frame&bgcolour=dadada&q=50',
          price: 145,
          sleeps: 2,
          address: '10 Crewkerne Lane, Trumpington, Pevensey',
          postcode: 'BN24 6HS',
          description: 'You\'ll find The Shepherd\'s Hut Retreat in an idyllic rural location, surrounded by organic farmland. Beautifully positioned between the trees and on the water\'s edge, each hut features a private bathroom, a well-equipped kitchen and WiFi. You\'ll also have your own decking and fire pit to make the most of those amazing views.',
          email: 'dontforget@topopulate.com',
          createdBy: user
        },
        {
          title: 'Rustic Cabin in the Woods',
          image: 'https://coolstays.imgix.net/71112.jpg?&vib=11&high=0&shad=0&sat=0&exp=2&bri=0&con=15&sharp=0&fp-x=0.56&fp-y=0.47&fp-z=1.2&rot=0&h=700&fit=crop&auto=compress',
          price: 160,
          sleeps: 2,
          address: 'Fisherman\'s Hut, Twyford Lane, Haywards Heath',
          postcode: 'RH17 7DJ',
          description: 'An inspirational, handcrafted cabin, hidden off the beaten track. Gorgeous location on the edge of your own private lake. Sit on the deck with your morning coffee and bask in the wonders of nature. The cabin make use of solar power, wood burners and composting techniques making it fully eco friendly.',
          email: 'dontforget@topopulate.com',
          createdBy: user
        }
      ])
        .then(() => mongoose.connection.close())
        .catch(err => {
          console.log(err)
          mongoose.connection.close()
        })
    })
})
