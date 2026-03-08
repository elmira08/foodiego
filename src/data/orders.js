// Past orders mock data
// In a real app this would come from a backend API per logged-in user

export const orders = [
  {
    id: "ORD-001",
    restaurantName: "Burger Palace",
    date: "2024-12-20",
    status: "Delivered",
    total: 22.97,
    items: [
      { name: "Classic Cheeseburger", quantity: 2, price: 9.99 },
      { name: "Crispy Fries", quantity: 1, price: 3.99 },
    ],
  },
  {
    id: "ORD-002",
    restaurantName: "Pizza Heaven",
    date: "2024-12-18",
    status: "Delivered",
    total: 30.98,
    items: [
      { name: "Pepperoni Pizza", quantity: 1, price: 15.99 },
      { name: "Margherita Pizza", quantity: 1, price: 13.99 },
      { name: "Garlic Bread", quantity: 1, price: 4.99 },
    ],
  },
  {
    id: "ORD-003",
    restaurantName: "Sushi World",
    date: "2024-12-15",
    status: "Delivered",
    total: 23.98,
    items: [
      { name: "Salmon Roll", quantity: 1, price: 14.99 },
      { name: "Tuna Nigiri", quantity: 1, price: 8.99 },
    ],
  },
];