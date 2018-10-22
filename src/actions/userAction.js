import userActionsApi from '../api/userActionsApi';
import * as actionTypes from './actionTypes';

const loginSuccess = (response) => {
    return {
        type: actionTypes.LOGIN_USER,
        response
    }
}

const loginFailure = (err) => {
    return {
        type: actionTypes.LOGIN_USER,
        err
    }
}

export const loginUser = (userData) => {
    return function (dispatch) {
        return userActionsApi.loginUser(userData).then((response) => {
            dispatch(loginSuccess(response.data));
        }).catch(err => {
            console.log(err);
            dispatch(loginFailure(err));
        });
    }
}