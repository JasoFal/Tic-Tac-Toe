import ticTacToeReducer from "../../reducers/tic_tac_toe_reducer";

describe("ticTacToeReducer", () => {
  
  let action;
  const historyData = {
    history: [null, null, null, null, null, null, null, null, null]
  }

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(ticTacToeReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new history entry to history state", () => {
    const { history} = historyData;
    action = {
      type: "ADD_HISTORY",
      history: history,
    };

    expect(ticTacToeReducer({}, action)).toEqual({
      history: history
    })
  });
});