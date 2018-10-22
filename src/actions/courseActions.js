import CourseApi from '../api/courseApi'
import * as actions from './actionTypes';

export const getCourseSuccess = (response) => {
    console.log(response);

    return {
        type: actions.ALL_COURSES,
        data: response.data
    }
}

export const getAllCourses = () => {
    return function (dispatch) {
        return CourseApi.getAllCourses().then(response => {
            console.log(response)
            dispatch(getCourseSuccess(response));
        }).catch(error => {
            throw (error);
        });
    };
}