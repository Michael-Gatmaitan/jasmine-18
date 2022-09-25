
// Module imports
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// UI imports
import Nav from './components/Nav';
import Home from './components/Home';
import Eighteenth from './components/Eighteenth';

import './mixins.css';

const App = () => {
  return (
    <React.Fragment>
      <Router>

        <Nav />

        <Routes>
          <Route path="/18th" element={<Eighteenth />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
