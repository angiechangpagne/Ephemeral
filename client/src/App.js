import React, { useState } from 'react';

// CSS Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Dashboard from './components/container/Dashboard';
import Auth from './components/presentation/Auth';

function App() {

  /*** State Variables ***/
  const [isLoggedIn, setLogIn] = useState(false);

  /*** Lifecycle Actions ***/

  /*** Helper Functions ***/
  function signup() {
	setLogIn(true);
  }

  return (
    <div className="App">
	  { isLoggedIn ? (<Dashboard />) : (<Auth signup={signup}/>) }
    </div>
  );
}

export default App;
