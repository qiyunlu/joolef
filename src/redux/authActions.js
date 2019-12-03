export const login = (jwt) => ({type: 'LOGIN', JWT: jwt});

export const logout = () => ({type: 'LOGOUT'});
