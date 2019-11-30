import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import LineSearch from '../../containers/LineSearch/LineSearch';
import ProductPage from '../../containers/ProductPage/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/login' render={() => <p>Login here</p>} />
        <Route path='/lineSearch' render={() => <LineSearch />} />
        <Route path='/productPage' render={() => <ProductPage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
