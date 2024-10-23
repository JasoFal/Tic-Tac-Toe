import ticTacToeReducer from "../../reducers/tic_tac_toe_reducer";

describe("ticTacToeReducer", () => {
  
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(ticTacToeReducer({}, { type: null })).toEqual({});
  });
});