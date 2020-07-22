import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Friends from './components/Friends'
import Login from './components/Login'
import AddFriends from './components/AddFriends'
import PrivateRoute from './components/PrivateRoute'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/protected/friends'>Friends</Link>
          <Link to='/protected/addFriends'>Add Friends</Link>
        </nav>
      </div>
      <Switch>
        <PrivateRoute path="/protected/friends" component={Friends}/>
        <PrivateRoute path="/protected/addFriends" component={AddFriends}/>

        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
