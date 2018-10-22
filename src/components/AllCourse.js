import React, { Component } from 'react';
import Course from './Course';
import axios from 'axios';

export default class AllCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        this.getAllCourses().then(response => {
            this.setState({ courses: response.data })
        });
    }
    getAllCourses = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/course/rest/getAllCourse').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject({ status: error.response.status, message: error.message });
            });
        })
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                {
                    this.state.courses.map((course, i) => {
                        return <li className="list-group-item"  key={i} ><Course course={course}/></li>
                    })
                }
                </ul>
            </div>
        )
    }
}