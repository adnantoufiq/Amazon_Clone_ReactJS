export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    //add basket
    case "ADD_TO_BASKET":
      // for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //remove basket
    case "REMOVE_FROM_BASKET":
      return { state };
    default:
      return state;
  }
};

export default reducer;
