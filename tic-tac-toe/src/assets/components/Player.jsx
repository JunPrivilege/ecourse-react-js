import React, { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isDeleting, setIsDeleting] = useState(false);

  function handleEditClick() {
    setIsDeleting((deleting) => !deleting);
    if (isDeleting) {
      onChangeName(symbol, playerName);
    }
  }

  function handeleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isDeleting) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handeleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isDeleting ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
