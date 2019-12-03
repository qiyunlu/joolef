import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import LineSearch from '../../containers/LineSearch/LineSearch';
import ProductPage from '../../containers/ProductPage/ProductPage';
import SummaryPage from '../../containers/SummaryPage/SummaryPage';
import Login from '../Login/Login';


const App = () => {

  const auth = useSelector(state => state);

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.authenticated ? (
            children
          ) :
            (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/login' component={Login} />
        <PrivateRoute path='/lineSearch' exact><LineSearch /></PrivateRoute>
        <Route path='/productPage/:productLineFk' exact component={ProductPage} />
        <Route path='/productPage' exact component={ProductPage} />
        <Route path='/SummaryPage/:productId' exact component={SummaryPage} />
        <Route path='' render={() => <Redirect to="/login" />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
