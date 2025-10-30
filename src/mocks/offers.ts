import { TypeOffer } from '../types/offer';

export const offers: TypeOffer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    rating: 4.0,
    isPremium: true,
    isFavorite: false,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels',
      'Baby seat',
      'Cabel TV'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    reviews: [
      {
        id: '1',
        user: {
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        rating: 4.8,
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: '2019-04-24'
      }
    ]
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 4.0,
    isPremium: false,
    isFavorite: true,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 12
      }
    },
    location: {
      latitude: 48.86261,
      longitude: 2.352499,
      zoom: 12
    },
    reviews: [
      {
        id: '2',
        user: {
          name: 'Alex',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true
        },
        rating: 4.5,
        comment: 'Great location and comfortable room. Would definitely stay again!',
        date: '2020-02-15'
      },
      {
        id: '3',
        user: {
          name: 'Sophie',
          avatarUrl: 'img/avatar-angelina.jpg',
          isPro: false
        },
        rating: 5.0,
        comment: 'Amazing place with a wonderful view of the city. The host was very helpful.',
        date: '2020-03-10'
      }
    ]
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 4.0,
    isPremium: false,
    isFavorite: false,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    maxAdults: 3,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels'
    ],
    host: {
      name: 'Michael',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.93753,
        longitude: 6.96028,
        zoom: 12
      }
    },
    location: {
      latitude: 50.94753,
      longitude: 6.97028,
      zoom: 12
    },
    reviews: [
      {
        id: '4',
        user: {
          name: 'Lisa',
          avatarUrl: 'img/avatar-angelina.jpg',
          isPro: true
        },
        rating: 4.2,
        comment: 'Nice apartment with a beautiful canal view. Close to all amenities.',
        date: '2020-05-20'
      },
      {
        id: '5',
        user: {
          name: 'Thomas',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        rating: 3.8,
        comment: 'Good value for money but the apartment could be cleaner.',
        date: '2020-06-05'
      },
      {
        id: '6',
        user: {
          name: 'Emma',
          avatarUrl: 'img/avatar-angelina.jpg',
          isPro: false
        },
        rating: 4.7,
        comment: 'Loved our stay here! The location is perfect for exploring the city.',
        date: '2020-07-12'
      }
    ]
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5.0,
    isPremium: true,
    isFavorite: false,
    images: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    maxAdults: 5,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels',
      'Baby seat',
      'Cabel TV',
      'Balcony'
    ],
    host: {
      name: 'Sarah',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 12
      }
    },
    location: {
      latitude: 50.86045,
      longitude: 4.35878,
      zoom: 12
    },
    reviews: [
      {
        id: '7',
        user: {
          name: 'David',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        rating: 4.9,
        comment: 'Absolutely fantastic apartment! The bed was incredibly comfortable and the view was stunning.',
        date: '2020-08-22'
      },
      {
        id: '8',
        user: {
          name: 'Maria',
          avatarUrl: 'img/avatar-angelina.jpg',
          isPro: true
        },
        rating: 5.0,
        comment: 'Perfect stay for our family vacation. The apartment had everything we needed.',
        date: '2020-09-05'
      },
      {
        id: '9',
        user: {
          name: 'John',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        rating: 4.6,
        comment: 'Great apartment with plenty of space. Would recommend to friends and family.',
        date: '2020-10-15'
      },
      {
        id: '10',
        user: {
          name: 'Anna',
          avatarUrl: 'img/avatar-angelina.jpg',
          isPro: false
        },
        rating: 4.8,
        comment: 'Beautiful apartment in a great location. The host was very responsive and helpful.',
        date: '2020-11-01'
      }
    ]
  }
];
