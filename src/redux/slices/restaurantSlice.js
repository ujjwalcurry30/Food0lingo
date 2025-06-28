import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: [
    {
      id: 1,
      name: "Spice Garden",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "30-35 min",
      distance: 2.5,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Butter Chicken",
          description: "Tender chicken in a rich, creamy tomato-based curry",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 120,
          isBestseller: true
        },
        {
          id: 2,
          name: "Biryani",
          description: "Fragrant basmati rice cooked with spices and your choice of protein",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 95,
          isBestseller: true
        },
        {
          id: 3,
          name: "Naan",
          description: "Freshly baked tandoor bread",
          price: 49,
          category: "Breads",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Paneer Butter Masala",
          description: "Cottage cheese cubes in creamy tomato gravy",
          price: 259,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 5,
          name: "Tandoori Chicken",
          description: "Chicken marinated in yogurt and spices, roasted in tandoor",
          price: 349,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 100,
          isBestseller: true
        },
        {
          id: 6,
          name: "Dal Tadka",
          description: "Yellow lentils tempered with ghee and spices",
          price: 159,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Jeera Rice",
          description: "Basmati rice flavored with cumin seeds",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 8,
          name: "Gulab Jamun",
          description: "Soft milk-solid balls soaked in sugar syrup",
          price: 79,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 95,
          isBestseller: true
        },
        {
          id: 9,
          name: "Raita",
          description: "Yogurt with cucumber and spices",
          price: 59,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 10,
          name: "Aloo Gobi",
          description: "Potato and cauliflower cooked with Indian spices",
          price: 179,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 11,
          name: "Chicken Tikka Masala",
          description: "Chicken tikka in spicy tomato sauce",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 110
        },
        {
          id: 12,
          name: "Samosa",
          description: "Crispy pastry with spicy potato filling",
          price: 39,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 120,
          isBestseller: true
        },
        {
          id: 13,
          name: "Lassi",
          description: "Sweet yogurt-based drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Palak Paneer",
          description: "Cottage cheese in spinach gravy",
          price: 229,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 15,
          name: "Rasgulla",
          description: "Soft, spongy cheese balls in sugar syrup",
          price: 69,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 2,
      name: "Pasta Paradise",
      cuisine: "Italian",
      rating: 4.3,
      deliveryTime: "25-30 min",
      distance: 1.8,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Garlic Bread",
          description: "Crispy bread topped with garlic butter and herbs",
          price: 149,
          category: "Starters",
          image: "https://therecipecritic.com/wp-content/uploads/2020/02/cheesy_garlic_bread.jpg",
          popularity: 85,
          isBestseller: true
        },
        {
          id: 2,
          name: "Margherita Pizza",
          description: "Classic pizza with tomato sauce, mozzarella, and basil",
          price: 299,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 110,
          isBestseller: true
        },
        {
          id: 3,
          name: "Spaghetti Carbonara",
          description: "Pasta with creamy egg sauce, pancetta, and parmesan",
          price: 349,
          category: "Pasta",
          image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 4,
          name: "Penne Arrabbiata",
          description: "Penne pasta in spicy tomato sauce",
          price: 279,
          category: "Pasta",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Fettuccine Alfredo",
          description: "Fettuccine pasta in creamy Alfredo sauce",
          price: 299,
          category: "Pasta",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Four Cheese Pizza",
          description: "Pizza with mozzarella, cheddar, parmesan, and blue cheese",
          price: 349,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 7,
          name: "Bruschetta",
          description: "Grilled bread topped with tomatoes, garlic, and basil",
          price: 129,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 8,
          name: "Minestrone Soup",
          description: "Classic Italian vegetable soup",
          price: 149,
          category: "Soups",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 9,
          name: "Tiramisu",
          description: "Coffee-flavored Italian dessert",
          price: 199,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 95,
          isBestseller: true
        },
        {
          id: 10,
          name: "Caprese Salad",
          description: "Salad with mozzarella, tomatoes, and basil",
          price: 179,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 65
        },
        {
          id: 11,
          name: "Lasagna",
          description: "Layered pasta with meat, cheese, and tomato sauce",
          price: 329,
          category: "Pasta",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 12,
          name: "Chicken Piccata",
          description: "Chicken breast in lemon-caper sauce",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 13,
          name: "Risotto",
          description: "Creamy Italian rice dish with mushrooms",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Panna Cotta",
          description: "Chilled Italian dessert with berry sauce",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Espresso",
          description: "Strong Italian coffee shot",
          price: 79,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.4,
      deliveryTime: "35-40 min",
      distance: 3.2,
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Dim Sum Platter",
          description: "Assortment of steamed dumplings",
          price: 249,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 90,
          isBestseller: true
        },
        {
          id: 2,
          name: "Kung Pao Chicken",
          description: "Spicy diced chicken with peanuts and vegetables",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 85,
          isBestseller: true
        },
        {
          id: 3,
          name: "Fried Rice",
          description: "Classic Chinese fried rice with vegetables",
          price: 199,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 4,
          name: "Spring Rolls",
          description: "Crispy rolls stuffed with vegetables",
          price: 149,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Sweet and Sour Chicken",
          description: "Chicken in tangy sweet and sour sauce",
          price: 279,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Chilli Paneer",
          description: "Paneer tossed in spicy chilli sauce",
          price: 199,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 7,
          name: "Hot and Sour Soup",
          description: "Spicy and tangy soup with vegetables",
          price: 129,
          category: "Soups",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 8,
          name: "Manchurian Gravy",
          description: "Vegetable balls in spicy Manchurian sauce",
          price: 189,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Schezwan Noodles",
          description: "Spicy noodles tossed in Schezwan sauce",
          price: 159,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 95
        },
        {
          id: 10,
          name: "Egg Fried Rice",
          description: "Fried rice with scrambled eggs and veggies",
          price: 179,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 11,
          name: "Lemon Chicken",
          description: "Crispy chicken tossed in lemon sauce",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 12,
          name: "Hakka Noodles",
          description: "Stir-fried noodles with vegetables",
          price: 149,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 13,
          name: "Chilli Garlic Potatoes",
          description: "Crispy potatoes tossed in chilli garlic sauce",
          price: 139,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Steamed Wontons",
          description: "Dumplings filled with chicken or veggies",
          price: 159,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Lychee Ice Tea",
          description: "Refreshing iced tea with lychee flavor",
          price: 79,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        }
      ]
    },
    {
      id: 4,
      name: "Sushi Master",
      cuisine: "Japanese",
      rating: 4.6,
      deliveryTime: "30-35 min",
      distance: 2.1,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "California Roll",
          description: "Crab, avocado, and cucumber roll",
          price: 399,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 95,
          isBestseller: true
        },
        {
          id: 2,
          name: "Miso Soup",
          description: "Traditional Japanese soup with tofu and seaweed",
          price: 149,
          category: "Soups",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 3,
          name: "Tempura Roll",
          description: "Crispy tempura shrimp roll with spicy mayo",
          price: 449,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 4,
          name: "Tuna Sashimi",
          description: "Fresh slices of tuna served with soy sauce",
          price: 499,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Ebi Tempura",
          description: "Crispy fried shrimp tempura",
          price: 349,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Chicken Teriyaki",
          description: "Grilled chicken glazed with teriyaki sauce",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 7,
          name: "Edamame",
          description: "Steamed young soybeans sprinkled with salt",
          price: 129,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 8,
          name: "Salmon Roll",
          description: "Sushi roll with fresh salmon and avocado",
          price: 399,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 95
        },
        {
          id: 9,
          name: "Chicken Katsu",
          description: "Breaded and fried chicken cutlet",
          price: 279,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 10,
          name: "Tamago Nigiri",
          description: "Sweet Japanese omelette over rice",
          price: 199,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 11,
          name: "Seaweed Salad",
          description: "Salad with marinated seaweed and sesame",
          price: 149,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 12,
          name: "Gyoza",
          description: "Pan-fried Japanese dumplings",
          price: 179,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 13,
          name: "Matcha Ice Cream",
          description: "Green tea flavored ice cream",
          price: 129,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 14,
          name: "Shrimp Tempura Roll",
          description: "Sushi roll with tempura shrimp and cucumber",
          price: 449,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 15,
          name: "Yuzu Lemonade",
          description: "Japanese citrus lemonade",
          price: 99,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 5,
      name: "Bombay Bites",
      cuisine: "Street Food",
      rating: 4.2,
      deliveryTime: "20-25 min",
      distance: 1.2,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Vada Pav",
          description: "Spicy potato fritter in a bun, Mumbai style",
          price: 49,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100,
          isBestseller: true
        },
        {
          id: 2,
          name: "Pav Bhaji",
          description: "Mixed vegetable curry with buttered buns",
          price: 99,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 3,
          name: "Sev Puri",
          description: "Crispy puris topped with potatoes, chutneys, and sev",
          price: 59,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Dabeli",
          description: "Spicy potato mixture in a bun, garnished with pomegranate",
          price: 49,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Misal Pav",
          description: "Spicy sprouted bean curry with pav",
          price: 89,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Bombay Sandwich",
          description: "Grilled sandwich with veggies and chutney",
          price: 69,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 7,
          name: "Ragda Pattice",
          description: "Potato patties topped with white pea curry",
          price: 79,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Kanda Bhajiya",
          description: "Onion fritters served with chutney",
          price: 59,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 9,
          name: "Falooda",
          description: "Sweet dessert drink with vermicelli and ice cream",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 10,
          name: "Bombay Cutting Chai",
          description: "Strong, sweet tea served in a glass",
          price: 19,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 11,
          name: "Batata Vada",
          description: "Spicy potato fritter coated in gram flour",
          price: 39,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 12,
          name: "Kulfi",
          description: "Traditional Indian ice cream with pistachios",
          price: 59,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Sabudana Vada",
          description: "Crispy sago and potato fritters",
          price: 69,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 14,
          name: "Thums Up",
          description: "Popular Indian cola beverage",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 15,
          name: "Sheera",
          description: "Semolina pudding with ghee and nuts",
          price: 49,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 6,
      name: "Tandoori Nights",
      cuisine: "North Indian",
      rating: 4.7,
      deliveryTime: "40-45 min",
      distance: 4.0,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Paneer Tikka",
          description: "Grilled cottage cheese cubes marinated in spices",
          price: 199,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90,
          isBestseller: true
        },
        {
          id: 2,
          name: "Dal Makhani",
          description: "Slow-cooked black lentils in creamy gravy",
          price: 179,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 3,
          name: "Chicken Seekh Kebab",
          description: "Minced chicken skewers cooked in tandoor",
          price: 249,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Bhuna Gosht",
          description: "Spicy mutton curry cooked with onions and tomatoes",
          price: 329,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Tandoori Roti",
          description: "Whole wheat bread cooked in tandoor",
          price: 39,
          category: "Breads",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Chicken Tikka",
          description: "Boneless chicken marinated and grilled",
          price: 279,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 7,
          name: "Paneer Lababdar",
          description: "Paneer cubes in rich tomato gravy",
          price: 229,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Butter Naan",
          description: "Soft naan bread brushed with butter",
          price: 49,
          category: "Breads",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 9,
          name: "Murg Malai Tikka",
          description: "Creamy chicken tikka cooked in tandoor",
          price: 299,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 10,
          name: "Jeera Rice",
          description: "Basmati rice with cumin seeds",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Gajar Halwa",
          description: "Carrot pudding with ghee and nuts",
          price: 89,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 12,
          name: "Lassi",
          description: "Sweet yogurt-based drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 13,
          name: "Dal Fry",
          description: "Yellow lentils cooked with spices",
          price: 159,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Onion Salad",
          description: "Sliced onions with lemon and masala",
          price: 29,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Phirni",
          description: "Rice pudding flavored with cardamom",
          price: 69,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 7,
      name: "Burger Hub",
      cuisine: "American",
      rating: 4.1,
      deliveryTime: "25-30 min",
      distance: 2.0,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Classic Cheeseburger",
          description: "Juicy beef patty with cheese, lettuce, and tomato",
          price: 229,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
          popularity: 110,
          isBestseller: true
        },
        {
          id: 2,
          name: "Veggie Burger",
          description: "Grilled vegetable patty with fresh toppings",
          price: 199,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Chicken Burger",
          description: "Crispy chicken patty with lettuce and mayo",
          price: 249,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 4,
          name: "French Fries",
          description: "Crispy golden potato fries",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 120
        },
        {
          id: 5,
          name: "Onion Rings",
          description: "Battered and fried onion rings",
          price: 109,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 6,
          name: "BBQ Burger",
          description: "Beef patty with BBQ sauce and cheese",
          price: 269,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Cheese Fries",
          description: "Fries topped with melted cheese",
          price: 129,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 8,
          name: "Veggie Nuggets",
          description: "Crispy vegetable nuggets",
          price: 99,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 9,
          name: "Chicken Popcorn",
          description: "Bite-sized crispy chicken pieces",
          price: 139,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 10,
          name: "Chocolate Shake",
          description: "Thick chocolate milkshake",
          price: 119,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 11,
          name: "Strawberry Shake",
          description: "Fresh strawberry milkshake",
          price: 129,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 12,
          name: "Coleslaw",
          description: "Creamy cabbage and carrot salad",
          price: 69,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 13,
          name: "Paneer Burger",
          description: "Grilled paneer patty with veggies",
          price: 199,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 14,
          name: "Ice Cream Sundae",
          description: "Vanilla ice cream with chocolate sauce and nuts",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 15,
          name: "Coke",
          description: "Chilled Coca-Cola beverage",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        }
      ]
    },
    {
      id: 8,
      name: "The Greek Table",
      cuisine: "Greek",
      rating: 4.3,
      deliveryTime: "30-35 min",
      distance: 2.7,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Greek Salad",
          description: "Fresh salad with feta, olives, and veggies",
          price: 159,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70,
          isBestseller: true
        },
        {
          id: 2,
          name: "Chicken Gyro",
          description: "Grilled chicken wrapped in pita with tzatziki",
          price: 249,
          category: "Wraps",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Moussaka",
          description: "Baked eggplant and minced meat casserole",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Souvlaki",
          description: "Grilled meat skewers served with pita",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 5,
          name: "Tzatziki",
          description: "Yogurt dip with cucumber and garlic",
          price: 99,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 6,
          name: "Spanakopita",
          description: "Spinach and feta cheese pastry",
          price: 129,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Greek Fries",
          description: "Potato fries with feta and oregano",
          price: 109,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 8,
          name: "Baklava",
          description: "Sweet pastry with nuts and honey",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 9,
          name: "Dolmades",
          description: "Stuffed grape leaves with rice and herbs",
          price: 119,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 10,
          name: "Lamb Chops",
          description: "Grilled lamb chops with herbs",
          price: 349,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 11,
          name: "Feta Cheese Pie",
          description: "Savory pie with feta cheese filling",
          price: 139,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 12,
          name: "Greek Yogurt",
          description: "Thick yogurt with honey and walnuts",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 13,
          name: "Loukoumades",
          description: "Greek honey doughnuts",
          price: 89,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Orange Juice",
          description: "Freshly squeezed orange juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 15,
          name: "Greek Coffee",
          description: "Traditional strong Greek coffee",
          price: 69,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 9,
      name: "Saffron Lounge",
      cuisine: "Mughlai",
      rating: 4.5,
      deliveryTime: "35-40 min",
      distance: 3.5,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Mutton Rogan Josh",
          description: "Aromatic mutton curry with Kashmiri spices",
          price: 349,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 2,
          name: "Shahi Tukda",
          description: "Rich bread pudding with saffron and nuts",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 50
        },
        {
          id: 3,
          name: "Murgh Musallam",
          description: "Whole chicken marinated and cooked in Mughlai spices",
          price: 399,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Nihari Gosht",
          description: "Slow-cooked mutton stew with rich spices",
          price: 349,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Chicken Korma",
          description: "Chicken cooked in creamy cashew gravy",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Roomali Roti",
          description: "Thin, soft roti cooked on an inverted tawa",
          price: 39,
          category: "Breads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 7,
          name: "Mutton Keema",
          description: "Minced mutton cooked with peas and spices",
          price: 279,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Sheermal",
          description: "Sweet saffron-flavored flatbread",
          price: 59,
          category: "Breads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 9,
          name: "Chicken Malai Tikka",
          description: "Creamy chicken tikka cooked in tandoor",
          price: 299,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 10,
          name: "Paneer Pasanda",
          description: "Paneer stuffed with nuts in rich gravy",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Kebabs Platter",
          description: "Assorted Mughlai kebabs",
          price: 399,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 12,
          name: "Shahi Tukda",
          description: "Rich bread pudding with saffron and nuts",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Firni",
          description: "Rice pudding flavored with cardamom",
          price: 89,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 14,
          name: "Badam Milk",
          description: "Chilled almond-flavored milk",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 15,
          name: "Gulab Jamun",
          description: "Soft milk-solid balls soaked in sugar syrup",
          price: 79,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 10,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      rating: 4.0,
      deliveryTime: "20-25 min",
      distance: 1.5,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Chicken Tacos",
          description: "Soft tacos with spicy chicken and salsa",
          price: 179,
          category: "Tacos",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90,
          isBestseller: true
        },
        {
          id: 2,
          name: "Nachos",
          description: "Crispy nachos with cheese and jalapenos",
          price: 129,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Beef Tacos",
          description: "Soft tacos with spicy beef and salsa",
          price: 199,
          category: "Tacos",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Veg Quesadilla",
          description: "Grilled tortilla with cheese and veggies",
          price: 149,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 5,
          name: "Chicken Burrito",
          description: "Tortilla wrap with chicken, beans, and rice",
          price: 229,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 6,
          name: "Nachos Supreme",
          description: "Nachos loaded with cheese, beans, and salsa",
          price: 159,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 95
        },
        {
          id: 7,
          name: "Churros",
          description: "Fried dough pastry with cinnamon sugar",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Fish Tacos",
          description: "Tacos with crispy fish and tangy slaw",
          price: 219,
          category: "Tacos",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 9,
          name: "Mexican Rice",
          description: "Spiced rice with vegetables",
          price: 129,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 10,
          name: "Refried Beans",
          description: "Creamy mashed beans with spices",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 11,
          name: "Taco Salad",
          description: "Salad with taco chips, beans, and salsa",
          price: 139,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 12,
          name: "Guacamole",
          description: "Creamy avocado dip with lime and cilantro",
          price: 89,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Salsa Fresca",
          description: "Fresh tomato salsa with onions and cilantro",
          price: 69,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 14,
          name: "Horchata",
          description: "Sweet rice milk beverage",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 15,
          name: "Queso Fundido",
          description: "Melted cheese dip with chorizo",
          price: 109,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        }
      ]
    },
    {
      id: 11,
      name: "Wok Express",
      cuisine: "Thai",
      rating: 4.4,
      deliveryTime: "30-35 min",
      distance: 2.3,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Pad Thai",
          description: "Stir-fried rice noodles with veggies and peanuts",
          price: 229,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 2,
          name: "Green Curry",
          description: "Thai green curry with vegetables and tofu",
          price: 199,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Tom Yum Soup",
          description: "Spicy Thai soup with lemongrass and lime",
          price: 149,
          category: "Soups",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Thai Green Curry",
          description: "Green curry with chicken and vegetables",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 5,
          name: "Thai Red Curry",
          description: "Red curry with tofu and vegetables",
          price: 229,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 6,
          name: "Sticky Rice",
          description: "Traditional Thai sticky rice",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 7,
          name: "Thai Basil Chicken",
          description: "Chicken stir-fried with basil and chilli",
          price: 199,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 8,
          name: "Papaya Salad",
          description: "Spicy salad with shredded green papaya",
          price: 129,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Thai Spring Rolls",
          description: "Crispy rolls with vegetables and glass noodles",
          price: 119,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 10,
          name: "Pad See Ew",
          description: "Stir-fried flat noodles with soy sauce",
          price: 159,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Thai Iced Tea",
          description: "Sweet and creamy iced tea",
          price: 79,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 12,
          name: "Coconut Soup",
          description: "Soup with coconut milk, mushrooms, and herbs",
          price: 139,
          category: "Soups",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Mango Sticky Rice",
          description: "Sweet sticky rice with mango",
          price: 119,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 14,
          name: "Chicken Satay",
          description: "Grilled chicken skewers with peanut sauce",
          price: 149,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 15,
          name: "Lemongrass Lemonade",
          description: "Refreshing lemonade with lemongrass",
          price: 69,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 12,
      name: "Pizza Planet",
      cuisine: "Italian",
      rating: 4.2,
      deliveryTime: "25-30 min",
      distance: 1.9,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Pepperoni Pizza",
          description: "Classic pizza with pepperoni and cheese",
          price: 349,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
          popularity: 100,
          isBestseller: true
        },
        {
          id: 2,
          name: "Veggie Supreme",
          description: "Loaded with fresh vegetables and cheese",
          price: 299,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 3,
          name: "Farmhouse Pizza",
          description: "Pizza loaded with fresh vegetables",
          price: 329,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Chicken Tikka Pizza",
          description: "Pizza topped with spicy chicken tikka",
          price: 349,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 5,
          name: "Garlic Breadsticks",
          description: "Soft breadsticks with garlic butter",
          price: 129,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 6,
          name: "Cheese Burst Pizza",
          description: "Pizza with extra cheese in the crust",
          price: 379,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 95
        },
        {
          id: 7,
          name: "Veggie Calzone",
          description: "Stuffed pizza pocket with veggies and cheese",
          price: 199,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Chicken Wings",
          description: "Spicy baked chicken wings",
          price: 179,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 9,
          name: "Pasta Arrabbiata",
          description: "Pasta in spicy tomato sauce",
          price: 249,
          category: "Pasta",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 10,
          name: "Tiramisu",
          description: "Classic Italian coffee-flavored dessert",
          price: 199,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 11,
          name: "Stuffed Garlic Bread",
          description: "Garlic bread stuffed with cheese and corn",
          price: 149,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 12,
          name: "Marinara Pasta",
          description: "Pasta in tangy tomato sauce",
          price: 229,
          category: "Pasta",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Choco Lava Cake",
          description: "Warm chocolate cake with molten center",
          price: 129,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 95
        },
        {
          id: 14,
          name: "Pepsi",
          description: "Chilled Pepsi beverage",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 15,
          name: "Classic Lemonade",
          description: "Freshly squeezed lemonade",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 13,
      name: "Healthy Bowl",
      cuisine: "Salads",
      rating: 4.5,
      deliveryTime: "20-25 min",
      distance: 1.1,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Quinoa Salad",
          description: "Protein-rich quinoa with veggies and lemon dressing",
          price: 179,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60,
          isBestseller: true
        },
        {
          id: 2,
          name: "Fruit Bowl",
          description: "Seasonal fruits with honey and chia seeds",
          price: 129,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 50
        },
        {
          id: 3,
          name: "Greek Salad",
          description: "Salad with feta, olives, and veggies",
          price: 149,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 4,
          name: "Caesar Salad",
          description: "Classic salad with lettuce, croutons, and parmesan",
          price: 159,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Sprout Salad",
          description: "Protein-rich sprouts with veggies and lemon",
          price: 129,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 6,
          name: "Chickpea Salad",
          description: "Chickpeas tossed with cucumber, tomato, and herbs",
          price: 139,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 7,
          name: "Tofu Bowl",
          description: "Tofu with brown rice and veggies",
          price: 179,
          category: "Bowls",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Avocado Salad",
          description: "Avocado, greens, and seeds with lemon dressing",
          price: 189,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 9,
          name: "Lentil Bowl",
          description: "Lentils, veggies, and brown rice",
          price: 149,
          category: "Bowls",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 10,
          name: "Broccoli Almond Salad",
          description: "Broccoli, almonds, and cranberries in yogurt dressing",
          price: 159,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Beetroot Salad",
          description: "Beetroot, carrots, and nuts with vinaigrette",
          price: 139,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 12,
          name: "Egg Salad",
          description: "Boiled eggs, greens, and mustard dressing",
          price: 129,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 13,
          name: "Protein Power Bowl",
          description: "Chicken, quinoa, and veggies",
          price: 199,
          category: "Bowls",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Walnut Apple Salad",
          description: "Apples, walnuts, and greens with honey dressing",
          price: 149,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Detox Green Juice",
          description: "Spinach, cucumber, and apple juice",
          price: 99,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 14,
      name: "Punjab Grill",
      cuisine: "Punjabi",
      rating: 4.6,
      deliveryTime: "35-40 min",
      distance: 3.8,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Amritsari Kulcha",
          description: "Stuffed bread with spicy potato filling",
          price: 99,
          category: "Breads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 2,
          name: "Chole Bhature",
          description: "Spicy chickpeas with fried bread",
          price: 149,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 3,
          name: "Paneer Tikka",
          description: "Grilled paneer cubes marinated in spices",
          price: 199,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Dal Makhani",
          description: "Slow-cooked black lentils in creamy gravy",
          price: 179,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Butter Chicken",
          description: "Chicken in creamy tomato gravy",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 6,
          name: "Bhatti Da Murgh",
          description: "Tandoori chicken with Punjabi spices",
          price: 279,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 7,
          name: "Sarson Da Saag",
          description: "Mustard greens cooked with spices",
          price: 159,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 8,
          name: "Makki Di Roti",
          description: "Cornmeal flatbread, Punjabi style",
          price: 49,
          category: "Breads",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Punjabi Lassi",
          description: "Sweet yogurt-based drink",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 10,
          name: "Pindi Chole",
          description: "Spicy chickpeas cooked Punjabi style",
          price: 149,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Paneer Bhurji",
          description: "Scrambled paneer with onions and spices",
          price: 179,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 12,
          name: "Gajar Halwa",
          description: "Carrot pudding with ghee and nuts",
          price: 89,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 13,
          name: "Rajma Masala",
          description: "Red kidney beans in spicy gravy",
          price: 149,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Boondi Raita",
          description: "Yogurt with fried gram flour balls",
          price: 59,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Jalebi",
          description: "Crispy, sweet, deep-fried dessert",
          price: 69,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 15,
      name: "Falafel House",
      cuisine: "Middle Eastern",
      rating: 4.3,
      deliveryTime: "30-35 min",
      distance: 2.6,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Falafel Wrap",
          description: "Crispy falafel with veggies and hummus in pita",
          price: 179,
          category: "Wraps",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70,
          isBestseller: true
        },
        {
          id: 2,
          name: "Hummus Platter",
          description: "Creamy hummus with pita and veggies",
          price: 149,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Chicken Shawarma",
          description: "Grilled chicken wrapped in pita with garlic sauce",
          price: 199,
          category: "Wraps",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Tabbouleh",
          description: "Parsley, bulgur, and tomato salad",
          price: 129,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Baba Ganoush",
          description: "Smoky eggplant dip with olive oil",
          price: 119,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 6,
          name: "Lamb Kofta",
          description: "Grilled lamb meatballs with spices",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Fattoush",
          description: "Salad with crispy pita and veggies",
          price: 139,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 8,
          name: "Shish Taouk",
          description: "Grilled chicken skewers with garlic sauce",
          price: 229,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Lentil Soup",
          description: "Hearty soup with lentils and spices",
          price: 99,
          category: "Soups",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 10,
          name: "Stuffed Grape Leaves",
          description: "Grape leaves stuffed with rice and herbs",
          price: 109,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 11,
          name: "Baklava",
          description: "Sweet pastry with nuts and honey",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 12,
          name: "Hummus Bowl",
          description: "Creamy hummus topped with olive oil and paprika",
          price: 129,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Falafel Plate",
          description: "Falafel served with salad and pita",
          price: 179,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Rose Lemonade",
          description: "Lemonade infused with rose water",
          price: 69,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Date Cake",
          description: "Moist cake made with dates and nuts",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 16,
      name: "Dosa Express",
      cuisine: "South Indian",
      rating: 4.4,
      deliveryTime: "20-25 min",
      distance: 1.7,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Masala Dosa",
          description: "Crispy rice crepe with spicy potato filling",
          price: 99,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100,
          isBestseller: true
        },
        {
          id: 2,
          name: "Idli Sambar",
          description: "Steamed rice cakes with lentil soup",
          price: 79,
          category: "Breakfast",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 3,
          name: "Plain Dosa",
          description: "Crispy rice crepe served with chutney",
          price: 79,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Rava Dosa",
          description: "Semolina dosa with crispy edges",
          price: 89,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Onion Uttapam",
          description: "Thick rice pancake topped with onions",
          price: 99,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 6,
          name: "Medu Vada",
          description: "Crispy lentil doughnuts served with sambar",
          price: 69,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Coconut Chutney",
          description: "Fresh coconut chutney with spices",
          price: 39,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 8,
          name: "Tomato Chutney",
          description: "Tangy tomato chutney with spices",
          price: 39,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 9,
          name: "Filter Coffee",
          description: "Traditional South Indian coffee",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 10,
          name: "Pongal",
          description: "Rice and lentil porridge with ghee",
          price: 89,
          category: "Breakfast",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Curd Rice",
          description: "Rice mixed with yogurt and spices",
          price: 69,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 12,
          name: "Lemon Rice",
          description: "Rice flavored with lemon and spices",
          price: 79,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Kesari Bath",
          description: "Sweet semolina dessert with saffron",
          price: 59,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 14,
          name: "Banana Chips",
          description: "Crispy fried banana slices",
          price: 49,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 15,
          name: "Mysore Pak",
          description: "Rich gram flour and ghee sweet",
          price: 69,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 17,
      name: "Sizzler Station",
      cuisine: "Continental",
      rating: 4.2,
      deliveryTime: "35-40 min",
      distance: 3.0,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Chicken Sizzler",
          description: "Grilled chicken with veggies and sauce on a hot plate",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70,
          isBestseller: true
        },
        {
          id: 2,
          name: "Veg Sizzler",
          description: "Assorted grilled veggies and paneer on a hot plate",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Fish Sizzler",
          description: "Grilled fish with veggies and lemon butter sauce on a hot plate",
          price: 349,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Paneer Sizzler",
          description: "Grilled paneer with veggies and sauce on a hot plate",
          price: 259,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 75
        },
        {
          id: 5,
          name: "Veg Cutlet",
          description: "Crispy vegetable cutlets served with dip",
          price: 99,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 6,
          name: "Garlic Bread",
          description: "Toasted bread with garlic butter",
          price: 89,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "French Fries",
          description: "Crispy golden potato fries",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 8,
          name: "Chicken Steak",
          description: "Grilled chicken steak with pepper sauce",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 9,
          name: "Veg Steak",
          description: "Grilled vegetable steak with sauce",
          price: 229,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 10,
          name: "Coleslaw",
          description: "Creamy cabbage and carrot salad",
          price: 69,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 11,
          name: "Mashed Potatoes",
          description: "Creamy mashed potatoes with butter",
          price: 79,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 12,
          name: "Brownie",
          description: "Chocolate brownie served warm",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 13,
          name: "Ice Cream",
          description: "Vanilla ice cream scoop",
          price: 59,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Lemonade",
          description: "Freshly squeezed lemonade",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Grilled Corn",
          description: "Corn on the cob grilled with butter",
          price: 69,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        }
      ]
    },
    {
      id: 18,
      name: "Chai Adda",
      cuisine: "Café",
      rating: 4.5,
      deliveryTime: "15-20 min",
      distance: 0.9,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Masala Chai",
          description: "Spiced Indian tea with milk",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 120,
          isBestseller: true
        },
        {
          id: 2,
          name: "Samosa",
          description: "Crispy pastry with spicy potato filling",
          price: 29,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 3,
          name: "Adrak Chai",
          description: "Ginger-infused Indian tea",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 4,
          name: "Elaichi Chai",
          description: "Cardamom-flavored Indian tea",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 5,
          name: "Bun Maska",
          description: "Soft bun with butter, Mumbai style",
          price: 29,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 6,
          name: "Poha",
          description: "Flattened rice cooked with spices and veggies",
          price: 49,
          category: "Breakfast",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 7,
          name: "Upma",
          description: "Semolina breakfast dish with veggies",
          price: 49,
          category: "Breakfast",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 8,
          name: "Kachori",
          description: "Spicy lentil-filled pastry",
          price: 29,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Bread Pakora",
          description: "Bread slices fried with gram flour batter",
          price: 39,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 10,
          name: "Chai Biscuit",
          description: "Assorted biscuits to go with chai",
          price: 19,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 11,
          name: "Aloo Paratha",
          description: "Stuffed potato flatbread with butter",
          price: 59,
          category: "Breakfast",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 12,
          name: "Choco Bun",
          description: "Sweet bun with chocolate filling",
          price: 39,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 13,
          name: "Lemon Tea",
          description: "Refreshing lemon-flavored tea",
          price: 29,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Coffee",
          description: "Hot brewed coffee",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 15,
          name: "Banana Chips",
          description: "Crispy fried banana slices",
          price: 29,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        }
      ]
    },
    {
      id: 19,
      name: "Biryani Blues",
      cuisine: "Hyderabadi",
      rating: 4.6,
      deliveryTime: "30-35 min",
      distance: 2.8,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Hyderabadi Biryani",
          description: "Authentic biryani with aromatic spices",
          price: 299,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 110,
          isBestseller: true
        },
        {
          id: 2,
          name: "Double Ka Meetha",
          description: "Traditional Hyderabadi dessert",
          price: 89,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Chicken Biryani",
          description: "Hyderabadi style chicken biryani",
          price: 319,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 4,
          name: "Mutton Biryani",
          description: "Aromatic mutton biryani with spices",
          price: 349,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 5,
          name: "Egg Biryani",
          description: "Biryani rice with boiled eggs",
          price: 249,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 6,
          name: "Veg Biryani",
          description: "Biryani rice with mixed vegetables",
          price: 229,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 7,
          name: "Mirchi Ka Salan",
          description: "Spicy chili curry served with biryani",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 8,
          name: "Raita",
          description: "Yogurt with cucumber and spices",
          price: 59,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Chicken 65",
          description: "Spicy fried chicken starter",
          price: 179,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 10,
          name: "Paneer 65",
          description: "Spicy fried paneer starter",
          price: 159,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Bagara Baingan",
          description: "Eggplant curry with sesame and peanuts",
          price: 139,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 12,
          name: "Sheer Khurma",
          description: "Vermicelli pudding with milk and dates",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Qubani Ka Meetha",
          description: "Apricot dessert with cream",
          price: 109,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 14,
          name: "Lassi",
          description: "Sweet yogurt-based drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 15,
          name: "Double Ka Meetha",
          description: "Traditional Hyderabadi dessert",
          price: 89,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 20,
      name: "Rolls Mania",
      cuisine: "Kolkata",
      rating: 4.3,
      deliveryTime: "20-25 min",
      distance: 1.6,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Egg Roll",
          description: "Paratha roll with egg and veggies",
          price: 79,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90,
          isBestseller: true
        },
        {
          id: 2,
          name: "Chicken Roll",
          description: "Paratha roll with spicy chicken filling",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 3,
          name: "Paneer Roll",
          description: "Paratha roll with spicy paneer filling",
          price: 89,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Mutton Roll",
          description: "Paratha roll with spicy mutton filling",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 5,
          name: "Veg Roll",
          description: "Paratha roll with mixed vegetable filling",
          price: 69,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 6,
          name: "Aloo Roll",
          description: "Paratha roll with spicy potato filling",
          price: 59,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 7,
          name: "Paneer Tikka Roll",
          description: "Paratha roll with paneer tikka filling",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Egg Chicken Roll",
          description: "Paratha roll with egg and chicken filling",
          price: 109,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 9,
          name: "Cheese Roll",
          description: "Paratha roll with cheese and veggies",
          price: 79,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 10,
          name: "Chicken Seekh Roll",
          description: "Paratha roll with chicken seekh kebab",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Mayo Roll",
          description: "Paratha roll with mayo and veggies",
          price: 69,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 12,
          name: "Egg Paneer Roll",
          description: "Paratha roll with egg and paneer filling",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 13,
          name: "Chicken Bhuna Roll",
          description: "Paratha roll with spicy chicken bhuna filling",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Veggie Delight Roll",
          description: "Paratha roll with assorted veggies",
          price: 69,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 15,
          name: "Cold Drink",
          description: "Chilled soft drink",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 21,
      name: "Sushi House",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "30-35 min",
      distance: 2.2,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Salmon Nigiri",
          description: "Fresh salmon over seasoned rice",
          price: 399,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 2,
          name: "Avocado Roll",
          description: "Vegetarian sushi roll with avocado",
          price: 299,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Tuna Roll",
          description: "Sushi roll with fresh tuna and cucumber",
          price: 399,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Eel Nigiri",
          description: "Grilled eel over seasoned rice",
          price: 449,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 5,
          name: "Cucumber Roll",
          description: "Vegetarian sushi roll with cucumber",
          price: 299,
          category: "Sushi",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 6,
          name: "Tempura Udon",
          description: "Udon noodles with tempura shrimp",
          price: 349,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Chicken Yakitori",
          description: "Grilled chicken skewers glazed with sauce",
          price: 229,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 8,
          name: "Miso Ramen",
          description: "Ramen noodles in miso broth",
          price: 299,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Seaweed Salad",
          description: "Salad with marinated seaweed and sesame",
          price: 149,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 10,
          name: "Edamame",
          description: "Steamed young soybeans sprinkled with salt",
          price: 129,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Shrimp Tempura",
          description: "Crispy fried shrimp tempura",
          price: 349,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 12,
          name: "Chicken Katsu",
          description: "Breaded and fried chicken cutlet",
          price: 279,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Matcha Ice Cream",
          description: "Green tea flavored ice cream",
          price: 129,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 14,
          name: "Yuzu Lemonade",
          description: "Japanese citrus lemonade",
          price: 99,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 15,
          name: "Gyoza",
          description: "Pan-fried Japanese dumplings",
          price: 179,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 22,
      name: "The Pancake Story",
      cuisine: "Desserts",
      rating: 4.5,
      deliveryTime: "20-25 min",
      distance: 1.3,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Chocolate Pancake",
          description: "Fluffy pancakes with chocolate sauce",
          price: 129,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90,
          isBestseller: true
        },
        {
          id: 2,
          name: "Berry Pancake",
          description: "Pancakes topped with fresh berries",
          price: 139,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 3,
          name: "Nutella Pancake",
          description: "Pancakes filled with Nutella and topped with chocolate sauce",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Banana Pancake",
          description: "Pancakes topped with fresh banana slices",
          price: 139,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Red Velvet Pancake",
          description: "Red velvet pancakes with cream cheese frosting",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Classic Pancake",
          description: "Fluffy pancakes with maple syrup",
          price: 129,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Oreo Pancake",
          description: "Pancakes with Oreo crumble and chocolate sauce",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 8,
          name: "Blueberry Pancake",
          description: "Pancakes with blueberry compote",
          price: 139,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Chocolate Chip Pancake",
          description: "Pancakes with chocolate chips and syrup",
          price: 139,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 10,
          name: "Strawberry Pancake",
          description: "Pancakes topped with fresh strawberries",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Caramel Pancake",
          description: "Pancakes with caramel sauce and nuts",
          price: 139,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 12,
          name: "Pineapple Pancake",
          description: "Pancakes with pineapple chunks and syrup",
          price: 139,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 13,
          name: "Coffee Pancake",
          description: "Pancakes with coffee glaze and cream",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 14,
          name: "Walnut Pancake",
          description: "Pancakes with walnuts and honey",
          price: 139,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 15,
          name: "Lemon Pancake",
          description: "Pancakes with lemon zest and syrup",
          price: 129,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        }
      ]
    },
    {
      id: 23,
      name: "Urban Tadka",
      cuisine: "Fusion",
      rating: 4.2,
      deliveryTime: "25-30 min",
      distance: 2.4,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Paneer Quesadilla",
          description: "Indian twist on the classic quesadilla",
          price: 179,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60,
          isBestseller: true
        },
        {
          id: 2,
          name: "Tandoori Pasta",
          description: "Pasta tossed in tandoori sauce",
          price: 199,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 50
        },
        {
          id: 3,
          name: "Tandoori Pasta",
          description: "Pasta tossed in tandoori sauce",
          price: 199,
          category: "Main Course",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Paneer Quesadilla",
          description: "Indian twist on the classic quesadilla",
          price: 179,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 5,
          name: "Masala Fries",
          description: "French fries tossed in Indian spices",
          price: 99,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 6,
          name: "Butter Chicken Pizza",
          description: "Pizza topped with butter chicken and cheese",
          price: 249,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 7,
          name: "Paneer Tikka Tacos",
          description: "Tacos filled with paneer tikka and veggies",
          price: 159,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Chilli Garlic Noodles",
          description: "Noodles tossed in Indo-Chinese sauce",
          price: 139,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 9,
          name: "Schezwan Paneer",
          description: "Paneer cubes in spicy Schezwan sauce",
          price: 179,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 10,
          name: "Fusion Nachos",
          description: "Nachos topped with Indian-style salsa",
          price: 129,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 11,
          name: "Tandoori Momos",
          description: "Momos grilled with tandoori spices",
          price: 119,
          category: "Starters",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 12,
          name: "Masala Lemonade",
          description: "Lemonade with Indian masala twist",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 13,
          name: "Paneer Tikka Burger",
          description: "Burger with paneer tikka patty",
          price: 149,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Choco Samosa",
          description: "Samosa filled with chocolate",
          price: 69,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Fusion Lassi",
          description: "Lassi with a fusion of flavors",
          price: 79,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 16,
          name: "Paneer Momos",
          description: "Steamed dumplings with paneer filling",
          price: 109,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 17,
          name: "Fried Momos",
          description: "Crispy fried dumplings with veggie filling",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 18,
          name: "Tandoori Momos",
          description: "Momos grilled with tandoori spices",
          price: 129,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 19,
          name: "Soup Momos",
          description: "Momos served in spicy soup",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 20,
          name: "Veg Momos",
          description: "Steamed dumplings with vegetable filling",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 21,
          name: "Chicken Cheese Momos",
          description: "Chicken momos with cheese filling",
          price: 139,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 22,
          name: "Corn Momos",
          description: "Steamed momos with corn filling",
          price: 109,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 23,
          name: "Paneer Chilli Momos",
          description: "Momos tossed in spicy paneer chilli sauce",
          price: 129,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 24,
          name: "Chocolate Momos",
          description: "Sweet momos with chocolate filling",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 25,
          name: "Spinach Momos",
          description: "Steamed momos with spinach filling",
          price: 109,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 26,
          name: "Schezwan Momos",
          description: "Momos tossed in spicy Schezwan sauce",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 27,
          name: "Veggie Momos",
          description: "Steamed momos with assorted veggies",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 28,
          name: "Lemonade",
          description: "Freshly squeezed lemonade",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 29,
          name: "Pineapple Juice",
          description: "Chilled pineapple juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 30,
          name: "Apple Juice",
          description: "Fresh apple juice",
          price: 69,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 31,
          name: "Grape Juice",
          description: "Chilled grape juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 32,
          name: "Pomegranate Juice",
          description: "Fresh pomegranate juice",
          price: 79,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 33,
          name: "Carrot Juice",
          description: "Fresh carrot juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 34,
          name: "Beetroot Juice",
          description: "Chilled beetroot juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 35,
          name: "Lime Soda",
          description: "Refreshing lime soda",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 36,
          name: "Sweet Lassi",
          description: "Sweet yogurt-based drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 37,
          name: "Salted Lassi",
          description: "Salted yogurt-based drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 38,
          name: "Coconut Water",
          description: "Fresh coconut water",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 39,
          name: "Aam Panna",
          description: "Raw mango summer drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 40,
          name: "Mint Mojito",
          description: "Minty lime soda",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 41,
          name: "Chocolate Waffle",
          description: "Waffle with chocolate sauce and chips",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 42,
          name: "Nutella Waffle",
          description: "Waffle with Nutella and hazelnuts",
          price: 169,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 43,
          name: "Oreo Waffle",
          description: "Waffle with Oreo crumble and chocolate sauce",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 44,
          name: "Red Velvet Waffle",
          description: "Red velvet waffle with cream cheese frosting",
          price: 179,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 45,
          name: "Classic Waffle",
          description: "Crispy waffle with maple syrup",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 46,
          name: "Strawberry Waffle",
          description: "Waffle topped with fresh strawberries",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 47,
          name: "Banana Waffle",
          description: "Waffle topped with banana and honey",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 48,
          name: "Blueberry Waffle",
          description: "Waffle topped with blueberry compote",
          price: 169,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 49,
          name: "Coffee Waffle",
          description: "Waffle with coffee glaze and cream",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 50,
          name: "Walnut Waffle",
          description: "Waffle with walnuts and honey",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 51,
          name: "Ice Cream Waffle",
          description: "Waffle topped with vanilla ice cream",
          price: 179,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 52,
          name: "Choco Lava Waffle",
          description: "Waffle with molten chocolate center",
          price: 169,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 53,
          name: "Mint Mojito",
          description: "Minty lime soda",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 24,
      name: "Momo Magic",
      cuisine: "Tibetan",
      rating: 4.3,
      deliveryTime: "20-25 min",
      distance: 1.5,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Veg Momos",
          description: "Steamed dumplings with vegetable filling",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100,
          isBestseller: true
        },
        {
          id: 2,
          name: "Chicken Momos",
          description: "Steamed dumplings with chicken filling",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 3,
          name: "Paneer Momos",
          description: "Steamed dumplings with paneer filling",
          price: 109,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 4,
          name: "Fried Momos",
          description: "Crispy fried dumplings with veggie filling",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 5,
          name: "Tandoori Momos",
          description: "Momos grilled with tandoori spices",
          price: 129,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 6,
          name: "Soup Momos",
          description: "Momos served in spicy soup",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 7,
          name: "Veg Momos",
          description: "Steamed dumplings with vegetable filling",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 100
        },
        {
          id: 8,
          name: "Chicken Cheese Momos",
          description: "Chicken momos with cheese filling",
          price: 139,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 9,
          name: "Corn Momos",
          description: "Steamed momos with corn filling",
          price: 109,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 10,
          name: "Paneer Chilli Momos",
          description: "Momos tossed in spicy paneer chilli sauce",
          price: 129,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Chocolate Momos",
          description: "Sweet momos with chocolate filling",
          price: 99,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 12,
          name: "Spinach Momos",
          description: "Steamed momos with spinach filling",
          price: 109,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 13,
          name: "Schezwan Momos",
          description: "Momos tossed in spicy Schezwan sauce",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 14,
          name: "Veggie Momos",
          description: "Steamed momos with assorted veggies",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 15,
          name: "Lemonade",
          description: "Freshly squeezed lemonade",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        }
      ]
    },
    {
      id: 25,
      name: "Juice Junction",
      cuisine: "Beverages",
      rating: 4.4,
      deliveryTime: "15-20 min",
      distance: 1.0,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Mango Shake",
          description: "Fresh mango shake with ice cream",
          price: 79,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90,
          isBestseller: true
        },
        {
          id: 2,
          name: "Watermelon Juice",
          description: "Chilled watermelon juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 3,
          name: "Orange Juice",
          description: "Freshly squeezed orange juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Pineapple Juice",
          description: "Chilled pineapple juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Apple Juice",
          description: "Fresh apple juice",
          price: 69,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 6,
          name: "Grape Juice",
          description: "Chilled grape juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 7,
          name: "Pomegranate Juice",
          description: "Fresh pomegranate juice",
          price: 79,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 8,
          name: "Carrot Juice",
          description: "Fresh carrot juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 9,
          name: "Beetroot Juice",
          description: "Chilled beetroot juice",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 10,
          name: "Lime Soda",
          description: "Refreshing lime soda",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Sweet Lassi",
          description: "Sweet yogurt-based drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 12,
          name: "Salted Lassi",
          description: "Salted yogurt-based drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 13,
          name: "Coconut Water",
          description: "Fresh coconut water",
          price: 39,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 14,
          name: "Aam Panna",
          description: "Raw mango summer drink",
          price: 49,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 15,
          name: "Mint Mojito",
          description: "Minty lime soda",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 26,
      name: "The Waffle Co.",
      cuisine: "Desserts",
      rating: 4.5,
      deliveryTime: "20-25 min",
      distance: 1.4,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Belgian Waffle",
          description: "Crispy waffle with chocolate sauce",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 2,
          name: "Strawberry Waffle",
          description: "Waffle topped with fresh strawberries",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 3,
          name: "Chocolate Waffle",
          description: "Waffle with chocolate sauce and chips",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 4,
          name: "Nutella Waffle",
          description: "Waffle with Nutella and hazelnuts",
          price: 169,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 5,
          name: "Oreo Waffle",
          description: "Waffle with Oreo crumble and chocolate sauce",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 85
        },
        {
          id: 6,
          name: "Red Velvet Waffle",
          description: "Red velvet waffle with cream cheese frosting",
          price: 179,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 7,
          name: "Classic Waffle",
          description: "Crispy waffle with maple syrup",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 8,
          name: "Strawberry Waffle",
          description: "Waffle topped with fresh strawberries",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 9,
          name: "Banana Waffle",
          description: "Waffle topped with banana and honey",
          price: 149,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 10,
          name: "Blueberry Waffle",
          description: "Waffle topped with blueberry compote",
          price: 169,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 11,
          name: "Coffee Waffle",
          description: "Waffle with coffee glaze and cream",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        },
        {
          id: 12,
          name: "Walnut Waffle",
          description: "Waffle with walnuts and honey",
          price: 159,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        },
        {
          id: 13,
          name: "Ice Cream Waffle",
          description: "Waffle topped with vanilla ice cream",
          price: 179,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        },
        {
          id: 14,
          name: "Choco Lava Waffle",
          description: "Waffle with molten chocolate center",
          price: 169,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
          popularity: 80
        },
        {
          id: 15,
          name: "Mint Mojito",
          description: "Minty lime soda",
          price: 59,
          category: "Beverages",
          image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
          popularity: 90
        }
      ]
    },
    {
      id: 27,
      name: "Kathi Roll Corner",
      cuisine: "Street Food",
      rating: 4.2,
      deliveryTime: "20-25 min",
      distance: 1.7,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Paneer Kathi Roll",
          description: "Paratha roll with spicy paneer filling",
          price: 99,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 2,
          name: "Chicken Kathi Roll",
          description: "Paratha roll with chicken filling",
          price: 119,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
          popularity: 70
        }
      ]
    },
    {
      id: 28,
      name: "Bakers Delight",
      cuisine: "Bakery",
      rating: 4.3,
      deliveryTime: "15-20 min",
      distance: 1.2,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Chocolate Croissant",
          description: "Flaky croissant with chocolate filling",
          price: 89,
          category: "Bakery",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70,
          isBestseller: true
        },
        {
          id: 2,
          name: "Blueberry Muffin",
          description: "Soft muffin with blueberries",
          price: 79,
          category: "Bakery",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        }
      ]
    },
    {
      id: 29,
      name: "The Salad Bar",
      cuisine: "Healthy",
      rating: 4.4,
      deliveryTime: "20-25 min",
      distance: 1.0,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Caesar Salad",
          description: "Classic salad with lettuce, croutons, and parmesan",
          price: 159,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 70,
          isBestseller: true
        },
        {
          id: 2,
          name: "Greek Salad",
          description: "Salad with feta, olives, and veggies",
          price: 149,
          category: "Salads",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        }
      ]
    },
    {
      id: 30,
      name: "Noodle House",
      cuisine: "Asian",
      rating: 4.3,
      deliveryTime: "25-30 min",
      distance: 2.1,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      menu: [
        {
          id: 1,
          name: "Hakka Noodles",
          description: "Stir-fried noodles with veggies",
          price: 129,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 80,
          isBestseller: true
        },
        {
          id: 2,
          name: "Chilli Garlic Noodles",
          description: "Spicy noodles with garlic and chilli",
          price: 139,
          category: "Noodles",
          image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
          popularity: 60
        }
      ]
    }
  ],
  dailyOffers: [
    {
      id: 1,
      title: "50% OFF on First Order",
      description: "Use code FIRST50 to get 50% off on your first order",
      validUntil: "2024-12-31"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Free delivery on orders above ₹300",
      validUntil: "2024-12-31"
    },
    {
      id: 3,
      title: "Birthday Special",
      description: "Get a free dessert on your birthday",
      validUntil: "2024-12-31"
    }
  ],
  bestsellers: [
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Spice Garden",
      price: 299,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Garlic Bread",
      restaurant: "Pasta Paradise",
      price: 149,
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Dim Sum Platter",
      restaurant: "Dragon Wok",
      price: 249,
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "California Roll",
      restaurant: "Sushi Master",
      price: 399,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  categories: [
    {
      name: "Indian",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 15,
      type: "Origin"
    },
    {
      name: "Italian",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 12,
      type: "Origin"
    },
    {
      name: "Chinese",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 10,
      type: "Origin"
    },
    {
      name: "Japanese",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 8,
      type: "Origin"
    },
    {
      name: "Vegetarian",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 20,
      type: "Nutrition"
    },
    {
      name: "Vegan",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 15,
      type: "Nutrition"
    },
    {
      name: "Fast Food",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 25,
      type: "Cuisine"
    },
    {
      name: "Fine Dining",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 10,
      type: "Cuisine"
    },
    {
      name: "Breakfast",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 18,
      type: "Intended Use"
    },
    {
      name: "Lunch",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 22,
      type: "Intended Use"
    },
    {
      name: "Dinner",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 20,
      type: "Intended Use"
    },
    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      count: 15,
      type: "Intended Use"
    }
  ],
  userLocation: null,
  selectedRestaurant: null
};

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
    updateItemPopularity: (state, action) => {
      const { restaurantId, itemId } = action.payload;
      const restaurant = state.restaurants.find(r => r.id === restaurantId);
      if (restaurant) {
        const item = restaurant.menu.find(i => i.id === itemId);
        if (item) {
          item.popularity += 1;
        }
      }
    }
  }
});

export const { setUserLocation, setSelectedRestaurant, updateItemPopularity } = restaurantSlice.actions;
export default restaurantSlice.reducer; 