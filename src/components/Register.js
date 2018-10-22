import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                mobileNumber: '',
                emailId: '',
                password: '',
                sapId: ''
            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formData);
    }

    render() {
        return (
            <div className="container">
                <form name="loginForm" >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="firstName">First Name</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" name="firstName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="lastName">Last Name</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" name="lastName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="mobileNumber">Mobile Number</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="text" className="form-control" id="mobileNumber" placeholder="Enter Mobile Number" name="mobileNumber" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="emailId">Email Id</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="email" className="form-control" id="emailId" placeholder="Enter Email Id" name="emailId" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="password">Password</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="password" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="sapId">Sap Id</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="number" className="form-control" id="sapId" placeholder="Enter Sap Id" name="sapId" onChange={this.handleChange} />
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