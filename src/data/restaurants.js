import { importImages } from "../utils/importImages";

const sushiImages = importImages(
  require.context("../assets/images/sushi", false, /\.(png|jpe?g|svg|webp)$/)
);
const asianImages = importImages(
  require.context("../assets/images/asian", false, /\.(png|jpe?g|svg|webp)$/)
);
const italianImages = importImages(
  require.context("../assets/images/italian", false, /\.(png|jpe?g|svg|webp)$/)
);
const burgerImages = importImages(
  require.context("../assets/images/burgers", false, /\.(png|jpe?g|svg|webp)$/)
);
const dessertImages = importImages(
  require.context("../assets/images/dessert", false, /\.(png|jpe?g|svg|webp)$/)
);
const healthyImages = importImages(
  require.context("../assets/images/healthy", false, /\.(png|jpe?g|svg|webp)$/)
);
const indianImages = importImages(
  require.context("../assets/images/indian", false, /\.(png|jpe?g|svg|webp)$/)
);
const koreanImages = importImages(
  require.context("../assets/images/korean", false, /\.(png|jpe?g|svg|webp)$/)
);
const veganImages = importImages(
  require.context("../assets/images/vegan", false, /\.(png|jpe?g|svg|webp)$/)
);
const breakfastImages = importImages(
  require.context("../assets/images/breakfast", false, /\.(png|jpe?g|svg|webp)$/)
);

