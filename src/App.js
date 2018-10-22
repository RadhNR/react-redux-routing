import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { PageNotFound } from './components/PageNotFound';
import ManageCourse from './components/ManageCourse';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/manageCourse" component= {ManageCourse} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
