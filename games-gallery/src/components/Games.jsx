import React from 'react';

const Games = ({ setSelectedGame, games }) => (
  <ul className="list-group mb-2">
  {
    games.map((game) =>
      <button onClick={() => setSelectedGame(game)} className="list-group-item" key={game._id}>{game.name}</button>
    )
  }
</ul>
)
export default Games;