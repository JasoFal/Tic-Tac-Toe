const reducer = (state = {}, action) => {
  const {history} = action;
  switch (action.type) {
    case "GAME":
      return Object.assign({}, state, {
        history: history
      });
    default:
      return state;
  }
};

export default reducer;