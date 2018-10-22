import React, {Component} from 'react';

export default class AddCourse extends Component {
    render() {
        return (
            <div>
                <form name="loginForm" >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="courseName">Course Name</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="text" className="form-control" id="userName" placeholder="Enter email" name="userName" onChange={this.handleChange} />
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