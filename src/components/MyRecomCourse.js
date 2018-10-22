import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import * as userAction from '../actions/userAction';

import Course from './Course';



class MyRecomCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myRecomCourse: []
        }
    }

    componentDidMount() {
        console.log(this.props.user.data);
        this.myRecomCourse().then(response => {
            this.setState({ myRecomCourse: response.data })
        });
    }

    myRecomCourse = () => {
        console.log(this.props.user.data);
        let postObj =  { emailId:(this.props.user.data) ?  this.props.user.data[0].EMAILID: ''}
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/course/rest/recomendedCourses', postObj).then(function (response) {
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
                        this.state.myRecomCourse.map((course, i) => {
                            return <li className="list-group-item" key={i} ><Course course={course} /></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        user: state.user
    }

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(userAction, dispatch)
//     }
// }

export default connect(mapStateToProps)(MyRecomCourse);