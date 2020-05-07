import React from 'react';
import ShowEmployee from "./ShowEmployee"
import AddEmployee from "./AddEmployee"
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ShowEmployee">Show Emloyees</Link>
            </li>
            <li>
              <Link to="/AddEmployee">AddEmployee</Link>
            </li>
            <li>
              <Link to="/AddEmployee">UpdateEmployee</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ShowEmployee">
            <ShowEmployee />
          </Route>
          <Route path="/AddEmployee">
            <AddEmployee display={true}/>
          </Route>
          <Route path="/AddEmployee">
            <AddEmployee displayUpdate={true}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
