import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Details from './Details';
import SearchParams from './SearchParams';
import { Provider } from 'react-redux'
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header id="something-important">
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider >
  )
};

export default App;
