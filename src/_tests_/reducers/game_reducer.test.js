import gameReducer from "../../reducers/game_reducer";

describe("ticTacToeReducer", () => {
  
  let action;
  const gameStateData = {
    currentMove: 5,
    xIsNext: false,
    currentSquares: ["X","X","X","X","X","X","X","X","X"],
    history: [["X","X","X","X","X","X","X","X","X"]]
  }

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(gameReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add a new game entry to state", () => {
    const { currentMove, xIsNext, currentSquares, history } = gameStateData;
    action = {
      type: "SAVE_GAME",
      currentMove: currentMove,
      xIsNext: xIsNext,
      currentSquares: currentSquares,
      history: history
    };

    expect(gameReducer({}, action)).toEqual({
      currentMove: currentMove,
      xIsNext: xIsNext,
      currentSquares: currentSquares,
      history: history
    })
  });
});