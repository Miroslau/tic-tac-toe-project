import Player from './components/Player/Player.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log/Log.jsx';
import GameOver from './components/GameOver/GameOver.jsx';
import PLAYERS from './constants/players.js';
import deriveGameBoard from './utils/derive-game-board.js';
import deriveWinner from './utils/derive-winner.js';
import deriveActivePlayer from './utils/derive-active-player.js';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex
          },
          player: currentPlayer
        },
        ...prevTurns
      ];

      return updatedTurns;
    });
  };

  const handlePlayerChange = (symbol, newName) => {
    setPlayers({
      ...players,
      [symbol]: newName
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
