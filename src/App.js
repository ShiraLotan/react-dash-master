import React from 'react';
import './App.scss';
import Dashboard from './components/main/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Features from './components/Feature/Features';
import Details from './components/Feature/Deatils';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className='nav-bar'>
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
              <Features />
            </Route>
            <Route path="/details">
              <Details/>
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>


          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
