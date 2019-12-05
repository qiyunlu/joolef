import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';

import './App.css';
import ProductPage from '../../containers/ProductPage/ProductPage';
import SummaryPage from '../../containers/SummaryPage/SummaryPage';
import Compare from '../Compare/Compare';
import Login from '../Login/Login';
import SelectLine from '../SelectLine/SelectLine';
import { login, logout, setStore } from '../../redux/authActions';

const App = (props) => {

  console.log(props.state);
  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(prop) => (
      props.state.authenticated === true
        ? <Component {...prop} />
        : <Redirect to='/login' />
    )} />
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/selectLine' exact component={SelectLine} />
          <PrivateRoute path='/productPage/:productLineFk' exact component={ProductPage} />
          <PrivateRoute path='/productPage' exact component={ProductPage} />
          <PrivateRoute path='/summaryPage/:productId' exact component={SummaryPage} />
          <PrivateRoute path='/compare' exact component={Compare} />
          {/* <Redirect from='/' to='/login' /> */}
          <Route path='/' render={() => <Redirect  pato="/login" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = { login, logout, setStore };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
