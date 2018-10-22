import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../actions/userAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: ''
            },
            notification: ''
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = (event) => {
        console.log(this.state.formData);
        //this.props.actions.loginUser(this.state.formData);
        event.preventDefault();
        this.props.actions.loginUser(this.state.formData);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.status === 'success') {
            this.props.history.push('manageCourse');
        } else {
            this.setState({ notification: nextProps.user.message })
        }
    }

    render() {
        return (
            <div className="container">
            <div>
                {this.state.notification ? <div className="alert alert-danger" >{this.state.notification}</div> : ''}
            </div>
                <form name="loginForm" >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="userName">E-Mail</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="email" className="form-control" id="userName" placeholder="Enter email" name="userName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="email">Password</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} id="submitBtn">Submit</button>
                        </div>
                    </div>
                </form>
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

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);