import { RestaurantReviewData, RestaurantType } from "../../models";

export const reviewData: RestaurantReviewData[] = [
  {
    id: '1',
    rating: 9,
    restaurantType: [RestaurantType.Tibetan],
    restaurantName: 'Taste of Tibet',
    restaurantMapsLocation: 'https://g.co/kgs/iQVRupd',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNcJAx1-B1P8wmXqdvYfTGTbDlqF1Vmb-raHC3W=s1360-w1360-h1020-rw',
    review: 'Best place for noodles, laphing, manchurian, thupka and other Tibetan food.',
  },
  {
    id: '2',
    rating: 6,
    restaurantType: [RestaurantType.Chinese],
    restaurantName: 'Wanley',
    restaurantMapsLocation: 'https://g.co/kgs/BGcwpGq',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5d/3e/0b/entrance.jpg?w=1100&h=1100&s=1',
    review: 'Veg crispy was good, everything else was meh'
  },
  {
    id: '3',
    rating: 6,
    restaurantType: [RestaurantType.PanAsian],
    restaurantName: 'Cha cha cha',
    review: 'Chilli oil and noodles were good, rest meh',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrxZRYMBXp6erVOuIDifL3VNM4hI6X1zdNMRu2jMRQ1tB_TyazFkd7qOh9tRhFC_CTON6X_gXV5Jo9oGfOECdMoyR1ZgrVUE2zxy_8EFrWVkJxHFVZcejWmJ_HWKWZqTmkNM74ucQagNao=s680-w680-h510-rw',
    restaurantMapsLocation: 'https://g.co/kgs/fJXPPAk'
  },
  {
    id: '4',
    rating: 4,
    restaurantType: [RestaurantType.PanAsian],
    restaurantName: 'Iza Pan Asian Kitchen',
    review: 'All meh',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMYT6phEzoPkuyNVvfIPEc3pHpQZbLNy9_84_iI=w289-h312-n-k-no',
    restaurantMapsLocation: 'https://maps.app.goo.gl/oWR28BgBQioKFEs27'
  },
  {
    id: '5',
    rating: 7,
    restaurantType: [RestaurantType.Buramese],
    restaurantName: 'Burma burma',
    review: 'Lotus steam salad, peanut potato was good, rest was meh (samosa soup to try)',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOgCVc7whpj1SAsslXcLWjcvq5uOTjnik2_FBQs=s680-w680-h510-rw',
    restaurantMapsLocation: 'https://maps.app.goo.gl/VjHBr3b5tZSFB1DE9'
  },
  {
    id: '6',
    rating: 2,
    restaurantType: [RestaurantType.Korean],
    restaurantName: 'Himalayan Korean',
    review: 'Everything was bad, wanted to vomit',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nphfXSTWY12F44UtZcuzjLPvKUp95yfuPN7t68fpCCm6AdsieDuQXIyFiuRhiEFCKSBKi1G_uhEfW1umSCELKpN_1LRa9vLs-f93Y3BKqr1Lo2r4h-RJ7O5MoD3KRP3Tl_Ixd9R=s680-w680-h510-rw',
    restaurantMapsLocation: 'https://maps.app.goo.gl/DLAKS8e6dgF9AZtb8'
  },
  {
    id: '7',
    rating: 5,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kailash parbat',
    review: 'Fried rice was good, rest was forgettable',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npfTZeFbFzcXLRTkkCrpb_q9ZMjC8Yj3pjXHaGVchqM6q8vILPdjyTQnk1-Q7CXBPZNE9WJyVz4gedmFUYJp_HRizssYmAB1A7lrogXjuYZC6T2Rf3TyHUdxfzyimI948Fw0P8=s680-w680-h510-rw',
    restaurantMapsLocation: 'https://maps.app.goo.gl/DCgce5tpQLHUcx7r9'
  },
  {
    id: '8',
    rating: 5,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'North Rasoi Chef Pillai',
    review: 'Good but pricey',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npNLDq-JRWhlV3y231RNvlcea4ADlFhUfvsA4axLj9bOO7n_4tZxpkJ-flCpGRhQNcRGk9Dnb3q1b-9cN9aLYR_2ypvhPmox41eFTaxUbLPtZe1aPwYw-Tqs6bEXF79Q2BGtJ_Q=w289-h312-n-k-no',
    restaurantMapsLocation: 'https://maps.app.goo.gl/NuMt9BoyaxnCTecu5'
  },
  {
    id: '9',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kapoors cafe',
    review: 'Pricy and overrated',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrbyKN_yAgFTPaO_PsA9o-LUs1UzZ85zAmrnHyWDrYk3yryF3fMjvcinR2g7ObdN0wiHtbMpl7iInhH-5X3nieOD-b7QbtomjxfS1hBeR8TFGdd9Qq2T6GoQxq9AYllY52m8TL-=s680-w680-h510-rw',
    restaurantMapsLocation: 'https://maps.app.goo.gl/RkVcUdXDz8ty448a6'
  },
  {
    id: '10',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kapoors chaat',
    review: 'Good but forgettable',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq5fT_aiVM-FSpVNxWF0T-LrUpJ2z6fGJqBRus2qpZ8xRIrCtBLlUML-aE9Vxf3x6pa0cuh8UxxgRK1gVi2KqMzyifzk2xGOocZN4Y7v26EiC_ZwfY4OmsnbpClpKRB53t-uPf2ww=w426-h240-k-no',
    restaurantMapsLocation: 'https://maps.app.goo.gl/fnC6r3PUv8aMKPJH6'
  },
  {
    id: '11',
    rating: 8,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Punjabi Rasoi',
    review: 'Great, authentic taste',
    imageUrl: 'https://www.mappls.com/place/7XRSQP_1664602528169_0.jpeg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/sHypFwULzywcgqJx6'
  },
  {
    id: '12',
    rating: 7,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Puchkas',
    review: 'Good for snacks',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPU9L1fZ63dwxExDTFIIdxZBGz0qntrAK1RK_Nz=w408-h306-k-no',
    restaurantMapsLocation: 'https://maps.app.goo.gl/P4nDTBUvrpNRJ86i6'
  },
  {
    id: '13',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Kalinga spices',
    review: 'Was good before, now not so much',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqkX9o2KwdWt0b4CUqJ0a5f1I5Wl1JuNhGZC8YO-1n1snmnWrBD__X72pNJ4YYJzn7lvhSMp_0Mgpz_96MEskvV9Mb4iDc5lgT5sqfnJlzvBvLMVAhMsJZzPc65vVryC7U9cY59=s1360-w1360-h1020-rw',
    restaurantMapsLocation: 'https://maps.app.goo.gl/ynGk581B8C4NS5M78'
  },
  {
    id: '14',
    rating: 9,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Mayura sagar',
    review: 'OG aaloo jeera + random gravy + south indian',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '15',
    rating: 9,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Mathuradas',
    review: 'Aaloo tikki chaat OG, rest is also good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '16',
    rating: 8,
    restaurantType: [RestaurantType.NorthIndian],
    restaurantName: 'Khannas whitefield',
    review: 'Good with reasonable price',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '17',
    rating: 9,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Filter coffee',
    review: 'OG sambar',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '18',
    rating: 6,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Mysore cafe',
    review: 'Average',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '19',
    rating: 6.5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Namma madhurai',
    review: 'Dosa was shit, rest is good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '20',
    rating: 7,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Andhra meals opp ofc',
    review: 'Cheap and good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '21',
    rating: 6.5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'CTR',
    review: 'Good, must try once',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '22',
    rating: 5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Antera',
    review: 'Meh',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '23',
    rating: 6,
    restaurantType: [RestaurantType.Biriyani],
    restaurantName: 'Aromas',
    review: 'Egg biryani and manchurian was good, quality dropped over time',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '24',
    rating: 8,
    restaurantType: [RestaurantType.Biriyani],
    restaurantName: 'Meghna',
    review: 'Good for biryani',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '25',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Imperio',
    review: 'Mushroom biryani OG, rest is also good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '26',
    rating: 7,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Imperial',
    review: 'Good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '27',
    rating: 6,
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    restaurantName: 'Empire',
    review: 'Good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '28',
    rating: 3,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Sri Laxmi Vaibhav',
    review: 'Bad',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '29',
    rating: 5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Udupi (sai baba)',
    review: 'Average',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '30',
    rating: 5,
    restaurantType: [RestaurantType.SouthIndian],
    restaurantName: 'Udupi (spice garden)',
    review: 'Average',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '31',
    rating: 8,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Puneri Katta',
    review: 'Good overall',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '32',
    rating: 6,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Muraamba',
    review: 'Average at best',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '33',
    rating: 9,
    restaurantType: [RestaurantType.Maharashtrian],
    restaurantName: 'Kothimbir',
    review: 'Location is great, so is the food, vadapav can be better',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '34',
    rating: 7,
    restaurantType: [RestaurantType.Pub],
    restaurantName: 'Longboat',
    review: 'Good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '35',
    rating: 7,
    restaurantType: [RestaurantType.Pub],
    restaurantName: 'Street 1522',
    review: 'Good',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '36',
    rating: 5,
    restaurantType: [RestaurantType.Continental],
    restaurantName: 'Breads and banter',
    review: 'Overrated',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '37',
    rating: 7,
    restaurantType: [RestaurantType.Bakery],
    restaurantName: 'Glenz bakehouse',
    review: 'OG red velvet',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '38',
    rating: 3,
    restaurantType: [RestaurantType.FoodStreet],
    restaurantName: 'VV Puram',
    review: 'Overrated, not worth the travel time',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '39',
    rating: 9,
    restaurantName: 'Sri Vishnu Park',
    restaurantType: [RestaurantType.NorthIndian, RestaurantType.SouthIndian, RestaurantType.Chinese],
    review: 'Everything was great',
    imageUrl: 'https://content.jdmagicbox.com/v2/comp/bangalore/r1/080pxx80.xx80.230610122750.a5r1/catalogue/vishnu-park-shanthinagar-bangalore-banquet-halls-mmeurs0erg.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/73kh81iXDKgzpMzQ8'
  },
  {
    id: '40',
    rating: 3,
    restaurantName: 'Mast Marathi',
    restaurantType: [RestaurantType.Maharashtrian],
    review: 'Things were sub standard',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  },
  {
    id: '41',
    rating: 8,
    restaurantName: 'Gavran Misal',
    restaurantType: [RestaurantType.Maharashtrian],
    review: 'Best misal in Bangalore?',
    imageUrl: 'https://previews.123rf.com/images/anatolir/anatolir2201/anatolir220107845/180725686-restaurant-icon-simple-vector-food-cafe.jpg',
    restaurantMapsLocation: 'https://maps.app.goo.gl/cpuvUae89R1cBkRf9'
  }
]