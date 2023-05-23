export const storeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCTS": {
      return { ...state, products: payload.products };
    }
    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, payload] };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    }
    case "INCREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    }
    case "DECREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    }
    default: {
      throw new Error(`Unrecognized action: ${type}`);
    }
  }
};
