import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, logout } from '../../redux/authActions';

const Login = (props) => {

  const auth = useSelector(state => ({ ...state }));
  const dispatch = useDispatch();

  return (
    <div>
      <p>{auth.authenticated ? 'authenticated' : 'unauthorized'}</p>
      <button onClick={() => {
        dispatch(auth.authenticated ? logout(): login())
      }}>Login</button>
      <Link to='/lineSearch'><button>To line search</button></Link>
    </div>
  );
}

export default Login;
