const UPDATED = "06.08.2026, 14:05 (MST даты проверены вживую в браузере)";
const DATA = [
  // --- подтверждено вживую: 2 спальни + 2 полных санузла ---
  {
    name: "Pecan Lane Ranch House", platform: "Airbnb", region: "Camp Verde", driveMin: 15,
    priceTotal: 3090, perNight: 163, bedrooms: 2, bathrooms: 2, rating: 4.91, reviews: 187,
    verified: true, match: "full", isHouse: true,
    note: "2 короля, 2 полных санузла, на реке Verde. Лучшее сочетание цены и рейтинга.",
    url: "https://www.airbnb.com/rooms/28390248?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "Clean Historic Bungalow, Vineyards", platform: "Airbnb", region: "Cornville", driveMin: 22,
    priceTotal: 3997, perNight: 210, bedrooms: 2, bathrooms: 2, rating: 4.99, reviews: 243,
    verified: true, match: "full", isHouse: true,
    note: "2 полных санузла подтверждены, тихий район среди виноградников.",
    url: "https://www.airbnb.com/rooms/48374874?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "1926 Historic Dude Ranch Stone Lodge", platform: "Airbnb", region: "Rimrock", driveMin: 5,
    priceTotal: 4724, perNight: 249, bedrooms: 2, bathrooms: 2, rating: 4.98, reviews: 213,
    verified: true, match: "full", isHouse: true,
    note: "Прямо в Rimrock, лучший рейтинг в подборке. Дороже остальных подтверждённых.",
    url: "https://www.airbnb.com/rooms/39396997?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  // --- подтверждено вживую: 2 спальни, но только 1 санузел ---
  {
    name: "Delightful 2 Bedroom Little Red Barn", platform: "Airbnb", region: "Camp Verde", driveMin: 15,
    priceTotal: 2494, perNight: 131, bedrooms: 2, bathrooms: 1, rating: 4.88, reviews: 166,
    verified: true, match: "partial", isHouse: true,
    note: "Самый дешёвый подтверждённый вариант. 2 спальни + диван-кровать в гостиной, но 1 санузел.",
    url: "https://www.airbnb.com/rooms/724703425792013726?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "Close to Sedona — cozy 2 Queen (Guest suite)", platform: "Airbnb", region: "Camp Verde", driveMin: 15,
    priceTotal: 2797, perNight: 147, bedrooms: 2, bathrooms: 1, rating: 4.97, reviews: 58,
    verified: true, match: "partial", isHouse: false,
    note: "Не отдельный дом — целиком приватный гостевой сьют при доме хозяина. 1 санузел.",
    url: "https://www.airbnb.com/rooms/54215266?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "Peaceful Historic Cabin", platform: "Airbnb", region: "Camp Verde", driveMin: 15,
    priceTotal: 3309, perNight: 174, bedrooms: 2, bathrooms: 1, rating: 4.99, reviews: 356,
    verified: true, match: "partial", isHouse: true,
    note: "Самый большой и стабильный рейтинг во всей подборке (356 отзывов). 1 санузел.",
    url: "https://www.airbnb.com/rooms/562556179084113049?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "Old Town Cottonwood Cottage w/ Yard", platform: "Booking.com", region: "Cottonwood", driveMin: 22,
    priceTotal: 3715, perNight: 196, bedrooms: 2, bathrooms: 1, rating: 10.0, reviews: 12,
    verified: true, match: "partial", isHouse: true,
    note: "Единственный вариант на Booking.com с реально 2 спальнями (не студия). 1 санузел.",
    url: "https://www.booking.com/hotel/us/old-town-cottonwood-cottage-with-mod-interior.html?aid=8132308&checkin=2026-09-26&checkout=2026-10-15&no_rooms=1&group_adults=2&selected_currency=USD"
  },
  {
    name: "La Casa De Camilla", platform: "Booking.com", region: "Sedona (Village of Oak Creek)", driveMin: 25,
    priceTotal: 4227, perNight: 222, bedrooms: 2, bathrooms: 1, rating: null, reviews: 0,
    verified: true, match: "partial", isHouse: true,
    note: "2 queen + диван-кровать в гостиной, 1 санузел, без отзывов.",
    url: "https://www.booking.com/hotel/us/la-casa-de-camilla.html?aid=8132308&checkin=2026-09-26&checkout=2026-10-15&no_rooms=1&group_adults=2&selected_currency=USD"
  },
  // --- подтверждено вживую: НЕ подходит (студия / 1 спальня + диван) ---
  {
    name: "6 Mi to Old Town — Cottonwood Gem!", platform: "Booking.com", region: "Cottonwood", driveMin: 22,
    priceTotal: 2555, perNight: 134, bedrooms: 1, bathrooms: 1, rating: 9.8, reviews: 13,
    verified: true, match: "no", isHouse: true,
    note: "На деле 1 спальня (queen) + диван-кровать в гостиной, 33 м². Это тот вариант, который выглядел лучшим по цене, но не подходит по спальням.",
    url: "https://www.booking.com/hotel/us/cozy-cottonwood-gem-patio-and-180-degree-views.html?aid=8132308&checkin=2026-09-26&checkout=2026-10-15&no_rooms=1&group_adults=2&selected_currency=USD"
  },
  {
    name: "Pool Access & Private Deck: Condo", platform: "Booking.com", region: "Sedona (Village of Oak Creek)", driveMin: 25,
    priceTotal: 2410, perNight: 127, bedrooms: 1, bathrooms: 1, rating: 7.3, reviews: 16,
    verified: true, match: "no", isHouse: true,
    note: "1 спальня + диван-кровать в гостиной, 60 м².",
    url: "https://www.booking.com/hotel/us/condo-comfort-in-sedona-w-pool-grill-access.html?aid=8132308&checkin=2026-09-26&checkout=2026-10-15&no_rooms=1&group_adults=2&selected_currency=USD"
  },
  {
    name: "Relaxing Sedona Retreat", platform: "Booking.com", region: "Sedona (Village of Oak Creek)", driveMin: 25,
    priceTotal: 5103, perNight: 269, bedrooms: 0, bathrooms: 1, rating: 9.1, reviews: 12,
    verified: true, match: "no", isHouse: true,
    note: "Это студия открытой планировки (3 queen-кровати в одном пространстве), а не 2 спальни.",
    url: "https://www.booking.com/hotel/us/relaxing-sedona-retreat-walk-to-shops-trails.html?aid=8132308&checkin=2026-09-26&checkout=2026-10-15&no_rooms=1&group_adults=2&selected_currency=USD"
  },
  // --- НЕ проверено вживую — только из поиска, спальни/санузлы и наличие не подтверждены ---
  {
    name: "Unique 1960s Remodeled A-frame", platform: "Airbnb", region: "Lake Montezuma", driveMin: 8,
    priceTotal: 3206, perNight: 169, bedrooms: 2, bathrooms: 2, rating: null, reviews: 0,
    verified: false, match: "unverified", isHouse: true,
    note: "Из поиска, страницу не открывал(а). Без отзывов — дополнительный риск.",
    url: "https://www.airbnb.com/rooms/50295876?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "NEW! Cochise Hideaway", platform: "Airbnb", region: "Sedona", driveMin: 30,
    priceTotal: 3966, perNight: 209, bedrooms: 2, bathrooms: 2, rating: 4.92, reviews: 13,
    verified: false, match: "unverified", isHouse: true,
    note: "Из поиска, страницу не открывал(а).",
    url: "https://www.airbnb.com/rooms/1327000887873099140?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "Rest, Relax, Golf and Enjoy Sedona", platform: "Airbnb", region: "Sedona", driveMin: 30,
    priceTotal: 5089, perNight: 268, bedrooms: 2, bathrooms: 2, rating: 5.0, reviews: 15,
    verified: false, match: "unverified", isHouse: true,
    note: "Из поиска, страницу не открывал(а).",
    url: "https://www.airbnb.com/rooms/1303090024847269044?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  },
  {
    name: "Red rock views / beat the heat, pool & pickleball", platform: "Airbnb", region: "Sedona", driveMin: 30,
    priceTotal: 5649, perNight: 297, bedrooms: 2, bathrooms: 2.5, rating: 5.0, reviews: 24,
    verified: false, match: "unverified", isHouse: true,
    note: "Из поиска, страницу не открывал(а).",
    url: "https://www.airbnb.com/rooms/1234029942725651005?adults=2&check_in=2026-09-26&check_out=2026-10-15&currency=USD"
  }
];
