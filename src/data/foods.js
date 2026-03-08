import { importImages } from "../utils/importImages";

// sushi
const sushiImages = importImages(
  require.context("../assets/images/sushi", false, /\.(png|jpe?g|svg|webp)$/)
);
// asian
const asianImages = importImages(
  require.context("../assets/images/asian", false, /\.(png|jpe?g|svg|webp)$/)
);
// italian
const italianImages = importImages(
  require.context("../assets/images/italian", false, /\.(png|jpe?g|svg|webp)$/)
);
// burgers
const burgerImages = importImages(
  require.context("../assets/images/burgers", false, /\.(png|jpe?g|svg|webp)$/)
);
// dessert
const dessertImages = importImages(
  require.context("../assets/images/dessert", false, /\.(png|jpe?g|svg|webp)$/)
);
// healthy
const healthyImages = importImages(
  require.context("../assets/images/healthy", false, /\.(png|jpe?g|svg|webp)$/)
);
// indian
const indianImages = importImages(
  require.context("../assets/images/indian", false, /\.(png|jpe?g|svg|webp)$/)
);
// korean
const koreanImages = importImages(
  require.context("../assets/images/korean", false, /\.(png|jpe?g|svg|webp)$/)
);
// vegan
const veganImages = importImages(
  require.context("../assets/images/vegan", false, /\.(png|jpe?g|svg|webp)$/)
);
// breakfast
const breakfastImages = importImages(
  require.context("../assets/images/breakfast", false, /\.(png|jpe?g|svg|webp)$/)
);

