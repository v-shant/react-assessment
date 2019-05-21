import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        var user = userService.login(username, password);
        if(user){
            dispatch(success(user));
            history.push('/');
        }else{
            dispatch(failure("Login failed. Username or password not valid."));
            dispatch(alertActions.error("Login failed. Username or password not valid."));
        }
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        var allusers = userService.getAll();
        debugger;
        if(allusers){
            dispatch(success(allusers));
        }else{
            dispatch(failure("No Data"))
        }
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}