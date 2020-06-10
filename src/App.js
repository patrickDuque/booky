import React, { useState } from 'react';
import Home from './views/Home';
import Reservation from './views/Reservation';
import LogIn from './views/LogIn';
import Register from './views/Register';
import { Route, Switch } from 'react-router-dom';

import './scss/App.scss';

function App() {
  const [
    checkIn,
    setCheckIn
  ] = useState(null);

  const [
    checkOut,
    setCheckOut
  ] = useState(null);

  const [
    user,
    setUser
  ] = useState(null);

  const loginUserHandler = user => {
    console.log(user);
  };

  const registerUserHandler = user => {
    console.log(user);
  };

  return (
    <div id='App'>
      <Switch>
        <Route
          path='/reservation'
          render={() => (
            <Reservation checkIn={checkIn} checkOut={checkOut} setCheckOut={setCheckOut} setCheckIn={setCheckIn} />
          )}
        />
        <Route path='/login' render={() => <LogIn login={loginUserHandler} />} />
        <Route path='/register' render={() => <Register register={registerUserHandler} />} />
        <Route path='/' render={() => <Home user={user} />} exact />
      </Switch>
    </div>
  );
}

export default App;
