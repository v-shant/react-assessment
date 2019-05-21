import { user,Dashboard } from '../_constants/data'
export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    var userObj = null;
    if(username === user.username && password === user.password){
        userObj = {
            name : username
        }
        localStorage.setItem('user', JSON.stringify(userObj));
    }
    return userObj;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    return Dashboard;
}
