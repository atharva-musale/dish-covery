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
    review: 'While the food was good but it is nothing out of the ordinary. The menu is constrained and the prices are a bit high, but the overall experience is respectable. It is adequate, but unremarkable.',
    imageUrl: 'assets/images/10.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/fnC6r3PUv8aMKPJH6'
  },
  {
    id: '11',
    rating: 8,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Punjabi Rasoi',
    review: 'It is one of the few places that has an extensive menu and authentic food. The food is well executed, authentic and decently price. Definitely worth a visit, more than ocne.',
    imageUrl: 'assets/images/11.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/sHypFwULzywcgqJx6'
  },
  {
    id: '12',
    rating: 7,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Puchkas',
    review: 'It has an extensive menu and the chaat items are done well. Found the place a bit unclean, but the food was tasty.',
    imageUrl: 'assets/images/12.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/P4nDTBUvrpNRJ86i6'
  },
  {
    id: '13',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kalinga spices',
    review: 'It was a small place on Sai baba temple road which served tasty food at inexpensive rates. The quality has decreased over the years, but still worth a visit.',
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
    review: 'It is a small place on Sarjapur road which has excellent aaloo tikki. Although the menu is limited, all items are well executed and taste great.',
    imageUrl: 'assets/images/15.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '16',
    rating: 8,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Khannas whitefield',
    review: 'It has a small menu, but the food is tasty. It seems relatively new and fancy when you visit, but the prices are decent and so the experience. Worth another visit.',
    imageUrl: 'assets/images/16.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '17',
    rating: 9,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Filter coffee',
    review: 'It is a relatively less talked about place but the food is finger licking good. The style of service and the entire experience is unique and memorable. Although the prices are a bit high, the quality of sambar and chutneys more than makes up for it.',
    imageUrl: 'assets/images/17.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '18',
    rating: 6,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Mysore cafe',
    review: 'The place was crowded which built up the expectation, however the food didn not live up to it. The food was okayish, it never stood out. The interior was good, there are good number of tables where one can enjoy their meal while standing and/or seating.',
    imageUrl: 'assets/images/18.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '19',
    rating: 7,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Namma madhurai',
    review: 'The sambar and other items are good but the dosa is terrible. If you are not going for a dosa then you will have a pleasent experience.',
    imageUrl: 'assets/images/19.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '20',
    rating: 7,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'CTR',
    review: 'It is a place which is always talked about when people search for best dosas in bangalore. It has limited options and is always crowded, but the benne dosa is great if you like thick crispy dosas. It is worth a visit.',
    imageUrl: 'assets/images/20.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '21',
    rating: 5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Antera',
    review: 'It is a place that serves Andhra food. The food is okay, but quite average. The location might help it get office customers and there is ample parking.',
    imageUrl: 'assets/images/21.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '22',
    rating: 6,
    restaurantType: [RestaurantType.Biriyani],
    restaurantName: 'Aromas',
    review: "It had great egg biryani and manchurian but the quality dropped over the years. With the decreasing quality there wasn't much to justify the high price.",
    imageUrl: 'assets/images/22.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '23',
    rating: 8,
    restaurantType: [RestaurantType.Biriyani],
    restaurantName: 'Meghna Foods',
    review: 'It is extremely popular for its biryani and it is worth the hype. Altough the rice and veggies / protein are cooked separately the food is tasty.',
    imageUrl: 'assets/images/23.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '24',
    rating: 7,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Imperio',
    review: 'It is a place that serves a variety of food but specializes in kerala food. The pepper mushroom biryani is great, rest is also good. The ambience is nice and the service is decent.',
    imageUrl: 'assets/images/24.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '25',
    rating: 7,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Imperial',
    review: 'It is a place that serves a variety of food but specializes in kerala food. The food is good. The ambience is nice and the service is decent.',
    imageUrl: 'assets/images/25.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '26',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Empire',
    review: 'It is a place that serves a variety of food but specializes in kerala food. The food is good. The ambience is nice and the service is decent.',
    imageUrl: 'assets/images/26.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '27',
    rating: 3,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Sri Laxmi Vaibhav',
    review: 'Although the place is highly rated, I did not have a good experience. The food was not good.',
    imageUrl: 'assets/images/27.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '28',
    rating: 7,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Puneri Katta',
    review: 'The place is quite average. Being a Maharashtrian, I have high standards for Maharashtrian food, and this place was kinda average. The place is small, but if you are in the area, it is worth a visit.',
    imageUrl: 'assets/images/28.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '29',
    rating: 7,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Muraamba',
    review: 'The first visit was dissappointing, but the second visit turned it around. The service is a bit slow, but the food was tasty second time around. Worth another visit.',
    imageUrl: 'assets/images/29.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '30',
    rating: 7,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Kothimbir',
    review: 'It is a very small place, but the location is great, so is the food. Their vadapav can be better, but after visitng other Maharashtrian restaurants, it feels a bit below the top tier. It is a bit better than average. Packaging price is a scam though.',
    imageUrl: 'assets/images/30.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '31',
    rating: 7,
    restaurantType: [RestaurantType.Pub],
    restaurantName: 'Longboat',
    review: 'Full points for the ambience and decor. But that is about where the good things stop. The food was decent, definitely not worth the price and the service was lacking. It took them so long to get the bill that I considered leaving without paying xD.',
    imageUrl: 'assets/images/31.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '32',
    rating: 7,
    restaurantType: [RestaurantType.Pub],
    restaurantName: 'Street 1522',
    review: 'Nice pub with lack of parking but great ambience. Went there for a quick bite, so detailed review will have to wait.',
    imageUrl: 'assets/images/32.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '33',
    rating: 5,
    restaurantType: [RestaurantType.Continental],
    restaurantName: 'Breads and banter',
    review: 'The place serves continental food, but my expectations were let down when half of the menu was not available and the available items were lackluster.',
    imageUrl: 'assets/images/33.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '34',
    rating: 7,
    restaurantType: [RestaurantType.Bakery],
    restaurantName: 'Glenz bakehouse',
    review: "It is a bakery famous for red velvet cupcakes, and trust me all the hype isn't for nothing. I have not tried other items so more detailed review later?",
    imageUrl: 'assets/images/34.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '35',
    rating: 3,
    restaurantType: [RestaurantType.FoodStreet],
    restaurantName: 'VV Puram Food street',
    review: 'Based on the amount of time it took to get to the place, the experience felt overrated. Some food was decent some was a bit underwhelming. It has some unique items, bit overall I would say it is not worth the visit if you live far away.',
    imageUrl: 'assets/images/35.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '36',
    rating: 8,
    restaurantName: 'Sri Vishnu Park',
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    review: 'I stopped next to this place because of rain and unknowingly I stumbled upon a great restaurant. It was cheap and served tasty food. Worth another visit.',
    imageUrl: 'assets/images/36.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/73kh81iXDKgzpMzQ8'
  },
  {
    id: '37',
    rating: 3,
    restaurantName: 'Mast Marathi',
    restaurantType: [RestaurantType.Maharashtrian],
    review: 'Things were sub standard. Other Maharashtrian restaurants in the list are better.',
    imageUrl: 'assets/images/37.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '38',
    rating: 8,
    restaurantName: 'Gavran Misal',
    restaurantType: [RestaurantType.Maharashtrian],
    review: 'The food reminds me of home. Although the vadapav could be better, the misal cooked on woodfire was very flavourful. It has a short menu but everything is well executed.',
    imageUrl: 'assets/images/38.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  }
]