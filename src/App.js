import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Volunteer from './component/Volunteer/Volunteer';
import SingleVolunteer from './component/SingleVolunteer/SingleVolunteer';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import EventAdd from './component/EventAdd/EventAdd';
import ShowEvent from './component/ShowEvent/ShowEvent';
import Event from './component/Event/Event';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
    <Router>
         <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/singleVolunteer/:title">
          <SingleVolunteer></SingleVolunteer>
        </PrivateRoute>
        <PrivateRoute path="/eventAdd">
          <EventAdd></EventAdd>
        </PrivateRoute>
        <PrivateRoute path="/event">
          <Event></Event>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
              <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
