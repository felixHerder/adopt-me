import React from 'react';
import { Router, Link } from '@reach/router';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header id="something-important">
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  )
};

render(<App />, document.getElementById("root"));
