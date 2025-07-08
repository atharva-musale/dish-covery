import { RestaurantReviewData, RestaurantType } from "../../models";

export const reviewData: RestaurantReviewData[] = [
  {
    id: '1',
    rating: 9,
    restaurantType: [RestaurantType.Tibetan],
    restaurantName: 'Taste of Tibet',
    restaurantMapsLocation: 'https://g.co/kgs/iQVRupd',
    imageUrl: 'assets/images/1.jpeg',
    review: 'Tucked away inside a shopping center on Brigade Road, this unassuming eatery serves some of the most authentic Tibetan cuisine in Bangalore—highlighted by standout dishes like laphing, thukpa, and noodles, all at impressively reasonable prices.',
  },
  {
    id: '2',
    rating: 6,
    restaurantType: [RestaurantType.Chinese],
    restaurantName: 'Wanley',
    restaurantMapsLocation: 'https://g.co/kgs/BGcwpGq',
    imageUrl: 'assets/images/2.jpeg',
    review: 'The veg crispy stood out with its flavor and texture, while the rest of the dishes were fairly average. The use of thin noodles adds a distinct touch, though it may not appeal to all palates.'
  },
  {
    id: '3',
    rating: 6,
    restaurantType: [RestaurantType.PanAsian],
    restaurantName: 'Cha cha cha',
    review: 'The accompaniments like chilli oil and noodles were good, rest was average. The ambience is nice and since its is located in Pheonix marketcity, it is a good place to try when in the mall.',
    imageUrl: 'assets/images/3.jpeg',
    restaurantMapsLocation: 'https://g.co/kgs/fJXPPAk'
  },
  {
    id: '4',
    rating: 4,
    restaurantType: [RestaurantType.PanAsian],
    restaurantName: 'Iza Pan Asian Kitchen',
    review: 'Everything was average, except the ambience which was good. The food is nothing to write home about, the quality did not match the price.',
    imageUrl: 'assets/images/4.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/oWR28BgBQioKFEs27'
  },
  {
    id: '5',
    rating: 7,
    restaurantType: [RestaurantType.Buramese],
    restaurantName: 'Burma burma',
    review: 'It is a pure veg place and one of my first Pan Asian restaurants which I enjoyed. Their lotus steam salad, peanut potato was good, rest was okay (samosa soup to try next time). The ambience is nice and the service is good. It is a bit pricey but worth it.',
    imageUrl: 'assets/images/5.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/VjHBr3b5tZSFB1DE9'
  },
  {
    id: '6',
    rating: 2,
    restaurantType: [RestaurantType.Korean],
    restaurantName: 'Himalayan Korean',
    review: 'I did not have a pleasant experience here. The food was not good, the service was fine and so was the ambience. Not being a fan of Korean food, it might be my bias speaking, but I would not visit it again.',
    imageUrl: 'assets/images/6.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/DLAKS8e6dgF9AZtb8'
  },
  {
    id: '7',
    rating: 5,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kailash parbat',
    review: 'The fried rice was well-executed and flavorful, standing out in an otherwise unremarkable selection of dishes. It is a bit pricey, with a bit above average quality. The ambience is nice and the service is decent.',
    imageUrl: 'assets/images/7.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/DCgce5tpQLHUcx7r9'
  },
  {
    id: '8',
    rating: 5,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'North Rasoi Chef Pillai',
    review: 'The food is good but pricey with a limited menu. The ambience is nice and the service is decent. It feels like a place that is trying to be fancy but does not quite hit the mark. The food is good but not worth the price.',
    imageUrl: 'assets/images/8.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/NuMt9BoyaxnCTecu5'
  },
  {
    id: '9',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kapoors cafe',
    review: 'While the parathas and chole are commendable, the overall experience falls short of expectations—the pricing feels steep, and the poorly ventilated space becomes uncomfortably warm during summer months.',
    imageUrl: 'assets/images/9.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/RkVcUdXDz8ty448a6'
  },
  {
    id: '10',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kapoors chaat',
    review: 'Good but forgettable',
    imageUrl: 'assets/images/10.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/fnC6r3PUv8aMKPJH6'
  },
  {
    id: '11',
    rating: 8,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Punjabi Rasoi',
    review: 'Great, authentic taste',
    imageUrl: 'assets/images/11.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/sHypFwULzywcgqJx6'
  },
  {
    id: '12',
    rating: 7,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Puchkas',
    review: 'Good for snacks',
    imageUrl: 'assets/images/12.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/P4nDTBUvrpNRJ86i6'
  },
  {
    id: '13',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kalinga spices',
    review: 'Was good before, now not so much',
    imageUrl: 'assets/images/13.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/ynGk581B8C4NS5M78'
  },
  {
    id: '14',
    rating: 9,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Mayura sagar',
    review: 'It is a small place next to Rameshwaram cafe. Being next to such a famous place people would assume it would not be as busy, but try finding a place here in peak hours. It has great aaloo jeera, any random gravy and good south indian food at affordable prices.',
    imageUrl: 'assets/images/14.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/y99m8Yi6muo6t11U9'
  },
  {
    id: '15',
    rating: 9,
    restaurantType: [RestaurantType.Chaat],
    restaurantName: 'Mathuradas',
    review: 'Aaloo tikki chaat OG, rest is also good',
    imageUrl: 'assets/images/15.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '16',
    rating: 8,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Khannas whitefield',
    review: 'Good with reasonable price',
    imageUrl: 'assets/images/16.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '17',
    rating: 9,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Filter coffee',
    review: 'OG sambar',
    imageUrl: 'assets/images/17.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '18',
    rating: 6,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Mysore cafe',
    review: 'Average',
    imageUrl: 'assets/images/18.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '19',
    rating: 6.5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Namma madhurai',
    review: 'Dosa was shit, rest is good',
    imageUrl: 'assets/images/19.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '20',
    rating: 6.5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'CTR',
    review: 'Good, must try once',
    imageUrl: 'assets/images/20.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '21',
    rating: 5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Antera',
    review: 'Meh',
    imageUrl: 'assets/images/21.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '22',
    rating: 6,
    restaurantType: [RestaurantType.Biriyani],
    restaurantName: 'Aromas',
    review: 'Egg biryani and manchurian was good, quality dropped over time',
    imageUrl: 'assets/images/22.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '23',
    rating: 8,
    restaurantType: [RestaurantType.Biriyani],
    restaurantName: 'Meghna',
    review: 'Good for biryani',
    imageUrl: 'assets/images/23.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '24',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Imperio',
    review: 'Mushroom biryani OG, rest is also good',
    imageUrl: 'assets/images/24.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '25',
    rating: 7,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Imperial',
    review: 'Good',
    imageUrl: 'assets/images/25.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '26',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Empire',
    review: 'Good',
    imageUrl: 'assets/images/26.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '27',
    rating: 3,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Sri Laxmi Vaibhav',
    review: 'Bad',
    imageUrl: 'assets/images/27.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '28',
    rating: 8,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Puneri Katta',
    review: 'Good overall',
    imageUrl: 'assets/images/28.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '29',
    rating: 6,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Muraamba',
    review: 'Average at best',
    imageUrl: 'assets/images/29.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '30',
    rating: 9,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Kothimbir',
    review: 'Location is great, so is the food, vadapav can be better',
    imageUrl: 'assets/images/30.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '31',
    rating: 7,
    restaurantType: [RestaurantType.Pub],
    restaurantName: 'Longboat',
    review: 'Good',
    imageUrl: 'assets/images/31.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '32',
    rating: 7,
    restaurantType: [RestaurantType.Pub],
    restaurantName: 'Street 1522',
    review: 'Good',
    imageUrl: 'assets/images/32.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '33',
    rating: 5,
    restaurantType: [RestaurantType.Continental],
    restaurantName: 'Breads and banter',
    review: 'Overrated',
    imageUrl: 'assets/images/33.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '34',
    rating: 7,
    restaurantType: [RestaurantType.Bakery],
    restaurantName: 'Glenz bakehouse',
    review: 'OG red velvet',
    imageUrl: 'assets/images/34.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '35',
    rating: 3,
    restaurantType: [RestaurantType.FoodStreet],
    restaurantName: 'VV Puram',
    review: 'Overrated, not worth the travel time',
    imageUrl: 'assets/images/35.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '36',
    rating: 9,
    restaurantName: 'Sri Vishnu Park',
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    review: 'Everything was great',
    imageUrl: 'assets/images/36.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/73kh81iXDKgzpMzQ8'
  },
  {
    id: '37',
    rating: 3,
    restaurantName: 'Mast Marathi',
    restaurantType: [RestaurantType.Maharashtrian],
    review: 'Things were sub standard',
    imageUrl: 'assets/images/37.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '38',
    rating: 8,
    restaurantName: 'Gavran Misal',
    restaurantType: [RestaurantType.Maharashtrian],
    review: 'Best misal in Bangalore?',
    imageUrl: 'assets/images/38.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  }
]