import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, logout } from '../../redux/authActions';

const Login = (props) => {

  const auth = useSelector(state => ({ ...state }));
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundImage: 'linear-gradient(rgb(107, 166, 255), white)', bottom: '0px', right: '0px', top: '0px', left: '0px', position: 'absolute' }}>
      <div><img src={process.env.PUBLIC_URL + '/joole.png'} alt='' style={{ width: '300px', marginLeft: '40%', marginTop: '10%' }} /></div>
      <div style={{ fontWeight: 'bold', fontSize: '25px', color: 'rgb(84, 84, 84)', marginLeft: '36.5%' }}>Building Product Selection Platform</div>
      <div style={{textAlign:'center'}}>
        <p>{auth.authenticated ? 'authenticated' : 'unauthorized'}</p>
        <button onClick={() => {
          dispatch(auth.authenticated ? logout() : login())
        }}>Change Auth</button>
        <Link to='/lineSearch'><button>Log In</button></Link>
      </div>
    </div>
  );
}

export default Login;
