import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { Router, Route, Switch } from 'react-router'

import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ContactDetailsPage from "./pages/ContactDetailsPage/ContactDetailsPage";
import ContactEditPage from "./pages/ContactEditPage/ContactEditPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import PrivateRoute from "./components/Router/PrivateRoute";
import Header from "./components/Header/Header";

import { loadUser } from "./store/actions";
// import logo from './logo.svg';
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.loadUser();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/login" component={LoginPage} />
              <PrivateRoute path="/contact/new" component={ContactEditPage} />
              <PrivateRoute
                path="/contact/:id/edit"
                component={ContactEditPage}
              />
              <PrivateRoute
                exact
                path="/contact/:id"
                component={ContactDetailsPage}
              />
              {/* <Route exact path="/contact" component={ContactPage} /> */}
              <PrivateRoute exact path="/contact" component={ContactPage} />
              <PrivateRoute path="/" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadUser
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(App);
// export default App;
