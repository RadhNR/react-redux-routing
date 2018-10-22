import axios from 'axios';
//import $ from 'jquery';

export default class CourseApi {
    getAllCourses = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/course/rest/getAllCourse').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject({ status: error.response.status, message: error.message });
            });
        })
    }
}