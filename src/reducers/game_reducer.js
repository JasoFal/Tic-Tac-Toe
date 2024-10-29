const reducer = (state = {currentMove: 0, xIsNext: true, currentSquares: Array(9).fill(null), history: []}, action) => {
  const { currentMove, xIsNext, currentSquares, history } = action;
  switch (action.type) {
    case "SAVE_GAME": 
      return Object.assign({}, state, {
        currentMove: currentMove,
        xIsNext: xIsNext,
        currentSquares: currentSquares,
        history: history
      });
    case "TIME_TRAVEL":
      return Object.assign({}, state, {
        currentMove: currentMove,
        currentSquares: currentSquares
      });
    default:
      return state;
  }
};

export default reducer;