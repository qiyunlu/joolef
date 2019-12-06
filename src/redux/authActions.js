import axios from '../Interceptor/Interceptor';

export const login = (jwt = '') => ({ type: 'Login', JWT: jwt });

export const logout = () => ({ type: 'Logout' });

export const setStore = (payload) => ({ type: 'SetStore', payload: payload });

export const authStart = () => ({ type: 'AuthStart' });
export const authSuccess = (token, userId) => ({
    type: 'AuthSuccess',
        token: token,
            userId: userId
});
export const authFail = (error) => ({ type: 'AuthFail', error: error});
export const auth = (email = '', password = '', token = '') => {
    return dispatch => {
        dispatch(authStart());
        let requestBody = {
            email: email,
            password: password,
            token: token,
            requestToken: true
        }
        axios.post('http://localhost:8080/auth/login', requestBody)
            .then(response => {
                console.log(response);
                if (response.data.isAuthenticated === "false") throw Error('Authentication Failed');
                dispatch(authSuccess(response.data.token, response.data.email));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};
