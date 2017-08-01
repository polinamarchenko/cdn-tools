import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ToolForm from './ToolForm';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    {/* <Route path='/about' component={About}/> */}
    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/new' component={ToolForm}/>
  </Switch>
)

export default Main;
