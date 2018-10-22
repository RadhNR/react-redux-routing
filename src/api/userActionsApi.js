import axios from 'axios';
import $ from 'jquery';

 class UserActionApi {
    static loginUser(userData) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/users/rest/login', userData).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject({ status: error.response.status, message: error.message });
            });
            // $ajax.post('http://localhost:3000/users/rest/login').then(function (response) {
            //     resolve(response);
            // }).catch(function (error) {
            //     reject({ status: error.response.status, message: error.message });
            // });

        })
    }
}

export default UserActionApi;