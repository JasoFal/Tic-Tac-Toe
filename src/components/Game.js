import React from "react";
import Board from "./Board";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePlay = (nextSquares) => {
    const nextHistory = [...this.props.history.slice(0, this.props.currentMove + 1), nextSquares];
    const { dispatch } = this.props;
    const action = {
      type: "SAVE_GAME",
      currentMove: nextHistory.length - 1,
      history: nextHistory,
      currentSquares: nextSquares,
      xIsNext: !this.props.xIsNext
    }
    dispatch(action);
  }

  jumpTo(nextMove) {
    const { dispatch } = this.props;
    const action = {
      type: "TIME_TRAVEL",
      currentMove: nextMove,
      currentSquares: this.props.history[nextMove]
    }
    dispatch(action);
  }

  render() {
    const moves = this.props.history.map((squares, move) => {
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
          <Board xIsNext={this.props.xIsNext} squares={this.props.currentSquares} onPlay={this.handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  };
}

Game.propTypes = {
  mapStateToProps: PropTypes.object
};

const mapStateToProps = state => {
  return {
    currentMove: state.currentMove,
    history: state.history,
    currentSquares: state.currentSquares,
    xIsNext: state.xIsNext
  }
}

Game = connect(mapStateToProps)(Game);

export default Game;