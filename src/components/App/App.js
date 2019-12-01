import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import LineSearch from '../../containers/LineSearch/LineSearch';
import ProductPage from '../../containers/ProductPage/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/login' component={<p>Login here</p>} />
        <Route path='/lineSearch' component={LineSearch} />
        <Route path='/productPage/:productLineFk' exact component={ProductPage} />
        <Route path='/productPage' exact component={ProductPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
