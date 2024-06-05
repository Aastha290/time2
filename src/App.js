import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import RoutineEntries from './pages/RoutineEntries';
import Routine from './pages/Routine';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/RoutineEntries" component={RoutineEntries} />
          <Route path="/Routine" component={Routine} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