export const foods = [

  // ─── 1. YAMATO SUSHI ────────────────────────────────
  { id: 101, restaurantId: 1, name: "Salmon Futomaki", description: "Salmon, cream cheese, cucumber, avocado", price: 8.00, image: sushiImages["sushi1.webp"], category: "Popular" },
  { id: 102, restaurantId: 1, name: "Rainbow Set 40pcs", description: "8x California with salmon, 8x tuna, 8x baked salmon, wrapped in mango", price: 50.00, image: sushiImages["sushi2.webp"], category: "Popular" },
  { id: 103, restaurantId: 1, name: "Dragon Uramaki", description: "Shrimp tempura, cheese, cucumber, baked eel, avocado, kabayaki sauce", price: 16.00, image: sushiImages["sushi3.webp"], category: "Popular" },
  { id: 104, restaurantId: 1, name: "Chicken Teriyaki Bento", description: "3 Futomaki, 3 California maki, teriyaki chicken, Yasai salad, Onigiri", price: 13.00, image: sushiImages["sushi4.webp"], category: "Lunch" },
  { id: 105, restaurantId: 1, name: "Tempura Bento", description: "3 Futomaki, 3 California maki, shrimp and vegetables in tempura, rice", price: 13.00, image: sushiImages["sushi6.webp"], category: "Lunch" },
  { id: 106, restaurantId: 1, name: "Baked Salmon Futomaki", description: "Salmon, cream cheese, cucumber, avocado, kampyo, kabayaki sauce", price: 9.00, image: sushiImages["sushi5.webp"], category: "Futomaki" },
  { id: 107, restaurantId: 1, name: "Ebi Tempura Futomaki", description: "Shrimp in tempura, cucumber, avocado, oishiko, spicy mayo", price: 8.00, image: sushiImages["sushi7.webp"], category: "Futomaki" },
  { id: 108, restaurantId: 1, name: "Tuna Nigiri", description: "Fresh tuna over seasoned rice (2 pcs)", price: 8.00, image: sushiImages["sushi8.webp"], category: "Nigiri" },
  { id: 109, restaurantId: 1, name: "Salmon Nigiri", description: "Fresh Atlantic salmon over seasoned rice (2 pcs)", price: 7.50, image: sushiImages["sushi9.webp"], category: "Nigiri" },
  { id: 110, restaurantId: 1, name: "Miso Soup", description: "Traditional miso broth with tofu and wakame seaweed", price: 3.50, image: asianImages["asian1.webp"], category: "Extras" },

  // ─── 2. SUSHI HERO ──────────────────────────────────
  { id: 201, restaurantId: 2, name: "Hero Roll", description: "Spicy tuna, avocado, cucumber, sriracha mayo, sesame", price: 14.00, image: sushiImages["sushi11.webp"], category: "Signature Rolls" },
  { id: 202, restaurantId: 2, name: "Volcano Roll", description: "Crab, avocado, topped with baked scallop in spicy sauce", price: 16.00, image: sushiImages["sushi2.webp"], category: "Signature Rolls" },
  { id: 203, restaurantId: 2, name: "Spider Roll", description: "Soft-shell crab tempura, cucumber, avocado, spicy mayo", price: 15.50, image: sushiImages["sushi3.webp"], category: "Signature Rolls" },
  { id: 204, restaurantId: 2, name: "California Roll", description: "Crab, avocado, cucumber, sesame seeds (8 pcs)", price: 9.99, image: sushiImages["sushi4.webp"], category: "Classic Rolls" },
  { id: 205, restaurantId: 2, name: "Spicy Tuna Roll", description: "Tuna, spicy mayo, cucumber, sesame (8 pcs)", price: 11.00, image: sushiImages["sushi1.webp"], category: "Classic Rolls" },
  { id: 206, restaurantId: 2, name: "Salmon Sashimi", description: "6 slices of premium fresh salmon", price: 13.00, image: sushiImages["sushi5.webp"], category: "Sashimi" },
  { id: 207, restaurantId: 2, name: "Mixed Sashimi", description: "Chef's selection of 10 slices — salmon, tuna, yellowtail", price: 19.00, image: sushiImages["sushi6.webp"], category: "Sashimi" },
  { id: 208, restaurantId: 2, name: "Edamame", description: "Steamed and salted soybean pods", price: 4.00, image: asianImages["asian2.webp"], category: "Starters" },

  // ─── 3. KATSU SUSHI ─────────────────────────────────
  { id: 301, restaurantId: 3, name: "Katsu Special Roll", description: "Panko-crusted shrimp, spicy crab, avocado, eel sauce", price: 15.00, image: sushiImages["sushi7.webp"], category: "Chef Specials" },
  { id: 302, restaurantId: 3, name: "Crispy Rice Spicy Tuna", description: "Crispy rice cakes topped with spicy tuna and jalapeno", price: 17.00, image: sushiImages["sushi8.webp"], category: "Chef Specials" },
  { id: 303, restaurantId: 3, name: "Philadelphia Roll", description: "Smoked salmon, cream cheese, cucumber (8 pcs)", price: 11.00, image: sushiImages["sushi9.webp"], category: "Classic Rolls" },
  { id: 304, restaurantId: 3, name: "Shrimp Tempura Roll", description: "Crispy shrimp tempura, avocado, cucumber, tempura flakes", price: 12.50, image: sushiImages["sushi11.webp"], category: "Classic Rolls" },
  { id: 305, restaurantId: 3, name: "Tuna Tataki", description: "Seared tuna with ponzu sauce and crispy onions", price: 14.00, image: sushiImages["sushi1.webp"], category: "Starters" },
  { id: 306, restaurantId: 3, name: "Gyoza 6pcs", description: "Pan-fried pork dumplings with ginger dipping sauce", price: 7.50, image: asianImages["asian3.webp"], category: "Starters" },
  { id: 307, restaurantId: 3, name: "Green Tea Ice Cream", description: "Creamy matcha ice cream with mochi pieces", price: 5.50, image: asianImages["asian4.webp"], category: "Desserts" },

  // ─── 4. SUSHI DREAM ─────────────────────────────────
  { id: 401, restaurantId: 4, name: "Dream Platter 50pcs", description: "Assorted nigiri, maki, and uramaki — perfect for sharing", price: 58.00, image: sushiImages["sushi2.webp"], category: "Sets" },
  { id: 402, restaurantId: 4, name: "Salmon Avocado Roll", description: "Fresh salmon, creamy avocado, light soy glaze (8 pcs)", price: 12.00, image: sushiImages["sushi3.webp"], category: "Rolls" },
  { id: 403, restaurantId: 4, name: "Rainbow Roll", description: "California roll topped with assorted fish slices", price: 16.00, image: sushiImages["sushi4.webp"], category: "Rolls" },
  { id: 404, restaurantId: 4, name: "Tuna Nigiri 2pcs", description: "Premium bluefin tuna, hand-pressed sushi rice", price: 8.50, image: sushiImages["sushi5.webp"], category: "Nigiri" },
  { id: 405, restaurantId: 4, name: "Eel Nigiri 2pcs", description: "Freshwater eel glazed with sweet kabayaki sauce", price: 9.00, image: sushiImages["sushi6.webp"], category: "Nigiri" },
  { id: 406, restaurantId: 4, name: "Mochi Ice Cream", description: "Three pieces — strawberry, mango, matcha", price: 6.00, image: asianImages["asian5.webp"], category: "Desserts" },

  // ─── 5. SUSHI CRAFT ─────────────────────────────────
  { id: 501, restaurantId: 5, name: "Craft Omakase Set", description: "Chef's 12-piece selection using today's freshest fish", price: 38.00, image: sushiImages["sushi1.webp"], category: "Omakase" },
  { id: 502, restaurantId: 5, name: "Truffle Salmon Roll", description: "Salmon, truffle oil, yuzu zest, micro herbs (8 pcs)", price: 18.00, image: sushiImages["sushi7.webp"], category: "Craft Rolls" },
  { id: 503, restaurantId: 5, name: "Wagyu Nigiri 2pcs", description: "A5 wagyu beef, torched with garlic ponzu", price: 22.00, image: sushiImages["sushi8.webp"], category: "Craft Rolls" },
  { id: 504, restaurantId: 5, name: "Yellowtail Jalapeno", description: "Thinly sliced yellowtail, jalapeno, yuzu ponzu", price: 16.00, image: sushiImages["sushi9.webp"], category: "Starters" },
  { id: 505, restaurantId: 5, name: "Chawanmushi", description: "Silky steamed egg custard with shrimp and mushroom", price: 8.00, image: asianImages["asian6.webp"], category: "Starters" },
  { id: 506, restaurantId: 5, name: "Sake 180ml", description: "Chilled junmai sake, light and clean finish", price: 9.00, image: asianImages["asian7.webp"], category: "Drinks" },

  // ─── 6. PIZZA HEAVEN ────────────────────────────────
  { id: 601, restaurantId: 6, name: "Margherita", description: "San Marzano tomato, fresh mozzarella, basil, olive oil", price: 13.99, image: italianImages["margherita-pizza.webp"], category: "Classic Pizzas" },
  { id: 602, restaurantId: 6, name: "Pepperoni", description: "Classic pepperoni, mozzarella, tomato sauce", price: 15.99, image: italianImages["pizza2.webp"], category: "Classic Pizzas" },
  { id: 603, restaurantId: 6, name: "Four Cheese", description: "Mozzarella, gorgonzola, parmesan, ricotta", price: 16.99, image: italianImages["pizza3.webp"], category: "Classic Pizzas" },
  { id: 604, restaurantId: 6, name: "BBQ Chicken Pizza", description: "BBQ sauce, grilled chicken, red onion, cilantro, mozzarella", price: 17.99, image: italianImages["chicken-alfredo.webp"], category: "Specialty Pizzas" },
  { id: 605, restaurantId: 6, name: "Truffle Mushroom Pizza", description: "Truffle oil, mixed mushrooms, mozzarella, fresh thyme", price: 19.99, image: italianImages["veggie-pizza.webp"], category: "Specialty Pizzas" },
  { id: 606, restaurantId: 6, name: "Garlic Bread", description: "Toasted sourdough with garlic butter and herbs", price: 4.99, image: italianImages["flatbread-pizza.webp"], category: "Sides" },
  { id: 607, restaurantId: 6, name: "Caesar Salad", description: "Romaine, parmesan, croutons, Caesar dressing", price: 7.99, image: italianImages["ceaser-salad.webp"], category: "Sides" },
  { id: 608, restaurantId: 6, name: "Tiramisu", description: "Classic Italian dessert with mascarpone and espresso", price: 6.99, image: italianImages["italian1.webp"], category: "Desserts" },

  // ─── 7. NAPOLI EXPRESS ──────────────────────────────
  { id: 701, restaurantId: 7, name: "Napoletana Pizza", description: "DOP tomatoes, buffalo mozzarella, fresh basil, wood-fired", price: 16.00, image: italianImages["pizza.webp"], category: "Pizza" },
  { id: 702, restaurantId: 7, name: "Diavola Pizza", description: "Spicy salami, tomato, fior di latte, chilli oil", price: 15.50, image: italianImages["pizza4.webp"], category: "Pizza" },
  { id: 703, restaurantId: 7, name: "Spaghetti Carbonara", description: "Guanciale, egg yolk, pecorino romano, black pepper", price: 14.99, image: italianImages["spagetti.webp"], category: "Pasta" },
  { id: 704, restaurantId: 7, name: "Penne Arrabbiata", description: "Spicy tomato, garlic, basil, pecorino", price: 12.99, image: italianImages["pesto-rigotany.webp"], category: "Pasta" },
  { id: 705, restaurantId: 7, name: "Bruschetta", description: "Toasted bread with ripe tomatoes, garlic, basil, olive oil", price: 6.50, image: italianImages["flatbread-pizza.webp"], category: "Starters" },
  { id: 706, restaurantId: 7, name: "Cannoli", description: "Crispy pastry shell, sweet ricotta, chocolate chips", price: 5.50, image: italianImages["italian2.webp"], category: "Desserts" },

  // ─── 8. ROMA PIZZA ──────────────────────────────────
  { id: 801, restaurantId: 8, name: "Roma Special Pizza", description: "Prosciutto, rocket, parmesan shavings, tomato base", price: 17.00, image: italianImages["pizza5.webp"], category: "Pizzas" },
  { id: 802, restaurantId: 8, name: "Quattro Stagioni", description: "Ham, mushrooms, artichokes, olives — four seasons", price: 16.50, image: italianImages["pizza3.webp"], category: "Pizzas" },
  { id: 803, restaurantId: 8, name: "Calzone Classico", description: "Folded pizza stuffed with ricotta, ham, mozzarella", price: 14.99, image: italianImages["pizza2.webp"], category: "Pizzas" },
  { id: 804, restaurantId: 8, name: "Arancini 4pcs", description: "Crispy risotto balls stuffed with mozzarella", price: 7.50, image: italianImages["italian3.webp"], category: "Sides" },
  { id: 805, restaurantId: 8, name: "Panna Cotta", description: "Vanilla cream with mixed berry coulis", price: 6.00, image: italianImages["italian1.webp"], category: "Desserts" },

  // ─── 9. PASTA & CO ──────────────────────────────────
  { id: 901, restaurantId: 9, name: "Tagliatelle Bolognese", description: "Slow-cooked beef ragu, fresh egg tagliatelle, parmesan", price: 15.99, image: italianImages["spagetti2.webp"], category: "Pasta" },
  { id: 902, restaurantId: 9, name: "Rigatoni Amatriciana", description: "Pancetta, tomato, pecorino, chilli flakes", price: 14.50, image: italianImages["pesto-rigotany.webp"], category: "Pasta" },
  { id: 903, restaurantId: 9, name: "Linguine alle Vongole", description: "Clams, white wine, garlic, parsley, olive oil", price: 18.00, image: italianImages["spagetti.webp"], category: "Pasta" },
  { id: 904, restaurantId: 9, name: "Gnocchi al Pesto", description: "Hand-rolled potato gnocchi in fresh basil pesto", price: 13.99, image: italianImages["pesto-rigotany.webp"], category: "Pasta" },
  { id: 905, restaurantId: 9, name: "Caprese Salad", description: "Buffalo mozzarella, heirloom tomatoes, basil, balsamic", price: 10.00, image: italianImages["ceaser-salad.webp"], category: "Starters" },
  { id: 906, restaurantId: 9, name: "Tiramisu", description: "Classic mascarpone cream, espresso-soaked savoiardi", price: 7.50, image: italianImages["italian2.webp"], category: "Desserts" },

  // ─── 10. LA TRATTORIA ───────────────────────────────
  { id: 1001, restaurantId: 10, name: "Bistecca Fiorentina", description: "T-bone steak, rosemary, garlic, Tuscan herbs, grilled", price: 32.00, image: italianImages["italian3.webp"], category: "Mains" },
  { id: 1002, restaurantId: 10, name: "Risotto ai Funghi Porcini", description: "Creamy porcini mushroom risotto, parmesan, truffle oil", price: 18.00, image: italianImages["italian1.webp"], category: "Mains" },
  { id: 1003, restaurantId: 10, name: "Tagliere di Salumi", description: "Curated board of Italian cured meats and cheeses", price: 22.00, image: italianImages["italian2.webp"], category: "Starters" },
  { id: 1004, restaurantId: 10, name: "Pizza Tartufo", description: "Black truffle, fontina, mozzarella, crispy pancetta", price: 24.00, image: italianImages["pizza4.webp"], category: "Pizza" },
  { id: 1005, restaurantId: 10, name: "Pappardelle al Cinghiale", description: "Slow-braised wild boar ragu over fresh pappardelle", price: 19.00, image: italianImages["spagetti2.webp"], category: "Pasta" },
  { id: 1006, restaurantId: 10, name: "Gelato Artigianale", description: "Three scoops of house-made artisan gelato", price: 7.00, image: italianImages["italian3.webp"], category: "Desserts" },

  // ─── 11. BURGER PALACE ──────────────────────────────
  { id: 1101, restaurantId: 11, name: "Classic Cheeseburger", description: "Beef patty, cheddar, lettuce, tomato, pickles, special sauce", price: 9.99, image: burgerImages["burger1.webp"], category: "Burgers" },
  { id: 1102, restaurantId: 11, name: "BBQ Bacon Burger", description: "Smoky BBQ sauce, crispy bacon, cheddar, onion rings", price: 12.99, image: burgerImages["burger2.webp"], category: "Burgers" },
  { id: 1103, restaurantId: 11, name: "Double Smash Burger", description: "Two smashed patties, American cheese, caramelized onions, pickles", price: 14.99, image: burgerImages["burger3.webp"], category: "Burgers" },
  { id: 1104, restaurantId: 11, name: "Mushroom Swiss Burger", description: "Beef patty, sauteed mushrooms, Swiss cheese, garlic aioli", price: 13.49, image: burgerImages["burger4.webp"], category: "Burgers" },
  { id: 1105, restaurantId: 11, name: "Crispy Fries", description: "Golden fries with sea salt", price: 3.99, image: burgerImages["burger5.webp"], category: "Sides" },
  { id: 1106, restaurantId: 11, name: "Onion Rings", description: "Beer-battered crispy onion rings with dipping sauce", price: 4.99, image: burgerImages["burger6.webp"], category: "Sides" },
  { id: 1107, restaurantId: 11, name: "Chocolate Milkshake", description: "Thick creamy chocolate milkshake", price: 5.99, image: burgerImages["burger7.webp"], category: "Drinks" },

  // ─── 12. BIG BUN CO ─────────────────────────────────
  { id: 1201, restaurantId: 12, name: "The Big Bun", description: "Double beef, secret sauce, pickled slaw, brioche bun", price: 11.99, image: burgerImages["burger2.webp"], category: "Burgers" },
  { id: 1202, restaurantId: 12, name: "Spicy Jalapeno Burger", description: "Beef, pepper jack, jalapenos, chipotle mayo, lettuce", price: 12.49, image: burgerImages["burger3.webp"], category: "Burgers" },
  { id: 1203, restaurantId: 12, name: "Veggie Bun", description: "Black bean patty, avocado, lettuce, tomato, chipotle mayo", price: 10.99, image: burgerImages["burger8.webp"], category: "Burgers" },
  { id: 1204, restaurantId: 12, name: "Loaded Fries", description: "Fries topped with cheese sauce, bacon bits, jalapenos", price: 6.49, image: burgerImages["burger5.webp"], category: "Sides" },
  { id: 1205, restaurantId: 12, name: "Coleslaw", description: "Creamy house-made coleslaw", price: 2.99, image: burgerImages["burger6.webp"], category: "Sides" },
  { id: 1206, restaurantId: 12, name: "Vanilla Shake", description: "Classic thick vanilla milkshake", price: 4.99, image: burgerImages["burger7.webp"], category: "Drinks" },

  // ─── 13. SMASH BURGERS ──────────────────────────────
  { id: 1301, restaurantId: 13, name: "Classic Smash", description: "Smash patty, American cheese, pickles, mustard, onion", price: 8.99, image: burgerImages["burger1.webp"], category: "Smash Burgers" },
  { id: 1302, restaurantId: 13, name: "Double Smash Deluxe", description: "Two smash patties, double cheese, bacon, special sauce", price: 13.99, image: burgerImages["burger2.webp"], category: "Smash Burgers" },
  { id: 1303, restaurantId: 13, name: "Truffle Smash", description: "Smash patty, brie, truffle aioli, caramelized onions", price: 14.99, image: burgerImages["burger3.webp"], category: "Smash Burgers" },
  { id: 1304, restaurantId: 13, name: "Smash Fries", description: "Shoestring fries with smash sauce", price: 3.99, image: burgerImages["burger5.webp"], category: "Sides" },
  { id: 1305, restaurantId: 13, name: "Strawberry Shake", description: "Fresh strawberry milkshake, real fruit", price: 5.49, image: burgerImages["burger7.webp"], category: "Drinks" },

  // ─── 14. CRISPY CHICKEN ─────────────────────────────
  { id: 1401, restaurantId: 14, name: "Crispy Chicken Sandwich", description: "Fried chicken thigh, pickles, honey butter, brioche", price: 10.99, image: burgerImages["burger4.webp"], category: "Sandwiches" },
  { id: 1402, restaurantId: 14, name: "Spicy Crispy Chicken", description: "Nashville hot-style, coleslaw, pickles, white bread", price: 11.99, image: burgerImages["burger3.webp"], category: "Sandwiches" },
  { id: 1403, restaurantId: 14, name: "Chicken Tenders 5pcs", description: "Golden fried tenders with choice of dipping sauce", price: 9.99, image: burgerImages["burger6.webp"], category: "Tenders and Wings" },
  { id: 1404, restaurantId: 14, name: "Buffalo Wings 8pcs", description: "Crispy wings tossed in classic buffalo sauce", price: 12.99, image: burgerImages["burger2.webp"], category: "Tenders and Wings" },
  { id: 1405, restaurantId: 14, name: "Mac and Cheese", description: "Creamy four-cheese macaroni, toasted breadcrumbs", price: 4.99, image: burgerImages["burger5.webp"], category: "Sides" },
  { id: 1406, restaurantId: 14, name: "Waffle Fries", description: "Crispy waffle-cut fries with ranch dip", price: 3.99, image: burgerImages["burger5.webp"], category: "Sides" },

  // ─── 15. SHAKE SHACK STYLE ──────────────────────────
  { id: 1501, restaurantId: 15, name: "ShackBurger", description: "Black Angus beef, American cheese, ShackSauce, lettuce, tomato", price: 10.99, image: burgerImages["burger1.webp"], category: "Burgers" },
  { id: 1502, restaurantId: 15, name: "SmokeShack Burger", description: "Beef, smoked bacon, chopped cherry pepper, ShackSauce", price: 13.99, image: burgerImages["burger2.webp"], category: "Burgers" },
  { id: 1503, restaurantId: 15, name: "Shroom Burger", description: "Crispy fried portobello, muenster, cheddar, lettuce, tomato", price: 11.99, image: burgerImages["burger8.webp"], category: "Burgers" },
  { id: 1504, restaurantId: 15, name: "Crinkle Cut Fries", description: "Classic crinkle-cut fries, sea salt", price: 3.99, image: burgerImages["burger5.webp"], category: "Sides" },
  { id: 1505, restaurantId: 15, name: "Black and White Shake", description: "Vanilla custard with chocolate sauce swirl", price: 6.99, image: burgerImages["burger7.webp"], category: "Drinks" },

  // ─── 16. CURRY HOUSE ────────────────────────────────
  { id: 1601, restaurantId: 16, name: "Chicken Tikka Masala", description: "Tender chicken in creamy tomato-spiced curry, naan", price: 15.99, image: indianImages["indian1.webp"], category: "Curries" },
  { id: 1602, restaurantId: 16, name: "Lamb Rogan Josh", description: "Slow-cooked lamb in aromatic Kashmiri sauce", price: 17.99, image: indianImages["indian2.webp"], category: "Curries" },
  { id: 1603, restaurantId: 16, name: "Palak Paneer", description: "Fresh cottage cheese in spiced spinach gravy (vegetarian)", price: 13.99, image: indianImages["indian3.webp"], category: "Curries" },
  { id: 1604, restaurantId: 16, name: "Dal Makhani", description: "Black lentils slow-cooked with butter and cream", price: 11.99, image: indianImages["indian4.webp"], category: "Curries" },
  { id: 1605, restaurantId: 16, name: "Vegetable Samosas 4pcs", description: "Crispy pastry filled with spiced potato and peas", price: 6.99, image: indianImages["indian5.webp"], category: "Starters" },
  { id: 1606, restaurantId: 16, name: "Chicken Tikka Starter", description: "Tandoor-grilled marinated chicken pieces", price: 9.99, image: indianImages["indian6.webp"], category: "Starters" },
  { id: 1607, restaurantId: 16, name: "Garlic Naan", description: "Freshly baked garlic naan from tandoor", price: 3.49, image: indianImages["indian7.webp"], category: "Breads and Rice" },
  { id: 1608, restaurantId: 16, name: "Basmati Rice", description: "Fragrant long-grain basmati rice", price: 2.99, image: indianImages["indian8.webp"], category: "Breads and Rice" },
  { id: 1609, restaurantId: 16, name: "Mango Lassi", description: "Refreshing yogurt and mango smoothie", price: 4.49, image: healthyImages["orange-juice.webp"], category: "Drinks" },

  // ─── 17. SPICE GARDEN ───────────────────────────────
  { id: 1701, restaurantId: 17, name: "Butter Chicken", description: "Tender chicken in velvety tomato-butter sauce", price: 15.99, image: indianImages["indian1.webp"], category: "Curries" },
  { id: 1702, restaurantId: 17, name: "Lamb Vindaloo", description: "Fiery Goan-style lamb curry with vinegar and potatoes", price: 17.50, image: indianImages["indian2.webp"], category: "Curries" },
  { id: 1703, restaurantId: 17, name: "Chana Masala", description: "Spiced chickpeas in tangy tomato-onion gravy (vegan)", price: 12.50, image: indianImages["indian3.webp"], category: "Curries" },
  { id: 1704, restaurantId: 17, name: "Seekh Kebab 4pcs", description: "Minced lamb and herb skewers from the tandoor", price: 11.00, image: indianImages["indian6.webp"], category: "Starters" },
  { id: 1705, restaurantId: 17, name: "Onion Bhaji 4pcs", description: "Crispy fried onion fritters with mint chutney", price: 6.50, image: indianImages["indian5.webp"], category: "Starters" },
  { id: 1706, restaurantId: 17, name: "Peshwari Naan", description: "Sweet almond and coconut stuffed flatbread", price: 3.99, image: indianImages["indian7.webp"], category: "Breads" },
  { id: 1707, restaurantId: 17, name: "Gulab Jamun", description: "Soft milk dumplings soaked in rose sugar syrup", price: 5.50, image: indianImages["indian8.webp"], category: "Desserts" },

  // ─── 18. MUMBAI KITCHEN ─────────────────────────────
  { id: 1801, restaurantId: 18, name: "Vada Pav", description: "Mumbai street burger — spiced potato fritter in soft bun", price: 7.99, image: indianImages["indian5.webp"], category: "Street Food" },
  { id: 1802, restaurantId: 18, name: "Pav Bhaji", description: "Spiced vegetable mash with buttered bread rolls", price: 10.99, image: indianImages["indian4.webp"], category: "Street Food" },
  { id: 1803, restaurantId: 18, name: "Chicken Biryani", description: "Basmati rice layered with spiced chicken, saffron, fried onions", price: 16.99, image: indianImages["indian1.webp"], category: "Biryani" },
  { id: 1804, restaurantId: 18, name: "Vegetable Biryani", description: "Fragrant basmati with mixed vegetables and whole spices", price: 13.99, image: indianImages["indian2.webp"], category: "Biryani" },
  { id: 1805, restaurantId: 18, name: "Paneer Butter Masala", description: "Cottage cheese cubes in rich buttery tomato gravy", price: 13.50, image: indianImages["indian3.webp"], category: "Mains" },
  { id: 1806, restaurantId: 18, name: "Kulfi", description: "Traditional Indian ice cream — pistachio and cardamom", price: 5.50, image: indianImages["indian8.webp"], category: "Desserts" },

  // ─── 19. DELHI DARBAR ───────────────────────────────
  { id: 1901, restaurantId: 19, name: "Murgh Makhani", description: "Tender chicken in classic Mughal-style butter sauce", price: 15.99, image: indianImages["indian1.webp"], category: "Curries" },
  { id: 1902, restaurantId: 19, name: "Nihari", description: "Slow-braised beef shank in warming spiced broth", price: 18.00, image: indianImages["indian2.webp"], category: "Curries" },
  { id: 1903, restaurantId: 19, name: "Aloo Gobi", description: "Spiced potatoes and cauliflower with cumin and turmeric", price: 11.50, image: indianImages["indian3.webp"], category: "Curries" },
  { id: 1904, restaurantId: 19, name: "Tandoori Mixed Grill", description: "Chicken, lamb, and seekh kebab from the tandoor", price: 22.00, image: indianImages["indian6.webp"], category: "Grills" },
  { id: 1905, restaurantId: 19, name: "Laccha Paratha", description: "Layered whole-wheat flatbread, buttered and flaky", price: 3.50, image: indianImages["indian7.webp"], category: "Breads" },
  { id: 1906, restaurantId: 19, name: "Kheer", description: "Rice pudding with cardamom, rose water, almonds", price: 5.00, image: indianImages["indian8.webp"], category: "Desserts" },

  // ─── 20. TANDOOR PALACE ─────────────────────────────
  { id: 2001, restaurantId: 20, name: "Tandoori Chicken Half", description: "Marinated half-chicken roasted in clay tandoor oven", price: 14.99, image: indianImages["indian6.webp"], category: "Tandoor Specials" },
  { id: 2002, restaurantId: 20, name: "Shami Kebab 4pcs", description: "Minced lamb patties with chickpea, herbs and spices", price: 10.50, image: indianImages["indian5.webp"], category: "Tandoor Specials" },
  { id: 2003, restaurantId: 20, name: "Kadai Chicken", description: "Stir-fried chicken with peppers in bold kadai masala", price: 15.50, image: indianImages["indian1.webp"], category: "Curries" },
  { id: 2004, restaurantId: 20, name: "Saag Aloo", description: "Spinach and potato in cumin-mustard tempering (vegan)", price: 11.00, image: indianImages["indian3.webp"], category: "Curries" },
  { id: 2005, restaurantId: 20, name: "Naan Bread", description: "Plain tandoor naan, soft and pillowy", price: 2.99, image: indianImages["indian7.webp"], category: "Breads" },
  { id: 2006, restaurantId: 20, name: "Raita", description: "Cooling yogurt with cucumber, mint and cumin", price: 2.50, image: indianImages["indian4.webp"], category: "Sides" },

  // ─── 21. TACO TOWN ──────────────────────────────────
  { id: 2101, restaurantId: 21, name: "Street Tacos 3pcs", description: "Corn tortillas, carnitas, white onion, cilantro, salsa verde", price: 9.99, image: asianImages["asian8.webp"], category: "Tacos" },
  { id: 2102, restaurantId: 21, name: "Carne Asada Taco", description: "Grilled steak, pico de gallo, guacamole, lime", price: 11.99, image: asianImages["asian9.webp"], category: "Tacos" },
  { id: 2103, restaurantId: 21, name: "Shrimp Taco", description: "Grilled shrimp, cabbage slaw, chipotle mayo, lime", price: 12.99, image: asianImages["asian10.webp"], category: "Tacos" },
  { id: 2104, restaurantId: 21, name: "Chicken Burrito", description: "Grilled chicken, rice, black beans, salsa, sour cream", price: 11.99, image: asianImages["asian11.webp"], category: "Burritos" },
  { id: 2105, restaurantId: 21, name: "Veggie Burrito", description: "Roasted vegetables, rice, black beans, guacamole", price: 10.99, image: veganImages["vegan-quesadillas.webp"], category: "Burritos" },
  { id: 2106, restaurantId: 21, name: "Nachos Grande", description: "Tortilla chips, cheese, jalapenos, sour cream, guacamole", price: 9.99, image: asianImages["asian12.webp"], category: "Sides" },
  { id: 2107, restaurantId: 21, name: "Guacamole and Chips", description: "Fresh-made guacamole with crispy tortilla chips", price: 6.99, image: asianImages["asian13.webp"], category: "Sides" },

  // ─── 22. EL RANCHO ──────────────────────────────────
  { id: 2201, restaurantId: 22, name: "Al Pastor Tacos 3pcs", description: "Pork marinated in achiote, pineapple, cilantro, onion", price: 10.99, image: asianImages["asian8.webp"], category: "Tacos" },
  { id: 2202, restaurantId: 22, name: "Fish Tacos 3pcs", description: "Beer-battered cod, chipotle slaw, pico de gallo, lime crema", price: 12.99, image: asianImages["asian9.webp"], category: "Tacos" },
  { id: 2203, restaurantId: 22, name: "Carne Asada Burrito", description: "Grilled steak, rice, pinto beans, cheese, salsa, guac", price: 13.99, image: asianImages["asian11.webp"], category: "Burritos" },
  { id: 2204, restaurantId: 22, name: "Quesadilla", description: "Flour tortilla, melted cheese, salsa roja", price: 8.99, image: veganImages["vegan-quesadillas.webp"], category: "Extras" },
  { id: 2205, restaurantId: 22, name: "Churros 3pcs", description: "Fried dough sticks with cinnamon sugar and chocolate sauce", price: 5.99, image: dessertImages["churros.webp"], category: "Desserts" },

  // ─── 23. BURRITO BROS ───────────────────────────────
  { id: 2301, restaurantId: 23, name: "Super Burrito", description: "Steak, rice, beans, cheese, salsa, guac, sour cream", price: 14.99, image: asianImages["asian11.webp"], category: "Burritos" },
  { id: 2302, restaurantId: 23, name: "Chicken Burrito", description: "Grilled chicken, Spanish rice, black beans, pico de gallo", price: 12.99, image: asianImages["asian10.webp"], category: "Burritos" },
  { id: 2303, restaurantId: 23, name: "Baja Shrimp Burrito", description: "Coconut shrimp, mango salsa, cabbage, jalapeno crema", price: 14.50, image: asianImages["asian9.webp"], category: "Burritos" },
  { id: 2304, restaurantId: 23, name: "Burrito Bowl", description: "All the burrito fillings served over a bowl of rice", price: 11.99, image: asianImages["asian8.webp"], category: "Bowls" },
  { id: 2305, restaurantId: 23, name: "Chips and Salsa", description: "House-made tortilla chips with fresh tomato salsa", price: 3.99, image: asianImages["asian13.webp"], category: "Sides" },

  // ─── 24. GUADALAJARA GRILL ──────────────────────────
  { id: 2401, restaurantId: 24, name: "Birria Tacos 3pcs", description: "Braised beef, consomme for dipping, cilantro, onion, red salsa", price: 13.99, image: asianImages["asian8.webp"], category: "Tacos" },
  { id: 2402, restaurantId: 24, name: "Elote Street Corn", description: "Grilled corn, cotija cheese, mayo, chilli powder, lime", price: 5.99, image: asianImages["asian12.webp"], category: "Street Food" },
  { id: 2403, restaurantId: 24, name: "Pozole Rojo", description: "Rich red chilli and hominy soup with pork, radish, lime", price: 12.00, image: asianImages["asian9.webp"], category: "Soups" },
  { id: 2404, restaurantId: 24, name: "Enchiladas 3pcs", description: "Chicken-filled corn tortillas in red sauce with cotija", price: 13.50, image: asianImages["asian11.webp"], category: "Mains" },
  { id: 2405, restaurantId: 24, name: "Horchata", description: "Chilled rice milk with cinnamon and vanilla", price: 3.50, image: healthyImages["orange-juice.webp"], category: "Drinks" },

  // ─── 25. SEOUL KITCHEN ──────────────────────────────
  { id: 2501, restaurantId: 25, name: "Bibimbap", description: "Rice bowl with mixed vegetables, gochujang, fried egg", price: 13.99, image: koreanImages["bibimbap.webp"], category: "Rice Bowls" },
  { id: 2502, restaurantId: 25, name: "Bulgogi Bowl", description: "Marinated BBQ beef over steamed rice", price: 15.99, image: koreanImages["korean1.webp"], category: "Rice Bowls" },
  { id: 2503, restaurantId: 25, name: "Japchae", description: "Glass noodles stir-fried with vegetables and beef", price: 12.99, image: koreanImages["ramen.webp"], category: "Noodles" },
  { id: 2504, restaurantId: 25, name: "Tteokbokki", description: "Spicy rice cakes in gochujang sauce with fish cake", price: 9.99, image: koreanImages["korean-chicken.webp"], category: "Street Food" },
  { id: 2505, restaurantId: 25, name: "Kimchi Pancake", description: "Crispy savory pancake packed with tangy kimchi", price: 8.99, image: koreanImages["kimchi.webp"], category: "Street Food" },
  { id: 2506, restaurantId: 25, name: "Korean Fried Chicken", description: "Double-fried crispy chicken glazed in soy-garlic sauce", price: 14.99, image: koreanImages["korean-chicken.webp"], category: "Street Food" },
  { id: 2507, restaurantId: 25, name: "Doenjang Jjigae", description: "Fermented soybean paste stew with tofu and vegetables", price: 10.99, image: koreanImages["korean1.webp"], category: "Soups" },

  // ─── 26. K-BBQ HOUSE ────────────────────────────────
  { id: 2601, restaurantId: 26, name: "Samgyeopsal Pork Belly", description: "Thick-cut pork belly, sesame oil, salt, lettuce wraps", price: 19.99, image: koreanImages["korean1.webp"], category: "BBQ" },
  { id: 2602, restaurantId: 26, name: "LA Galbi Short Ribs", description: "Marinated beef short ribs grilled tableside", price: 24.99, image: koreanImages["korean-chicken.webp"], category: "BBQ" },
  { id: 2603, restaurantId: 26, name: "Bulgogi", description: "Thinly sliced marinated beef, sweet soy and pear", price: 18.99, image: koreanImages["bibimbap.webp"], category: "BBQ" },
  { id: 2604, restaurantId: 26, name: "Banchan Set", description: "6 house side dishes — kimchi, pickled radish, spinach and more", price: 8.00, image: koreanImages["kimchi.webp"], category: "Sides" },
  { id: 2605, restaurantId: 26, name: "Sundubu Jjigae", description: "Silken tofu stew in spicy broth with egg and vegetables", price: 11.00, image: koreanImages["ramen.webp"], category: "Soups" },
  { id: 2606, restaurantId: 26, name: "Korean Beer", description: "Cass lager, crisp and light (500ml)", price: 5.00, image: healthyImages["berry-juice.webp"], category: "Drinks" },

  // ─── 27. BIBIMBAP BAR ───────────────────────────────
  { id: 2701, restaurantId: 27, name: "Classic Bibimbap", description: "Rice, namul vegetables, gochujang, sesame oil, fried egg", price: 12.99, image: koreanImages["bibimbap.webp"], category: "Bibimbap" },
  { id: 2702, restaurantId: 27, name: "Beef Bibimbap", description: "Bibimbap with soy-marinated ground beef and fried egg", price: 14.99, image: koreanImages["korean1.webp"], category: "Bibimbap" },
  { id: 2703, restaurantId: 27, name: "Tofu Bibimbap", description: "Bibimbap with crispy tofu, extra veggies — fully vegan", price: 13.50, image: koreanImages["kimchi.webp"], category: "Bibimbap" },
  { id: 2704, restaurantId: 27, name: "Dolsot Bibimbap", description: "Bibimbap served in a sizzling stone pot, crispy rice bottom", price: 15.99, image: koreanImages["bibimbap.webp"], category: "Bibimbap" },
  { id: 2705, restaurantId: 27, name: "Kimchi Side", description: "House-fermented napa cabbage kimchi", price: 3.50, image: koreanImages["kimchi.webp"], category: "Sides" },
  { id: 2706, restaurantId: 27, name: "Barley Tea", description: "Chilled roasted barley tea, lightly nutty", price: 2.50, image: healthyImages["green-juice.webp"], category: "Drinks" },

  // ─── 28. DRAGON WOK ─────────────────────────────────
  { id: 2801, restaurantId: 28, name: "Kung Pao Chicken", description: "Wok-fried chicken, peanuts, dried chillies, Sichuan pepper", price: 13.99, image: asianImages["asian1.webp"], category: "Wok Dishes" },
  { id: 2802, restaurantId: 28, name: "Beef Black Bean Sauce", description: "Tender beef strips, green peppers, black bean sauce", price: 14.50, image: asianImages["asian2.webp"], category: "Wok Dishes" },
  { id: 2803, restaurantId: 28, name: "Sweet and Sour Pork", description: "Crispy pork, bell peppers, pineapple, tangy sauce", price: 13.50, image: asianImages["asian3.webp"], category: "Wok Dishes" },
  { id: 2804, restaurantId: 28, name: "Egg Fried Rice", description: "Wok-tossed rice, egg, spring onion, soy sauce", price: 7.99, image: asianImages["asian4.webp"], category: "Rice and Noodles" },
  { id: 2805, restaurantId: 28, name: "Chow Mein", description: "Stir-fried egg noodles with vegetables and choice of protein", price: 10.99, image: asianImages["asian5.webp"], category: "Rice and Noodles" },
  { id: 2806, restaurantId: 28, name: "Spring Rolls 4pcs", description: "Crispy rolls filled with pork, cabbage, glass noodles", price: 6.99, image: asianImages["asian6.webp"], category: "Starters" },

  // ─── 29. DIM SUM PALACE ─────────────────────────────
  { id: 2901, restaurantId: 29, name: "Har Gow 4pcs", description: "Steamed shrimp dumplings in translucent rice wrapper", price: 8.99, image: asianImages["asian7.webp"], category: "Steamed Dim Sum" },
  { id: 2902, restaurantId: 29, name: "Siu Mai 4pcs", description: "Open-topped pork and shrimp dumplings", price: 8.50, image: asianImages["asian8.webp"], category: "Steamed Dim Sum" },
  { id: 2903, restaurantId: 29, name: "Cheung Fun", description: "Steamed rice noodle rolls with shrimp or pork, hoisin sauce", price: 9.50, image: asianImages["asian9.webp"], category: "Steamed Dim Sum" },
  { id: 2904, restaurantId: 29, name: "Char Siu Bao 3pcs", description: "Steamed BBQ pork buns, fluffy and pillowy", price: 7.99, image: asianImages["asian10.webp"], category: "Steamed Dim Sum" },
  { id: 2905, restaurantId: 29, name: "Turnip Cake", description: "Pan-fried daikon cake with XO sauce", price: 7.50, image: asianImages["asian11.webp"], category: "Fried Dim Sum" },
  { id: 2906, restaurantId: 29, name: "Sesame Balls 3pcs", description: "Glutinous rice balls filled with lotus paste, fried golden", price: 6.99, image: asianImages["asian12.webp"], category: "Desserts" },
  { id: 2907, restaurantId: 29, name: "Jasmine Tea", description: "Fragrant jasmine green tea pot, serves two", price: 4.00, image: healthyImages["green-juice.webp"], category: "Drinks" },

  // ─── 30. PHO SAIGON ─────────────────────────────────
  { id: 3001, restaurantId: 30, name: "Pho Bo Beef Noodles", description: "Clear bone broth, rice noodles, rare beef slices, herbs, lime", price: 13.99, image: koreanImages["ramen.webp"], category: "Pho" },
  { id: 3002, restaurantId: 30, name: "Pho Ga Chicken Noodles", description: "Light chicken broth, noodles, shredded chicken, bean sprouts", price: 12.99, image: asianImages["asian1.webp"], category: "Pho" },
  { id: 3003, restaurantId: 30, name: "Bun Bo Hue", description: "Spicy lemongrass beef noodle soup, thick round noodles", price: 14.50, image: asianImages["asian2.webp"], category: "Noodle Soups" },
  { id: 3004, restaurantId: 30, name: "Fresh Spring Rolls 2pcs", description: "Shrimp, pork, vermicelli, herbs, peanut dipping sauce", price: 7.50, image: asianImages["asian3.webp"], category: "Starters" },
  { id: 3005, restaurantId: 30, name: "Banh Mi", description: "Vietnamese baguette, pork, pate, pickled veg, jalapeno, cilantro", price: 8.99, image: asianImages["asian4.webp"], category: "Sandwiches" },
  { id: 3006, restaurantId: 30, name: "Vietnamese Iced Coffee", description: "Strong drip coffee with sweetened condensed milk over ice", price: 4.50, image: healthyImages["berry-juice.webp"], category: "Drinks" },

  // ─── 31. THAI ORCHID ────────────────────────────────
  { id: 3101, restaurantId: 31, name: "Pad Thai", description: "Stir-fried rice noodles, egg, tofu or shrimp, bean sprouts, peanuts", price: 13.99, image: asianImages["asian5.webp"], category: "Noodles" },
  { id: 3102, restaurantId: 31, name: "Green Curry", description: "Coconut milk, green chilli paste, Thai eggplant, basil, jasmine rice", price: 14.99, image: asianImages["asian6.webp"], category: "Curries" },
  { id: 3103, restaurantId: 31, name: "Red Curry", description: "Creamy coconut red curry with bamboo shoots and bell peppers", price: 14.99, image: asianImages["asian7.webp"], category: "Curries" },
  { id: 3104, restaurantId: 31, name: "Tom Yum Soup", description: "Spicy lemongrass broth with shrimp, mushroom, galangal", price: 11.00, image: asianImages["asian8.webp"], category: "Soups" },
  { id: 3105, restaurantId: 31, name: "Som Tum Papaya Salad", description: "Shredded green papaya, tomatoes, peanuts, lime, fish sauce, chilli", price: 9.99, image: healthyImages["healthy-plate.webp"], category: "Salads" },
  { id: 3106, restaurantId: 31, name: "Mango Sticky Rice", description: "Sweet jasmine sticky rice with fresh mango and coconut cream", price: 7.50, image: healthyImages["fruit-bowl.webp"], category: "Desserts" },
  { id: 3107, restaurantId: 31, name: "Thai Iced Tea", description: "Spiced tea with condensed milk over ice", price: 4.00, image: healthyImages["orange-juice.webp"], category: "Drinks" },

  // ─── 32. RAMEN REBEL ────────────────────────────────
  { id: 3201, restaurantId: 32, name: "Tonkotsu Ramen", description: "Rich pork bone broth, chashu pork, soft egg, nori, bamboo", price: 14.99, image: koreanImages["ramen.webp"], category: "Ramen" },
  { id: 3202, restaurantId: 32, name: "Spicy Miso Ramen", description: "Spicy miso broth, ground pork, corn, butter, bean sprouts", price: 14.99, image: asianImages["asian9.webp"], category: "Ramen" },
  { id: 3203, restaurantId: 32, name: "Shoyu Ramen", description: "Clear soy-based broth, chicken, menma, soft-boiled egg", price: 13.99, image: asianImages["asian10.webp"], category: "Ramen" },
  { id: 3204, restaurantId: 32, name: "Vegan Ramen", description: "Mushroom dashi broth, tofu, bok choy, corn, sesame oil", price: 13.49, image: veganImages["vegan-ramen.webp"], category: "Ramen" },
  { id: 3205, restaurantId: 32, name: "Gyoza 6pcs", description: "Pan-fried pork and cabbage dumplings with dipping sauce", price: 7.99, image: asianImages["asian11.webp"], category: "Sides" },
  { id: 3206, restaurantId: 32, name: "Karaage Chicken", description: "Japanese fried chicken with kewpie mayo and lemon", price: 8.99, image: asianImages["asian12.webp"], category: "Sides" },
  { id: 3207, restaurantId: 32, name: "Chashu Extra", description: "Two extra slices of slow-braised pork belly", price: 3.50, image: asianImages["asian13.webp"], category: "Extras" },

  // ─── 33. GREEN GARDEN ───────────────────────────────
  { id: 3301, restaurantId: 33, name: "Caesar Salad", description: "Romaine, parmesan, croutons, Caesar dressing", price: 10.99, image: healthyImages["healthy-plate.webp"], category: "Salads" },
  { id: 3302, restaurantId: 33, name: "Greek Salad", description: "Tomatoes, cucumber, olives, feta, red onion, oregano", price: 11.99, image: healthyImages["egg-plate.webp"], category: "Salads" },
  { id: 3303, restaurantId: 33, name: "Quinoa Power Bowl", description: "Quinoa, roasted chickpeas, avocado, kale, lemon tahini", price: 13.99, image: healthyImages["smoothie-bowl.webp"], category: "Bowls" },
  { id: 3304, restaurantId: 33, name: "Avocado Buddha Bowl", description: "Brown rice, avocado, edamame, mango, sesame dressing", price: 14.99, image: healthyImages["sweet-bowl.webp"], category: "Bowls" },
  { id: 3305, restaurantId: 33, name: "Acai Bowl", description: "Acai, granola, banana, mixed berries, honey drizzle", price: 12.99, image: healthyImages["fruit-bowl.webp"], category: "Bowls" },
  { id: 3306, restaurantId: 33, name: "Green Smoothie", description: "Spinach, banana, mango, almond milk", price: 6.99, image: healthyImages["green-juice.webp"], category: "Drinks" },

  // ─── 34. BOWL & BLOOM ───────────────────────────────
  { id: 3401, restaurantId: 34, name: "Teriyaki Salmon Bowl", description: "Grilled salmon, jasmine rice, edamame, pickled ginger, sesame", price: 16.99, image: healthyImages["salmon-plate.webp"], category: "Protein Bowls" },
  { id: 3402, restaurantId: 34, name: "Falafel Grain Bowl", description: "Falafel, quinoa, roasted veg, hummus, tzatziki", price: 13.99, image: healthyImages["burger-bowl.webp"], category: "Protein Bowls" },
  { id: 3403, restaurantId: 34, name: "Smoked Chicken Bowl", description: "Smoked chicken, brown rice, kale, roasted sweet potato, tahini", price: 14.99, image: healthyImages["chicken-plate.webp"], category: "Protein Bowls" },
  { id: 3404, restaurantId: 34, name: "Kale and Beet Salad", description: "Massaged kale, roasted beets, goat cheese, candied walnuts", price: 11.99, image: healthyImages["healthy-plate.webp"], category: "Salads" },
  { id: 3405, restaurantId: 34, name: "Protein Smoothie", description: "Banana, peanut butter, oat milk, vanilla protein, cacao", price: 7.99, image: healthyImages["smoothie-bowl.webp"], category: "Drinks" },

  // ─── 35. JUICE & ROOTS ──────────────────────────────
  { id: 3501, restaurantId: 35, name: "Cold Press Green Juice", description: "Green apple, ginger, spinach, celery, cucumber", price: 7.99, image: healthyImages["green-juice.webp"], category: "Juices" },
  { id: 3502, restaurantId: 35, name: "Sunshine Juice", description: "Orange, carrot, turmeric, ginger, lemon", price: 7.50, image: healthyImages["orange-juice.webp"], category: "Juices" },
  { id: 3503, restaurantId: 35, name: "Berry Blend Smoothie", description: "Mixed berries, banana, coconut milk, chia seeds", price: 8.50, image: healthyImages["berry-juice.webp"], category: "Smoothies" },
  { id: 3504, restaurantId: 35, name: "Matcha Latte", description: "Ceremonial matcha, steamed oat milk, light honey", price: 5.99, image: healthyImages["watermelon-juice.webp"], category: "Hot Drinks" },
  { id: 3505, restaurantId: 35, name: "Veggie Wrap", description: "Hummus, roasted pepper, spinach, feta, whole wheat tortilla", price: 9.99, image: healthyImages["healthy-plate.webp"], category: "Food" },
  { id: 3506, restaurantId: 35, name: "Avocado Toast", description: "Sourdough, smashed avocado, everything bagel spice, lemon", price: 8.99, image: healthyImages["egg-plate.webp"], category: "Food" },

  // ─── 36. THE VEGAN TABLE ────────────────────────────
  { id: 3601, restaurantId: 36, name: "Jackfruit Pulled Burger", description: "BBQ jackfruit, coleslaw, pickles, vegan brioche bun", price: 13.99, image: veganImages["vegan-meal.webp"], category: "Mains" },
  { id: 3602, restaurantId: 36, name: "Mushroom Risotto", description: "Creamy arborio rice with porcini, truffle oil, fresh herbs", price: 14.99, image: veganImages["vegan-soup.webp"], category: "Mains" },
  { id: 3603, restaurantId: 36, name: "Lentil Shepherds Pie", description: "Spiced lentil filling topped with creamy mashed potato", price: 12.99, image: veganImages["vegan-soup2.webp"], category: "Mains" },
  { id: 3604, restaurantId: 36, name: "Roasted Cauliflower Steak", description: "Harissa-glazed cauliflower, chickpea puree, pomegranate", price: 15.00, image: veganImages["vegan-cauliflower.webp"], category: "Mains" },
  { id: 3605, restaurantId: 36, name: "Vegan Cheesecake", description: "Cashew-based cheesecake with blueberry compote", price: 7.99, image: veganImages["Vegan-bowl.webp"], category: "Desserts" },
  { id: 3606, restaurantId: 36, name: "Kombucha", description: "House-brewed ginger lemon kombucha 330ml", price: 4.50, image: healthyImages["green-juice.webp"], category: "Drinks" },

  // ─── 37. SPROUT KITCHEN ─────────────────────────────
  { id: 3701, restaurantId: 37, name: "Rainbow Grain Bowl", description: "Farro, roasted veg, avocado, pickled red cabbage, green tahini", price: 13.99, image: veganImages["Vegan-bowl.webp"], category: "Bowls" },
  { id: 3702, restaurantId: 37, name: "Tofu Scramble", description: "Spiced silken tofu, turmeric, peppers, spinach, sourdough toast", price: 10.99, image: veganImages["vegan-meal.webp"], category: "Breakfast" },
  { id: 3703, restaurantId: 37, name: "Sprouted Lentil Soup", description: "Hearty lentil and vegetable soup, warm spices, crusty bread", price: 8.99, image: veganImages["vegan-soup.webp"], category: "Soups" },
  { id: 3704, restaurantId: 37, name: "Tempeh BLT", description: "Smoky tempeh bacon, lettuce, tomato, vegan mayo, ciabatta", price: 11.99, image: veganImages["veggie-salad.webp"], category: "Sandwiches" },
  { id: 3705, restaurantId: 37, name: "Chia Pudding", description: "Chia seeds, coconut milk, mango coulis, toasted coconut", price: 6.99, image: veganImages["vegan-soup2.webp"], category: "Desserts" },

  // ─── 38. MORNING GLORY ──────────────────────────────
  { id: 3801, restaurantId: 38, name: "Full English Breakfast", description: "Eggs, bacon, sausages, baked beans, toast, mushrooms, tomato", price: 13.99, image: breakfastImages["breakfast1.webp"], category: "Breakfast Plates" },
  { id: 3802, restaurantId: 38, name: "Eggs Benedict", description: "Poached eggs, Canadian bacon, hollandaise on English muffin", price: 12.99, image: breakfastImages["breakfast2.webp"], category: "Breakfast Plates" },
  { id: 3803, restaurantId: 38, name: "Avocado Toast", description: "Smashed avocado, sourdough, poached egg, chilli flakes", price: 10.99, image: breakfastImages["breakfast3.webp"], category: "Toasts" },
  { id: 3804, restaurantId: 38, name: "French Toast", description: "Brioche in vanilla custard, maple syrup, fresh berries", price: 11.99, image: breakfastImages["breakfast4.webp"], category: "Toasts" },
  { id: 3805, restaurantId: 38, name: "Pancake Stack", description: "3 fluffy buttermilk pancakes, maple syrup, butter", price: 9.99, image: breakfastImages["breakfast5.webp"], category: "Pancakes and Waffles" },
  { id: 3806, restaurantId: 38, name: "Belgian Waffle", description: "Crispy waffle, whipped cream, fresh strawberries", price: 10.99, image: breakfastImages["breakfast6.webp"], category: "Pancakes and Waffles" },
  { id: 3807, restaurantId: 38, name: "Fresh Orange Juice", description: "Freshly squeezed orange juice, large", price: 4.99, image: healthyImages["orange-juice.webp"], category: "Drinks" },
  { id: 3808, restaurantId: 38, name: "Flat White", description: "Double espresso with steamed milk", price: 3.99, image: healthyImages["watermelon-juice.webp"], category: "Drinks" },

  // ─── 39. THE EGG SHOP ───────────────────────────────
  { id: 3901, restaurantId: 39, name: "Classic Omelette", description: "Three-egg omelette with ham, cheese and chives", price: 9.99, image: breakfastImages["breakfast1.webp"], category: "Omelettes" },
  { id: 3902, restaurantId: 39, name: "Veggie Omelette", description: "Spinach, mushrooms, peppers, onion, feta cheese", price: 10.50, image: breakfastImages["breakfast2.webp"], category: "Omelettes" },
  { id: 3903, restaurantId: 39, name: "Shakshuka", description: "Eggs poached in spiced tomato and pepper sauce, sourdough", price: 11.99, image: breakfastImages["breakfast3.webp"], category: "Egg Dishes" },
  { id: 3904, restaurantId: 39, name: "Scrambled Eggs on Toast", description: "Soft scrambled free-range eggs on thick sourdough", price: 8.50, image: breakfastImages["breakfast4.webp"], category: "Egg Dishes" },
  { id: 3905, restaurantId: 39, name: "Breakfast Sandwich", description: "Fried egg, bacon, cheddar, hash brown, brioche", price: 9.99, image: breakfastImages["breakfast5.webp"], category: "Sandwiches" },
  { id: 3906, restaurantId: 39, name: "Coffee", description: "Freshly brewed — flat white, latte or cappuccino", price: 3.50, image: healthyImages["watermelon-juice.webp"], category: "Drinks" },

  // ─── 40. WAFFLE WORLD ───────────────────────────────
  { id: 4001, restaurantId: 40, name: "Classic Waffle", description: "Golden Belgian waffle, whipped cream, maple syrup, butter", price: 8.99, image: dessertImages["Belgian-Waffles.webp"], category: "Sweet Waffles" },
  { id: 4002, restaurantId: 40, name: "Strawberry Dream Waffle", description: "Waffle, fresh strawberries, strawberry sauce, whipped cream", price: 10.99, image: breakfastImages["breakfast6.webp"], category: "Sweet Waffles" },
  { id: 4003, restaurantId: 40, name: "Nutella Banana Waffle", description: "Warm waffle with Nutella, banana slices, crushed hazelnuts", price: 11.50, image: dessertImages["choco-waffle.webp"], category: "Sweet Waffles" },
  { id: 4004, restaurantId: 40, name: "Chicken and Waffle", description: "Crispy fried chicken, buttermilk waffle, honey butter, hot sauce", price: 14.99, image: dessertImages["Belgian-Waffles.webp"], category: "Savoury Waffles" },
  { id: 4005, restaurantId: 40, name: "Smoked Salmon Waffle", description: "Crispy waffle, cream cheese, smoked salmon, capers, dill", price: 13.99, image: healthyImages["salmon-plate.webp"], category: "Savoury Waffles" },
  { id: 4006, restaurantId: 40, name: "Hot Chocolate", description: "Rich thick hot chocolate with marshmallows", price: 4.50, image: healthyImages["berry-juice.webp"], category: "Drinks" },

  // ─── 41. PANCAKE HOUSE ──────────────────────────────
  { id: 4101, restaurantId: 41, name: "Buttermilk Stack", description: "5 tall buttermilk pancakes, salted butter, pure maple syrup", price: 10.99, image: breakfastImages["breakfast5.webp"], category: "Pancakes" },
  { id: 4102, restaurantId: 41, name: "Blueberry Pancakes", description: "Fluffy pancakes loaded with fresh blueberries and blueberry sauce", price: 12.50, image: breakfastImages["breakfast4.webp"], category: "Pancakes" },
  { id: 4103, restaurantId: 41, name: "Protein Pancakes", description: "High-protein pancakes with banana, honey, nut butter", price: 13.50, image: breakfastImages["breakfast3.webp"], category: "Pancakes" },
  { id: 4104, restaurantId: 41, name: "Crepe Suzette", description: "Thin crepes flambeed in orange-butter sauce", price: 11.00, image: breakfastImages["breakfast6.webp"], category: "Crepes" },
  { id: 4105, restaurantId: 41, name: "Bacon and Egg Side", description: "Two rashers of streaky bacon and two fried eggs", price: 5.50, image: breakfastImages["breakfast1.webp"], category: "Sides" },
  { id: 4106, restaurantId: 41, name: "Fresh Fruit Smoothie", description: "Mixed tropical fruits, orange juice, honey", price: 5.99, image: healthyImages["fruit-bowl.webp"], category: "Drinks" },

  // ─── 42. SWEET DREAMS ───────────────────────────────
  { id: 4201, restaurantId: 42, name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center, vanilla ice cream", price: 8.99, image: dessertImages["brownie.webp"], category: "Cakes" },
  { id: 4202, restaurantId: 42, name: "New York Cheesecake", description: "Classic creamy cheesecake with berry compote", price: 7.99, image: dessertImages["cheesecake.webp"], category: "Cakes" },
  { id: 4203, restaurantId: 42, name: "Creme Brulee", description: "Classic French vanilla custard with caramelized sugar top", price: 7.99, image: dessertImages["cheesecake1.webp"], category: "Classics" },
  { id: 4204, restaurantId: 42, name: "Tiramisu", description: "Mascarpone, espresso-soaked ladyfingers, cocoa dusting", price: 8.49, image: dessertImages["tiramisu.webp"], category: "Classics" },
  { id: 4205, restaurantId: 42, name: "Gelato Trio", description: "3 scoops seasonal gelato — pistachio, hazelnut, stracciatella", price: 6.99, image: dessertImages["cheesecake2.webp"], category: "Ice Cream" },
  { id: 4206, restaurantId: 42, name: "Banana Split", description: "Banana, 3 scoops ice cream, hot fudge, whipped cream, cherry", price: 9.99, image: dessertImages["eclairs.webp"], category: "Ice Cream" },
  { id: 4207, restaurantId: 42, name: "Chocolate Chip Cookies 6pcs", description: "Warm freshly baked chocolate chip cookies", price: 5.99, image: dessertImages["brownie.webp"], category: "Cookies and Pastries" },
  { id: 4208, restaurantId: 42, name: "Cinnamon Roll", description: "Freshly baked with cream cheese frosting", price: 4.99, image: dessertImages["churros.webp"], category: "Cookies and Pastries" },

  // ─── 43. CAKE & BAKE ────────────────────────────────
  { id: 4301, restaurantId: 43, name: "Victoria Sponge Slice", description: "Classic Victoria sponge with jam, cream, dusted icing sugar", price: 5.50, image: dessertImages["cheesecake.webp"], category: "Cake Slices" },
  { id: 4302, restaurantId: 43, name: "Red Velvet Slice", description: "Moist red velvet with tangy cream cheese frosting", price: 5.99, image: dessertImages["cheesecake1.webp"], category: "Cake Slices" },
  { id: 4303, restaurantId: 43, name: "Carrot Cake Slice", description: "Spiced carrot cake, walnut, cream cheese frosting", price: 5.50, image: dessertImages["cheesecake2.webp"], category: "Cake Slices" },
  { id: 4304, restaurantId: 43, name: "Lemon Drizzle Slice", description: "Zesty lemon sponge with crunchy lemon glaze", price: 5.00, image: dessertImages["eclairs.webp"], category: "Cake Slices" },
  { id: 4305, restaurantId: 43, name: "Whole Celebration Cake", description: "Custom 8-inch layered cake — chocolate, vanilla, or red velvet", price: 42.00, image: dessertImages["tiramisu.webp"], category: "Whole Cakes" },
  { id: 4306, restaurantId: 43, name: "Croissant", description: "Flaky buttery croissant, baked fresh daily", price: 3.50, image: dessertImages["churros.webp"], category: "Pastries" },
  { id: 4307, restaurantId: 43, name: "Brownie", description: "Fudgy dark chocolate brownie with sea salt flakes", price: 4.00, image: dessertImages["brownie.webp"], category: "Pastries" },

  // ─── 44. GELATO ITALIANO ────────────────────────────
  { id: 4401, restaurantId: 44, name: "Single Scoop", description: "One scoop of house-made gelato in a waffle cone", price: 3.99, image: dessertImages["cheesecake1.webp"], category: "Gelato" },
  { id: 4402, restaurantId: 44, name: "Double Scoop", description: "Two generous scoops in a crispy waffle cone", price: 6.50, image: dessertImages["cheesecake2.webp"], category: "Gelato" },
  { id: 4403, restaurantId: 44, name: "Gelato Tasting Cup", description: "Five mini scoops — perfect for tasting seasonal specials", price: 9.99, image: dessertImages["cheesecake.webp"], category: "Gelato" },
  { id: 4404, restaurantId: 44, name: "Affogato", description: "Double espresso poured over vanilla gelato", price: 6.00, image: dessertImages["tiramisu.webp"], category: "Specials" },
  { id: 4405, restaurantId: 44, name: "Gelato Sandwich", description: "Your choice of gelato sandwiched in a freshly baked brioche", price: 7.50, image: dessertImages["eclairs.webp"], category: "Specials" },
  { id: 4406, restaurantId: 44, name: "Sorbet Cup", description: "Refreshing dairy-free sorbet — lemon, mango, or raspberry", price: 4.99, image: dessertImages["cheesecake2.webp"], category: "Sorbet" },

  // ─── 45. DONUT FACTORY ──────────────────────────────
  { id: 4501, restaurantId: 45, name: "Glazed Dozen", description: "12 classic glazed donuts, still warm from the fryer", price: 14.99, image: dessertImages["eclairs.webp"], category: "Dozens" },
  { id: 4502, restaurantId: 45, name: "Assorted Half Dozen", description: "6 mixed donuts — glazed, chocolate, sprinkles, jelly, maple, cruller", price: 8.99, image: dessertImages["brownie.webp"], category: "Dozens" },
  { id: 4503, restaurantId: 45, name: "Chocolate Frosted Donut", description: "Fluffy ring donut with rich chocolate frosting", price: 2.50, image: dessertImages["choco-waffle.webp"], category: "Single Donuts" },
  { id: 4504, restaurantId: 45, name: "Jelly Filled Donut", description: "Pillowy donut filled with strawberry jam, dusted icing sugar", price: 2.50, image: dessertImages["cheesecake1.webp"], category: "Single Donuts" },
  { id: 4505, restaurantId: 45, name: "Maple Bacon Donut", description: "Maple glaze and crispy bacon on a raised yeast donut", price: 3.50, image: dessertImages["eclairs.webp"], category: "Single Donuts" },
  { id: 4506, restaurantId: 45, name: "Coffee", description: "Freshly brewed drip coffee — free refills all day", price: 2.99, image: healthyImages["watermelon-juice.webp"], category: "Drinks" },

  // ─── 46. FALAFEL HOUSE ──────────────────────────────
  { id: 4601, restaurantId: 46, name: "Falafel Wrap", description: "Crispy falafel, hummus, tabbouleh, tomato, tahini in flatbread", price: 9.99, image: veganImages["vegan-meal.webp"], category: "Wraps" },
  { id: 4602, restaurantId: 46, name: "Falafel Plate", description: "6 pieces of falafel with hummus, pita, salad, pickles", price: 12.99, image: healthyImages["healthy-plate.webp"], category: "Plates" },
  { id: 4603, restaurantId: 46, name: "Hummus with Pita", description: "Creamy house hummus, warm pita, olive oil drizzle, paprika", price: 7.50, image: veganImages["veggie-salad.webp"], category: "Sides" },
  { id: 4604, restaurantId: 46, name: "Fattoush Salad", description: "Crispy pita, lettuce, tomato, cucumber, radish, sumac dressing", price: 8.99, image: healthyImages["egg-plate.webp"], category: "Salads" },
  { id: 4605, restaurantId: 46, name: "Tabbouleh", description: "Bulgur wheat, parsley, mint, tomato, lemon, olive oil", price: 6.50, image: veganImages["Vegan-bowl.webp"], category: "Salads" },
  { id: 4606, restaurantId: 46, name: "Mint Lemonade", description: "Freshly squeezed lemon with mint syrup and sparkling water", price: 4.00, image: healthyImages["watermelon-juice.webp"], category: "Drinks" },

  // ─── 47. HUMMUS & MORE ──────────────────────────────
  { id: 4701, restaurantId: 47, name: "Hummus Masabacha", description: "Warm hummus topped with whole chickpeas, olive oil, spices", price: 9.99, image: veganImages["veggie-salad.webp"], category: "Hummus" },
  { id: 4702, restaurantId: 47, name: "Hummus with Mushrooms", description: "Creamy hummus, sauteed spiced mushrooms, fresh herbs", price: 11.50, image: veganImages["vegan-soup.webp"], category: "Hummus" },
  { id: 4703, restaurantId: 47, name: "Sabich Sandwich", description: "Eggplant, egg, hummus, Israeli salad, amba mango sauce, pita", price: 10.99, image: veganImages["vegan-meal.webp"], category: "Sandwiches" },
  { id: 4704, restaurantId: 47, name: "Shakshuka", description: "Eggs baked in spiced tomato sauce, feta, fresh herbs", price: 12.00, image: breakfastImages["breakfast3.webp"], category: "Mains" },
  { id: 4705, restaurantId: 47, name: "Pita Bread 2pcs", description: "Fresh baked pita bread, warm and fluffy", price: 2.50, image: italianImages["flatbread-pizza.webp"], category: "Sides" },
  { id: 4706, restaurantId: 47, name: "Fresh Lemonade", description: "Freshly squeezed lemonade with mint", price: 3.99, image: healthyImages["watermelon-juice.webp"], category: "Drinks" },

  // ─── 48. SHAWARMA KING ──────────────────────────────
  { id: 4801, restaurantId: 48, name: "Chicken Shawarma Wrap", description: "Rotisserie chicken, garlic sauce, pickles, fries in flatbread", price: 10.99, image: veganImages["vegan-meal.webp"], category: "Wraps" },
  { id: 4802, restaurantId: 48, name: "Lamb Shawarma Wrap", description: "Spiced lamb, tahini, tomato, red onion, sumac", price: 12.99, image: healthyImages["chicken-plate.webp"], category: "Wraps" },
  { id: 4803, restaurantId: 48, name: "Shawarma Plate", description: "Mixed chicken and lamb, rice, salad, hummus, pita", price: 15.99, image: healthyImages["healthy-plate.webp"], category: "Plates" },
  { id: 4804, restaurantId: 48, name: "Fattoush Salad", description: "Crispy pita salad with sumac dressing and pomegranate", price: 7.50, image: veganImages["veggie-salad.webp"], category: "Sides" },
  { id: 4805, restaurantId: 48, name: "Garlic Dip", description: "Fluffy whipped toum garlic sauce with pita chips", price: 3.50, image: veganImages["vegan-soup2.webp"], category: "Sides" },
  { id: 4806, restaurantId: 48, name: "Jallab Juice", description: "Rose water, grape juice, and pine nuts over ice", price: 4.00, image: healthyImages["berry-juice.webp"], category: "Drinks" },

  // ─── 49. THE CLAM BAR ───────────────────────────────
  { id: 4901, restaurantId: 49, name: "Clam Chowder", description: "Creamy chowder with clams, potato, bacon, oyster crackers", price: 10.99, image: asianImages["asian1.webp"], category: "Soups" },
  { id: 4902, restaurantId: 49, name: "Steamed Clams", description: "Fresh littleneck clams steamed in white wine, garlic, butter", price: 17.99, image: asianImages["asian2.webp"], category: "Shellfish" },
  { id: 4903, restaurantId: 49, name: "Grilled Swordfish", description: "Atlantic swordfish steak, lemon-caper butter, seasonal veg", price: 24.99, image: healthyImages["salmon-plate.webp"], category: "Fish Mains" },
  { id: 4904, restaurantId: 49, name: "Shrimp Cocktail 6pcs", description: "Chilled jumbo shrimp, zesty cocktail sauce, lemon wedge", price: 14.99, image: asianImages["asian3.webp"], category: "Starters" },
  { id: 4905, restaurantId: 49, name: "Fish and Chips", description: "Beer-battered cod fillet, thick-cut chips, mushy peas, tartare", price: 16.99, image: asianImages["asian4.webp"], category: "Fish Mains" },
  { id: 4906, restaurantId: 49, name: "Oysters 6pcs", description: "Freshly shucked oysters on the half shell with mignonette", price: 18.00, image: asianImages["asian5.webp"], category: "Shellfish" },

  // ─── 50. LOBSTER SHACK ──────────────────────────────
  { id: 5001, restaurantId: 50, name: "Cold Lobster Roll", description: "Cold Maine lobster salad, celery, mayo, toasted split-top bun", price: 28.99, image: healthyImages["salmon-plate.webp"], category: "Rolls" },
  { id: 5002, restaurantId: 50, name: "Hot Butter Lobster Roll", description: "Warm lobster meat in drawn butter, split-top bun", price: 30.99, image: asianImages["asian6.webp"], category: "Rolls" },
  { id: 5003, restaurantId: 50, name: "Whole Steamed Lobster", description: "1.25lb Maine lobster, drawn butter, lemon, corn, red potato", price: 45.00, image: asianImages["asian7.webp"], category: "Whole Lobster" },
  { id: 5004, restaurantId: 50, name: "Lobster Bisque", description: "Rich velvety lobster bisque, sherry, cream, chive oil", price: 12.99, image: asianImages["asian8.webp"], category: "Soups" },
  { id: 5005, restaurantId: 50, name: "Classic Coleslaw", description: "Classic creamy New England-style coleslaw", price: 4.00, image: healthyImages["healthy-plate.webp"], category: "Sides" },
  { id: 5006, restaurantId: 50, name: "Blueberry Lemonade", description: "Freshly squeezed lemonade with blueberry puree", price: 4.50, image: healthyImages["berry-juice.webp"], category: "Drinks" },

  // ─── 51. CLASSIC DINER ──────────────────────────────
  { id: 5101, restaurantId: 51, name: "All-Day Breakfast", description: "Two eggs any style, bacon, sausage, hash browns, toast", price: 10.99, image: breakfastImages["breakfast1.webp"], category: "Breakfast" },
  { id: 5102, restaurantId: 51, name: "Pancakes and Bacon", description: "Short stack of three pancakes with crispy bacon strips", price: 9.50, image: breakfastImages["breakfast5.webp"], category: "Breakfast" },
  { id: 5103, restaurantId: 51, name: "Diner Cheeseburger", description: "Classic smash patty, American cheese, mustard, pickles, onion", price: 10.99, image: burgerImages["burger1.webp"], category: "Burgers" },
  { id: 5104, restaurantId: 51, name: "Patty Melt", description: "Two smash patties, Swiss cheese, caramelized onions, rye bread", price: 12.99, image: burgerImages["burger4.webp"], category: "Burgers" },
  { id: 5105, restaurantId: 51, name: "Club Sandwich", description: "Triple-decker with turkey, bacon, egg, lettuce, tomato, mayo", price: 11.99, image: burgerImages["burger6.webp"], category: "Sandwiches" },
  { id: 5106, restaurantId: 51, name: "Meatloaf Dinner", description: "Classic meatloaf, mashed potatoes, green beans, brown gravy", price: 13.99, image: burgerImages["burger2.webp"], category: "Mains" },
  { id: 5107, restaurantId: 51, name: "Cherry Pie Slice", description: "House-made cherry pie with flaky crust, vanilla ice cream", price: 5.99, image: dessertImages["cheesecake.webp"], category: "Desserts" },
  { id: 5108, restaurantId: 51, name: "Bottomless Coffee", description: "Freshly brewed drip coffee — free refills all day", price: 2.99, image: healthyImages["watermelon-juice.webp"], category: "Drinks" },

  // ─── 52. BBQ REPUBLIC ───────────────────────────────
  { id: 5201, restaurantId: 52, name: "Beef Brisket Half Pound", description: "12-hour smoked brisket, bark, tender smoke ring", price: 16.99, image: burgerImages["burger2.webp"], category: "Smoked Meats" },
  { id: 5202, restaurantId: 52, name: "Baby Back Ribs Half Rack", description: "St. Louis ribs, dry rub, smoked low and slow, house BBQ sauce", price: 19.99, image: burgerImages["burger3.webp"], category: "Smoked Meats" },
  { id: 5203, restaurantId: 52, name: "Pulled Pork Sandwich", description: "Slow-smoked pulled pork, tangy slaw, brioche bun, pickles", price: 11.99, image: burgerImages["burger1.webp"], category: "Sandwiches" },
  { id: 5204, restaurantId: 52, name: "BBQ Platter for Two", description: "Brisket, ribs, pulled pork, two sides, cornbread — feeds two", price: 38.00, image: burgerImages["burger4.webp"], category: "Platters" },
  { id: 5205, restaurantId: 52, name: "Mac and Cheese", description: "Three-cheese baked mac and cheese with toasted breadcrumb top", price: 5.99, image: burgerImages["burger5.webp"], category: "Sides" },
  { id: 5206, restaurantId: 52, name: "Cornbread", description: "Skillet-baked cornbread with honey butter", price: 3.99, image: breakfastImages["breakfast4.webp"], category: "Sides" },
  { id: 5207, restaurantId: 52, name: "Baked Beans", description: "Smoky molasses baked beans with bacon", price: 4.50, image: burgerImages["burger6.webp"], category: "Sides" },
  { id: 5208, restaurantId: 52, name: "Sweet Tea", description: "Southern-style sweet iced tea, large", price: 3.00, image: healthyImages["watermelon-juice.webp"], category: "Drinks" },
];