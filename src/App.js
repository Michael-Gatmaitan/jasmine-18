
// Module imports
import React from 'react';
import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// UI imports
import Nav from './components/Nav';
import Home from './components/Home';
import Eighteenth from './components/Eighteenth';

import './mixins.css';

const App = () => {
  const location = useLocation();
  return (
    <React.Fragment>

      <Nav />


      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/18th" element={<Eighteenth />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default App;
