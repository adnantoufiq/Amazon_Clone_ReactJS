export const initialState = {
  basket: [],
};

// reducer function for the basket

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      break;
    case "REMOVE_BASKET":
      break;
    default:
      return state;
  }
}

export default reducer;
