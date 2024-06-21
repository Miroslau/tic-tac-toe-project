function deriveActivePlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X';
}

export default deriveActivePlayer;
