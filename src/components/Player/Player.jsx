import React, { useEffect, useState } from 'react';

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleClick = () => {
    setEditing((prev) => !prev);
  };

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPlayerName(value);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" value={playerName} onChange={handleChange} required />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
};

export default Player;
