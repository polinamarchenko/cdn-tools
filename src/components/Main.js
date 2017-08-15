import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ToolForm from './ToolForm';
import Tools from './Tools';

const Main = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/tools" component={Tools} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/new" component={ToolForm} />
  </Switch>;

export default Main;
