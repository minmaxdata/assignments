import React from 'react';
import List from './List';

const App = () => (
  <>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <img src="twitch.0.0.jpg"></img>
      Twitch Game Search
    </nav>
    <main role="main" className="container">
      <List />
    </main>
  </>
)

export default App;
