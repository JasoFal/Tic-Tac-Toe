import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMove: 0,
      xIsNext: true,
      currentSquares: Array(9).fill(null),
      history: []
    };
  }

  handlePlay = (nextSquares) => {
    const nextHistory = [...this.state.history.slice(0, this.state.currentMove + 1), nextSquares];
    this.setState({
      currentMove: nextHistory.length - 1,
      history: nextHistory,
      currentSquares: nextSquares,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(nextMove) {
    this.setState({
      currentMove: nextMove,
      currentSquares: this.state.history[nextMove]
    });
  }

  render() {
    const moves = this.state.history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = "Go to move #" + move;
      } else {
        description = "Go to game start";
      }
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{description}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={this.state.xIsNext} squares={this.state.currentSquares} onPlay={this.handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  };
}

export default Game;