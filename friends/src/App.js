import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path="/" component={FriendsList} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
