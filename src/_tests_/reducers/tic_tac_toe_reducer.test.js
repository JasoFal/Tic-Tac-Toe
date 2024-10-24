import ticTacToeReducer from "../../reducers/tic_tac_toe_reducer";

describe("ticTacToeReducer", () => {
  
  let action;
  const historyData = {
    history: [null, null, null, null, null, null, null, null, null],
    id: 1
  }

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(ticTacToeReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new history entry to history state", () => {
    const { history, id } = historyData;
    action = {
      type: "ADD_HISTORY",
      history: history,
      id: id
    };

    expect(ticTacToeReducer({}, action)).toEqual({
      [id] : {
        history: history,
        id: id
      }
    })
  });
});