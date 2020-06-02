import React, { useState } from 'react';
import _ from 'lodash';
import Game from './Game';
import Games from './Games';
const List = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});

  const getGames = (e) => {
    const query = e.target.value;
    let url = `https://api.twitch.tv/kraken/search/games?query=${query}`;

    fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': '1i68fdeiwgr6lja3c0a5en1hp4r4cc',
        'Accept': 'application/vnd.twitchtv.v5+json'
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
    })
      .then((response) => {
        response.json()
          .then((data) => {
            if (data.games !== null) {
              setGames(data.games);
              setSelectedGame(data.games[0]);
            } else {
              setGames([]);
              setSelectedGame({});
            }
          });
      })
      .catch((error) => console.log(error))

  };

  return (
    <>
      <div className="row">
        <div className="col-8 justify-content-center navmargin scroll  pt-5">
          Search for your favorite games in the search box below. Click on their name to find out  more information about them.
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={(event) => { getGames(event); }} />
          </form>
          <Games games={games} setSelectedGame={setSelectedGame} />
        </div>
        <div className='col-4 details justify-content-center scroll pt-5'>
            {!_.isEmpty(selectedGame) &&
              <Game game={selectedGame} />
            }
        </div>
      </div>

    </>
  );
};

export default List;