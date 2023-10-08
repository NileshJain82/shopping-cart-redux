import { createStore } from "redux";

const initialState = {
  value: 0,
  noOfItems: 0,
  cart: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart":
      const newItem = {
        title: action.payload.title,
        price: action.payload.price,
        id: action.payload.id,
        thumbnail: action.payload.thumbnail,
        description: action.payload.description,
      };
      return {
        ...state,
        value: state.value + action.payload.price,
        noOfItems: state.noOfItems + 1,
        cart: [...state.cart, newItem],
      };
      case "removeToCart":
        return {
          ...state,
          value: state.value - action.payload.price,
          noOfItems: state.noOfItems - 1,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
    default:
      return state;
  }
};

export function addInCart(price, title, id, thumbnail, description) {
  return {
    type: "addToCart",
    payload: {
      price,
      title,
      id,
      thumbnail,
      description,
    },
  };
}

export function removeFromCart(id,price) {
  return {
    type: "removeToCart",
    payload: {
      id,
      price,
    }
  };
}

export const store = createStore(reducer);
