import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import LineSearch from '../../containers/LineSearch/LineSearch';
import ProductPage from '../../containers/ProductPage/ProductPage';
import SummaryPage from '../../containers/SummaryPage/SummaryPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/login' render={()=><p>Login here</p>} />
        <Route path='/lineSearch' component={LineSearch} />
        <Route path='/productPage/:productLineFk' exact component={ProductPage} />
        <Route path='/productPage' exact component={ProductPage} />
        <Route path='/SummaryPage/:productId' exact component={SummaryPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
