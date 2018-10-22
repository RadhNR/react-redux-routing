import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AllCourse from './AllCourse';

import AddCourse from './AddCourse';
import Register from './Register';
import { PageNotFound } from './PageNotFound';
import MyRecomCourse from './MyRecomCourse';

const ManageCourse = ({ match }) => {

    return (
        <div className="">

            <div>
                <h2>Manage Courses</h2>
                <ul className="">
                    <li>
                        <Link to={`${match.url}/allCourses`}>All Courses</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/addCourse`}>Add Course</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/myRecomCourse`}>My Recommanded Course</Link>
                    </li>
                </ul>
                <div className="">
                    <Route path={`${match.path}/:content`} component={ManageCourseContent} />
                    <Route
                        exact
                        path={match.path}
                        render={() => <h3>Please select a topic.</h3>}
                    />
                </div>

            </div>
        </div>
    )
}

const renderComp = (comp) => {
    switch (comp) {
        case 'allCourses':
            return <AllCourse />
        case 'addCourse':
            return <AddCourse />
        case 'myRecomCourse':
            return <MyRecomCourse />
        default:
            return <PageNotFound />
    }
}
export const ManageCourseContent = ({ match }) => (
    <div>
        {
            renderComp(match.params.content)
        }
    </div>
);

export default ManageCourse;