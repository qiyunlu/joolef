const initialState = { authenticated: true, JWT: null };

const authReducer = (state = initialState, action) => {
  let _state = { ...state };
  switch (action.type) {
    case 'LOGIN':
      return {
        ..._state,
        authenticated: true,
        JWT: action.JWT
      };
    case 'LOGOUT':
      return {
        ..._state,
        authenticated: false,
        JWT: null
      };
    default: {}
  }
  return _state;
}

export default authReducer;
