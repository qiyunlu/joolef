export const login = (jwt) => ({type: 'Login', JWT: jwt});

export const logout = () => ({type: 'Logout'});

export const setStore = (payload) => ({type: 'SetStore', payload: payload});
