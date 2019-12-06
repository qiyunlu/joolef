import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../redux/authActions';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const auth = useSelector(state => ({ ...state }));
  const dp = useDispatch();

  const submitHandler = async () => {
    await props.onAuth(email, password, auth.JWT);
    props.history.push('/selectLine');
  };

  return (
    <div style={{ backgroundImage: 'linear-gradient(rgb(107, 166, 255), white)', bottom: '0px', right: '0px', top: '0px', left: '0px', position: 'absolute' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px', color: 'rgb(84, 84, 84)', float: 'right', marginRight: '5%', marginTop: '2%' }}>
        {auth.authenticated ? (
          <div style={{ display: 'flex' }}>
            <div style={{ marginTop: '20px', marginRight: '20px' }}>Projects</div>
            <img src={process.env.PUBLIC_URL + '/stocking.png'} alt='' style={{ width: '70px', borderRadius: '50%' }} />
          </div>
        ) : 'Sign up'}
      </div>
      <div><img src={process.env.PUBLIC_URL + '/joole.png'} alt='' style={{ width: '300px', marginLeft: '40%', marginTop: '10%' }} /></div>
      <div style={{ fontWeight: 'bold', fontSize: '25px', color: 'rgb(84, 84, 84)', marginLeft: '36.5%' }}>Building Product Selection Platform</div>
      <div style={{ marginLeft: '38.3%' }}>Email: <input onChange={(event)=>setEmail(event.target.value)} /></div>
      <div style={{ marginLeft: '36.5%' }}>Password: <input onChange={(event)=>setPassword(event.target.value)} /></div>
      <div style={{ textAlign: 'center' }}>
        <p>{auth.authenticated ? 'authenticated' : 'unauthorized'}</p>
        <button onClick={() => dp(actions.setStore({JWT: null}))}>Remove Token</button>
        <button onClick={() => {
          dp(auth.authenticated ? actions.logout() : actions.login())
        }}>Change Auth</button>
        <button onClick={submitHandler}>Log In</button>
        <Link to='/selectLine'><button>To Select Line</button></Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onAuth: (email, password, token) => dispatch(actions.auth(email, password, token))
});

export default connect(null, mapDispatchToProps)(Login);
