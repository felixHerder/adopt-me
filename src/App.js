import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';
import Details from './Details';
import SearchParams from './SearchParams';

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header id="something-important">
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
};

export default App;
