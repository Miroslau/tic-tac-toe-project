import { WINNING_COMBINATIONS } from '../winning-combinations.js';

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const [firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol] = combination.map(
      (pos) => gameBoard[pos.row][pos.column]
    );

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

export default deriveWinner;
