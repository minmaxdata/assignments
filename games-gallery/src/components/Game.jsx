import React from 'react';

const Game = ({ game }) => {
  return (
    <>
      <h2>{game.name}</h2>
      {game.box !== undefined &&
        <img src={game.box.medium} />
      }
      <h4>{game.popularity} viewers</h4>
    </>
  )
}
export default Game;