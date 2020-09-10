import React from 'react';
import './App.css';
import Dashboard from './components/main/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Features from './components/Feature/Features';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/feature">Features</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/feature">
            <Features/>
          </Route>
          <Route path="/">
            <Dashboard/>
          </Route>
          
         
        </Switch>
      </div>
    </Router>
    </div>
  );
}


export default App;