export const restaurants = [
  // SUSHI / JAPANESE
  { id: 1,  name: "Yamato Sushi",      cuisine: "Japanese",       rating: 4.7, deliveryTime: "45-65 min", deliveryFee: 0,    minOrder: 20, image: sushiImages["sushi1.webp"],               tags: ["Sushi", "Asian", "Japanese"],          supportsDelivery: true,  supportsPickup: false },
  { id: 2,  name: "Sushi Hero",        cuisine: "Japanese",       rating: 4.6, deliveryTime: "50-80 min", deliveryFee: 0,    minOrder: 15, image: sushiImages["sushi2.webp"],               tags: ["Sushi", "Japanese"],                   supportsDelivery: true,  supportsPickup: true  },
  { id: 3,  name: "Katsu Sushi",       cuisine: "Japanese",       rating: 4.6, deliveryTime: "60-75 min", deliveryFee: 1.50, minOrder: 20, image: sushiImages["sushi3.webp"],               tags: ["Sushi", "Asian", "Japanese"],          supportsDelivery: true,  supportsPickup: true  },
  { id: 4,  name: "Sushi Dream",       cuisine: "Japanese",       rating: 4.4, deliveryTime: "50-80 min", deliveryFee: 2.00, minOrder: 18, image: sushiImages["sushi4.webp"],               tags: ["Sushi", "Japanese"],                   supportsDelivery: true,  supportsPickup: false },
  { id: 5,  name: "Sushi Craft",       cuisine: "Japanese",       rating: 4.4, deliveryTime: "50-80 min", deliveryFee: 0,    minOrder: 20, image: sushiImages["sushi5.webp"],               tags: ["Sushi", "Asian"],                      supportsDelivery: false, supportsPickup: true  },

  // PIZZA / ITALIAN
  { id: 6,  name: "Pizza Heaven",      cuisine: "Italian",        rating: 4.7, deliveryTime: "25-40 min", deliveryFee: 1.99, minOrder: 12, image: italianImages["pizza.webp"],              tags: ["Pizza", "Italian"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 7,  name: "Napoli Express",    cuisine: "Italian",        rating: 4.5, deliveryTime: "30-45 min", deliveryFee: 0,    minOrder: 15, image: italianImages["margherita-pizza.webp"],   tags: ["Pizza", "Italian", "Pasta"],           supportsDelivery: true,  supportsPickup: true  },
  { id: 8,  name: "Roma Pizza",        cuisine: "Italian",        rating: 4.3, deliveryTime: "20-35 min", deliveryFee: 2.49, minOrder: 10, image: italianImages["pizza2.webp"],             tags: ["Pizza", "Italian"],                    supportsDelivery: true,  supportsPickup: false },
  { id: 9,  name: "Pasta & Co",        cuisine: "Italian",        rating: 4.6, deliveryTime: "30-50 min", deliveryFee: 1.50, minOrder: 14, image: italianImages["spagetti.webp"],           tags: ["Italian", "Pasta"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 10, name: "La Trattoria",      cuisine: "Italian",        rating: 4.8, deliveryTime: "35-55 min", deliveryFee: 0,    minOrder: 20, image: italianImages["pizza3.webp"],             tags: ["Italian", "Pizza", "Pasta"],           supportsDelivery: false, supportsPickup: true  },

  // BURGERS / FAST FOOD
  { id: 11, name: "Burger Palace",     cuisine: "American",       rating: 4.5, deliveryTime: "20-30 min", deliveryFee: 2.99, minOrder: 10, image: burgerImages["burger1.webp"],             tags: ["Burgers", "Fast Food", "American"],    supportsDelivery: true,  supportsPickup: true  },
  { id: 12, name: "Big Bun Co",        cuisine: "American",       rating: 4.4, deliveryTime: "15-25 min", deliveryFee: 0,    minOrder: 8,  image: burgerImages["burger2.webp"],             tags: ["Burgers", "American", "Fast Food"],    supportsDelivery: true,  supportsPickup: true  },
  { id: 13, name: "Smash Burgers",     cuisine: "American",       rating: 4.6, deliveryTime: "20-35 min", deliveryFee: 1.99, minOrder: 12, image: burgerImages["burger3.webp"],             tags: ["Burgers", "American"],                 supportsDelivery: true,  supportsPickup: false },
  { id: 14, name: "Crispy Chicken",    cuisine: "American",       rating: 4.3, deliveryTime: "15-30 min", deliveryFee: 0,    minOrder: 9,  image: burgerImages["burger4.webp"],             tags: ["Fast Food", "American", "Burgers"],    supportsDelivery: true,  supportsPickup: true  },
  { id: 15, name: "Shake Shack Style", cuisine: "American",       rating: 4.7, deliveryTime: "25-40 min", deliveryFee: 2.49, minOrder: 15, image: burgerImages["burger5.webp"],             tags: ["Burgers", "Fast Food"],                supportsDelivery: false, supportsPickup: true  },

  // INDIAN
  { id: 16, name: "Curry House",       cuisine: "Indian",         rating: 4.4, deliveryTime: "30-50 min", deliveryFee: 2.49, minOrder: 18, image: indianImages["indian1.webp"],             tags: ["Indian", "Curry"],                     supportsDelivery: true,  supportsPickup: false },
  { id: 17, name: "Spice Garden",      cuisine: "Indian",         rating: 4.5, deliveryTime: "35-55 min", deliveryFee: 0,    minOrder: 20, image: indianImages["indian2.webp"],             tags: ["Indian", "Curry", "Spicy"],            supportsDelivery: true,  supportsPickup: true  },
  { id: 18, name: "Mumbai Kitchen",    cuisine: "Indian",         rating: 4.6, deliveryTime: "40-60 min", deliveryFee: 1.99, minOrder: 15, image: indianImages["indian3.webp"],             tags: ["Indian", "Spicy"],                     supportsDelivery: true,  supportsPickup: true  },
  { id: 19, name: "Delhi Darbar",      cuisine: "Indian",         rating: 4.3, deliveryTime: "30-45 min", deliveryFee: 2.99, minOrder: 20, image: indianImages["indian4.webp"],             tags: ["Indian", "Curry"],                     supportsDelivery: true,  supportsPickup: false },
  { id: 20, name: "Tandoor Palace",    cuisine: "Indian",         rating: 4.7, deliveryTime: "35-50 min", deliveryFee: 0,    minOrder: 18, image: indianImages["indian5.webp"],             tags: ["Indian", "Spicy", "Curry"],            supportsDelivery: false, supportsPickup: true  },

  // MEXICAN / TACOS
  { id: 21, name: "Taco Town",         cuisine: "Mexican",        rating: 4.3, deliveryTime: "15-25 min", deliveryFee: 0,    minOrder: 8,  image: asianImages["asian8.webp"],               tags: ["Mexican", "Tacos"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 22, name: "El Rancho",         cuisine: "Mexican",        rating: 4.5, deliveryTime: "20-35 min", deliveryFee: 1.99, minOrder: 12, image: asianImages["asian9.webp"],               tags: ["Mexican", "Tacos", "Burritos"],        supportsDelivery: true,  supportsPickup: true  },
  { id: 23, name: "Burrito Bros",      cuisine: "Mexican",        rating: 4.4, deliveryTime: "15-30 min", deliveryFee: 0,    minOrder: 10, image: asianImages["asian10.webp"],              tags: ["Mexican", "Burritos"],                 supportsDelivery: true,  supportsPickup: false },
  { id: 24, name: "Guadalajara Grill", cuisine: "Mexican",        rating: 4.6, deliveryTime: "25-40 min", deliveryFee: 2.00, minOrder: 15, image: asianImages["asian11.webp"],              tags: ["Mexican", "Tacos", "Spicy"],           supportsDelivery: true,  supportsPickup: true  },

  // KOREAN
  { id: 25, name: "Seoul Kitchen",     cuisine: "Korean",         rating: 4.6, deliveryTime: "35-55 min", deliveryFee: 1.99, minOrder: 15, image: koreanImages["bibimbap.webp"],            tags: ["Korean", "Asian"],                     supportsDelivery: true,  supportsPickup: true  },
  { id: 26, name: "K-BBQ House",       cuisine: "Korean",         rating: 4.7, deliveryTime: "40-60 min", deliveryFee: 0,    minOrder: 25, image: koreanImages["korean-chicken.webp"],      tags: ["Korean", "Asian"],                     supportsDelivery: true,  supportsPickup: false },
  { id: 27, name: "Bibimbap Bar",      cuisine: "Korean",         rating: 4.5, deliveryTime: "30-50 min", deliveryFee: 2.49, minOrder: 12, image: koreanImages["kimchi.webp"],              tags: ["Korean", "Asian", "Healthy"],          supportsDelivery: false, supportsPickup: true  },

  // ASIAN / CHINESE / THAI / VIETNAMESE / RAMEN
  { id: 28, name: "Dragon Wok",        cuisine: "Chinese",        rating: 4.4, deliveryTime: "25-40 min", deliveryFee: 1.99, minOrder: 15, image: asianImages["asian1.webp"],               tags: ["Asian", "Chinese"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 29, name: "Dim Sum Palace",    cuisine: "Chinese",        rating: 4.6, deliveryTime: "30-50 min", deliveryFee: 0,    minOrder: 18, image: asianImages["asian2.webp"],               tags: ["Asian", "Chinese"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 30, name: "Pho Saigon",        cuisine: "Vietnamese",     rating: 4.5, deliveryTime: "25-45 min", deliveryFee: 1.50, minOrder: 12, image: asianImages["asian3.webp"],               tags: ["Asian", "Vietnamese"],                 supportsDelivery: true,  supportsPickup: false },
  { id: 31, name: "Thai Orchid",       cuisine: "Thai",           rating: 4.7, deliveryTime: "30-50 min", deliveryFee: 2.00, minOrder: 15, image: asianImages["asian4.webp"],               tags: ["Asian", "Thai", "Spicy"],              supportsDelivery: true,  supportsPickup: true  },
  { id: 32, name: "Ramen Rebel",       cuisine: "Japanese",       rating: 4.8, deliveryTime: "35-55 min", deliveryFee: 0,    minOrder: 15, image: koreanImages["ramen.webp"],               tags: ["Asian", "Japanese"],                   supportsDelivery: true,  supportsPickup: true  },

  // HEALTHY / VEGAN / SALADS
  { id: 33, name: "Green Garden",      cuisine: "Healthy",        rating: 4.6, deliveryTime: "20-35 min", deliveryFee: 1.49, minOrder: 15, image: healthyImages["healthy-plate.webp"],      tags: ["Healthy", "Salads", "Vegan"],          supportsDelivery: false, supportsPickup: true  },
  { id: 34, name: "Bowl & Bloom",      cuisine: "Healthy",        rating: 4.5, deliveryTime: "20-35 min", deliveryFee: 0,    minOrder: 12, image: healthyImages["smoothie-bowl.webp"],      tags: ["Healthy", "Vegan", "Salads"],          supportsDelivery: true,  supportsPickup: true  },
  { id: 35, name: "Juice & Roots",     cuisine: "Healthy",        rating: 4.4, deliveryTime: "15-25 min", deliveryFee: 1.99, minOrder: 10, image: healthyImages["green-juice.webp"],        tags: ["Healthy", "Vegan"],                    supportsDelivery: true,  supportsPickup: false },
  { id: 36, name: "The Vegan Table",   cuisine: "Vegan",          rating: 4.7, deliveryTime: "25-40 min", deliveryFee: 0,    minOrder: 14, image: veganImages["Vegan-bowl.webp"],           tags: ["Vegan", "Healthy"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 37, name: "Sprout Kitchen",    cuisine: "Vegan",          rating: 4.5, deliveryTime: "20-30 min", deliveryFee: 1.50, minOrder: 12, image: veganImages["vegan-meal.webp"],           tags: ["Vegan", "Healthy", "Salads"],          supportsDelivery: false, supportsPickup: true  },

  // BREAKFAST
  { id: 38, name: "Morning Glory",     cuisine: "Breakfast",      rating: 4.6, deliveryTime: "20-35 min", deliveryFee: 1.99, minOrder: 10, image: breakfastImages["breakfast1.webp"],       tags: ["Breakfast"],                           supportsDelivery: true,  supportsPickup: true  },
  { id: 39, name: "The Egg Shop",      cuisine: "Breakfast",      rating: 4.5, deliveryTime: "15-30 min", deliveryFee: 0,    minOrder: 8,  image: breakfastImages["breakfast2.webp"],       tags: ["Breakfast"],                           supportsDelivery: true,  supportsPickup: true  },
  { id: 40, name: "Waffle World",      cuisine: "Breakfast",      rating: 4.4, deliveryTime: "20-30 min", deliveryFee: 2.00, minOrder: 10, image: breakfastImages["breakfast3.webp"],       tags: ["Breakfast", "Desserts"],               supportsDelivery: true,  supportsPickup: false },
  { id: 41, name: "Pancake House",     cuisine: "Breakfast",      rating: 4.7, deliveryTime: "25-40 min", deliveryFee: 0,    minOrder: 12, image: breakfastImages["breakfast4.webp"],       tags: ["Breakfast"],                           supportsDelivery: false, supportsPickup: true  },

  // DESSERTS
  { id: 42, name: "Sweet Dreams",      cuisine: "Desserts",       rating: 4.8, deliveryTime: "20-35 min", deliveryFee: 1.99, minOrder: 10, image: dessertImages["cheesecake.webp"],         tags: ["Desserts"],                            supportsDelivery: true,  supportsPickup: true  },
  { id: 43, name: "Cake & Bake",       cuisine: "Desserts",       rating: 4.6, deliveryTime: "25-40 min", deliveryFee: 0,    minOrder: 12, image: dessertImages["tiramisu.webp"],           tags: ["Desserts"],                            supportsDelivery: true,  supportsPickup: true  },
  { id: 44, name: "Gelato Italiano",   cuisine: "Desserts",       rating: 4.7, deliveryTime: "15-25 min", deliveryFee: 2.49, minOrder: 8,  image: dessertImages["cheesecake1.webp"],        tags: ["Desserts", "Italian"],                 supportsDelivery: true,  supportsPickup: false },
  { id: 45, name: "Donut Factory",     cuisine: "Desserts",       rating: 4.4, deliveryTime: "15-25 min", deliveryFee: 0,    minOrder: 8,  image: dessertImages["eclairs.webp"],            tags: ["Desserts", "Fast Food"],               supportsDelivery: false, supportsPickup: true  },

  // MEDITERRANEAN / MIDDLE EASTERN
  { id: 46, name: "Falafel House",     cuisine: "Mediterranean",  rating: 4.5, deliveryTime: "20-35 min", deliveryFee: 0,    minOrder: 10, image: veganImages["veggie-salad.webp"],         tags: ["Healthy", "Vegan"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 47, name: "Hummus & More",     cuisine: "Mediterranean",  rating: 4.6, deliveryTime: "25-40 min", deliveryFee: 1.99, minOrder: 12, image: veganImages["vegan-soup.webp"],           tags: ["Healthy", "Vegan"],                    supportsDelivery: true,  supportsPickup: false },
  { id: 48, name: "Shawarma King",     cuisine: "Middle Eastern", rating: 4.4, deliveryTime: "20-30 min", deliveryFee: 0,    minOrder: 10, image: healthyImages["chicken-plate.webp"],      tags: ["Fast Food", "Spicy"],                  supportsDelivery: true,  supportsPickup: true  },

  // SEAFOOD / AMERICAN DINER / BBQ
  { id: 49, name: "The Clam Bar",      cuisine: "Seafood",        rating: 4.7, deliveryTime: "30-50 min", deliveryFee: 2.99, minOrder: 20, image: healthyImages["salmon-plate.webp"],       tags: ["Healthy", "Asian"],                    supportsDelivery: true,  supportsPickup: true  },
  { id: 50, name: "Lobster Shack",     cuisine: "Seafood",        rating: 4.8, deliveryTime: "35-55 min", deliveryFee: 3.99, minOrder: 25, image: asianImages["asian5.webp"],               tags: ["Healthy"],                             supportsDelivery: true,  supportsPickup: false },
  { id: 51, name: "Classic Diner",     cuisine: "American",       rating: 4.3, deliveryTime: "20-30 min", deliveryFee: 0,    minOrder: 10, image: breakfastImages["breakfast5.webp"],       tags: ["American", "Burgers", "Breakfast"],    supportsDelivery: true,  supportsPickup: true  },
  { id: 52, name: "BBQ Republic",      cuisine: "American",       rating: 4.6, deliveryTime: "30-50 min", deliveryFee: 2.49, minOrder: 18, image: burgerImages["burger6.webp"],             tags: ["American", "Fast Food"],               supportsDelivery: false, supportsPickup: true  },
];