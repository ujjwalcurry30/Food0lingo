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