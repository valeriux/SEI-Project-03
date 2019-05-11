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
          address: '2 Fletching Lane, Uckfield, East Sussex TN22 3SS' , // REVISIT POTENTIALLY FOR POSTCODE
          description: 'The Haven Pod is a new and unique place to stay. Floating peacefully on the water, the eco-friendly Haven Pod takes "waterfront views" to a new level.',
          email: 'nicebackend@aiman.co.uk',
          createdBy: user
        },
        {
          title: 'Lodge on the lake',
          image: 'https://a0.muscache.com/im/pictures/4901a149-7687-4475-8816-ec1f70a3ea1b.jpg?aki_policy=xx_large',
          price: 120,
          sleeps: 2,
          address: '405 S Coast Rd, Telscombe Cliffs, Peacehaven BN10 7AD' , // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Wake up to panoramic views overlooking the lake, enjoy some breakfast on the decking watching the feeding fish or letting the world go by before setting about your day, its the perfect spot for fishing, walking, cycling, sightseeing or shopping!',
          email: 'valeria@ga.co.uk'
        },
        {
          title: 'Luxury Cabin',
          image: 'https://a0.muscache.com/im/pictures/dd496910-a0bd-4dc6-a82c-c1650d9a2430.jpg?aki_policy=xx_large',
          price: 180,
          sleeps: 2,
          address: '14 Cavendish Lane, Eastbourne, BN21 3RR' , // REVISIT POTENTIALLY FOR POSTCODE
          description: 'A cosy, airy space - complete with wood-burning stove, pizza oven and fully-equipped kitchen - with great views over National Trust land. The Hut is perfect for those wanting to escape the big smoke, to chill in front of the fire, swim at secluded beaches or get to know this wilder patch of the English countryside and coastline.',
          email: 'charlotte@ga.co.uk',
          createdBy: user
        },
        {
          title: 'Cliff Top Cabin',
          image: 'https://coolstays.imgix.net/18433.jpg?&h=700&fit=crop&auto=compress',
          price: 200,
          sleeps: 2,
          address: 'The Dell, Sandy Cliff Drive, BN10 7HX' , // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Stylish and chic coastal chalet perfect for romantic getaways. Beautiful sea views to be enjoyed from every room as well as from an impressive decked area. Luxuriously furnished, The Dell is idyllic both inside and out',
          email: 'tormund@giantbitty.co.uk',
          createdBy: user
        //https://coolstays.imgix.net/18438.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/18373.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/18375.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/18443.jpg?&h=700&fit=crop&auto=compress
        },
        {
          title: 'Harbour-side Hut',
          image: 'https://coolstays.imgix.net/47187.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 4,
          address: 'Harbour Beach Hut 1, Harbourside, BN10 7HX' , // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Beautifully appointed and five star standard throughout, this hut will sleep four with the use of a double sofa bed. Fantastic location on the waterfront with a delightful view over the River. Amazing dining in this food lover\'s paradise.',
          email: 'chesneyhawkes@oneandonly.co.uk',
          createdBy: user
        // https://www.coolstays.com/property/shaldon-beach-huts/16649# , https://coolstays.imgix.net/35186.jpg?&vib=0&high=0&shad=31&sat=17&exp=2&bri=0&con=21&sharp=8&fp-x=0.64&fp-y=0.47&fp-z=1&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/2183.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/2180.jpg?&h=700&fit=crop&auto=compress
        },
        {
          title: 'Beach Hut Living',
          image: 'https://coolstays.imgix.net/47282.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 4,
          address: 'Climping Beach Hut 1, Climping, BN17 5DL' , // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Beautifully appointed and five star standard throughout, this hut will sleep four with the use of a double sofa bed. Fantastic location on the waterfront with a delightful view over the River. Amazing dining in this food lover\'s paradise.',
          email: 'chesneyhawkes@oneandonly.co.uk',
          createdBy: user
        // https://coolstays.imgix.net/47301.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/47314.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/47303.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/47299.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/47278.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/47686.jpg?&h=700&fit=crop&auto=compress ,
        },
        {
          title: 'La Vida Lake-side',
          image: 'https://coolstays.imgix.net/73434.jpg?&h=700&fit=crop&auto=compress',
          price: 220,
          sleeps: 5,
          address: '26 Anderby Creek, Brightwell, BN21 3LX', // REVISIT POTENTIALLY FOR POSTCODE
          description: 'A tranquil lakeside cabin, just moments from the unspoilt golden sands of the Sussex coast. Stylishly revived, the cabin has a sophisticated and stylish edge with a subtle coastal feel and is suitabale for couples and families alike.',
          email: 'rickymartin@howdidntyouknow.com',
          createdBy: user
        // https://coolstays.imgix.net/29462.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/28977.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/28976.jpg?&vib=19&high=0&shad=46&sat=0&exp=2&bri=0&con=3&sharp=0&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/29460.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/73433.jpg?&h=700&fit=crop&auto=compress
        },
        {
          title: 'Luxury Cabin with Hot Tub',
          image: 'https://coolstays.imgix.net/78595.jpg?&h=700&fit=crop&auto=compress',
          price: 180,
          sleeps: 3,
          address: '3 Sauchope Lane, Seaside, TN40 1LS', // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Escape the hustle and bustle and relax with panormic views. Open plan living areas complete with wood burning stoves, for cosy nights in.Double bedroom with en-suite bathroom has a stylish decor and super-comfy beds',
          email: 'jonsnow@hotaunties.com',
          createdBy: user
        // https://coolstays.imgix.net/78591.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/78582.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/78592.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/78613.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/78593.jpg?&h=700&fit=crop&auto=compress
        },
        {
          title: 'Vistas of Tranquility',
          image: 'https://coolstays.imgix.net/80708.jpg?&vib=12&high=0&shad=0&sat=0&exp=0&bri=0&con=0&sharp=0&fp-x=0.49&fp-y=0.56&fp-z=1&rot=0&h=700&fit=crop&auto=compress',
          price: 180,
          sleeps: 3,
          address: '1 Clifftops Drive, Skyeville, TN35 4EE', // REVISIT POTENTIALLY FOR POSTCODE
          description: 'A delightfully remote escape  with breath-taking coastal views. Enjoy luxury all year around in a peaceful location with no disturbances',
          email: 'aimandidit@noididnt.com',
          createdBy: user
        // https://coolstays.imgix.net/67452.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/67266.jpg?&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/67455.jpg?&vib=19&high=0&shad=0&sat=0&exp=0&bri=0&con=0&sharp=0&fp-x=0.5&fp-y=0.5&fp-z=1&rot=0&h=700&fit=crop&auto=compress , https://coolstays.imgix.net/80706.jpg?&vib=14&high=0&shad=0&sat=0&exp=0&bri=0&con=0&sharp=0&fp-x=0.5&fp-y=0.5&fp-z=1&rot=0&h=700&fit=crop&auto=compress, https://coolstays.imgix.net/67455.jpg?&vib=19&high=0&shad=0&sat=0&exp=0&bri=0&con=0&sharp=0&fp-x=0.5&fp-y=0.5&fp-z=1&rot=0&h=700&fit=crop&auto=compress
        },
        {
          title: 'Hobbit Cabin On The Lake',
          image: 'https://gwaliafarm.co.uk/wp-content/uploads/2014/05/P1060389.jpg',
          price: 180,
          sleeps: 3,
          address: '10 Swimmers Lane, Arundel, BN18 9AU', // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Explore woodlands and freshwater swimming from this sustainable wood cabin. Fully equipped to cater for all your needs you can escape to tranquility while still having small town amenities and great pubs within a ten minute walk',
          email: 'oggyoggyoggy@oioioi.com',
          createdBy: user
        // https://gwaliafarm.co.uk/wp-content/uploads/2014/05/P1060437.jpg , https://gwaliafarm.co.uk/wp-content/uploads/2014/04/cabin-at-night.jpg , https://gwaliafarm.co.uk/wp-content/uploads/2014/04/lanterns2.jpg , https://gwaliafarm.co.uk/wp-content/uploads/2014/04/kettle.jpg , https://gwaliafarm.co.uk/wp-content/uploads/2014/04/wellies2.jpg , https://gwaliafarm.co.uk/wp-content/uploads/2014/04/spring-water.jpg ,
        },
        {
          title: 'Lakeside Retreat',
          image: 'https://www.somerleyton.co.uk/wp-content/uploads/2017/08/Fritton-Hall-Retreats003.jpg',
          price: 210,
          sleeps: 3,
          address: '7 Windmill Hill Bottom Lane, Herstmonceux, BN27 4RS', // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Stylish log cabin within the ground of a great English country house. Enjoy cosy nights in with the log burner and fresh morning swims. Enjoy the magnificent flowering rhododendrons and specimen trees of the Hall\'s garden, but also some open glades.',
          email: 'ifyouhaveanid@inyourdatabase.com',
          createdBy: user
        // https://www.somerleyton.co.uk/wp-content/uploads/2017/07/TheShed_Somerleyton_08-.jpg , https://www.somerleyton.co.uk/wp-content/uploads/2017/07/fritton-169-hot-tub-hillwood.jpg , https://www.somerleyton.co.uk/wp-content/uploads/2017/07/fritton-111-swan.jpg , https://www.somerleyton.co.uk/wp-content/uploads/2017/07/fritton-30-lodgeinterior.jpg , https://www.somerleyton.co.uk/wp-content/uploads/2017/08/Cottages-Living-thumb.jpg , https://www.somerleyton.co.uk/wp-content/uploads/2017/07/TheShed_Somerleyton_07-.jpg
        },
        {
          title: 'Woods and Water',
          image: 'https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Lakeside-log-cabin.jpg',
          price: 210,
          sleeps: 4,
          address: '20 Bewlbridge Lane, Bewl, TN3 8JH', // REVISIT POTENTIALLY FOR POSTCODE
          description: 'Your retreat boasts a cosy open plan living area, wood burning stove and  incredible views from every part of the house. Opening out from the glass doors in the kitchen, you will have your own private veranda which steps down to its own jetty. The decking is an ideal place to wine and dine and to your pier, you\'ll find a private curved beach. Island Lodge also comes with a Finnish hot tub.',
          email: 'valeriano@moredogsjustno.com',
          createdBy: user
        // https://loghouseholidays.co.uk/wp-content/uploads/2018/12/Island-Lodge-Pier.jpg , https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Island-Lodge-14.jpg , https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Island-Lodge-16.jpg , https://loghouseholidays.co.uk/wp-content/uploads/2018/12/Island-Lodge-Hot-Tub.jpg , https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Island-Lodge-9.jpg , https://loghouseholidays.co.uk/wp-content/uploads/2018/11/Island-Lodge-9.jpg
        },
        {
          title: 'Beautiful Beach Hut',
          image: 'https://i1.wp.com/www.director.co.uk/wp-content/uploads/2016/11/dog-friendly-cary-arms-beach-huts.jpg?fit=1000%2C500&ssl=1',
          price: 210,
          sleeps: 3,
          address: '12 Eastbourne Lane, Pevensey Bay, Pevensey BN24 6HS', // REVISIT POTENTIALLY FOR POSTCODE
          description: 'add in .',
          email: 'dontforget@topopulate.com',
          createdBy: user
        // https://www.countryandtownhouse.co.uk/wp-content/uploads/2016/05/7H0A96531.jpg , https://www.boutiquehotelier.com/wp-content/uploads/2016/04/097-15-Cary-Arms-Beach-huts-Scene-6.jpg , https://www.caryarms.co.uk/uploads/RoomImage/p1aqec92g71dhr1cfm1hcgivf1gdo9-8.jpg , https://milliespetservices.co.uk/wp-content/uploads/2016/08/116.jpg , https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjg3p-X7pPiAhUrxYUKHT9oC0MQjRx6BAgBEAU&url=https%3A%2F%2Fwww.girlgetswed.co.uk%2F2019%2F03%2Fluxury-beach-hut-minimoon-beautiful-english-riviera%2F&psig=AOvVaw2YLulF5PbCxU4BFuugW1vh&ust=1557676949855487 , https://coolstays.imgix.net/77414.jpg?&w=1200&h=665&fit=crop&q=70
        }
      ])
        .then(() => mongoose.connection.close())
        .catch(err => {
          console.log(err)
          mongoose.connection.close()
        })
    })
})
