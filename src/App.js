import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Owners } from "./components/owners/Owners";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Owners />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
