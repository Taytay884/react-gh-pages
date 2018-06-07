import React, { Component } from "react";
// Store:
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveUser } from "../../store/actions";
// Components:
import SmartInput from "../../components/SmartInput/SmartInput";
// CSS:
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ""
      }
    };
  }
  updateInput = data => {
    console.log(data);
    this.setState({ user: data });
  };

  handleSignUp = e => {
    e.preventDefault();
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    this.props.history.push(from);
    this.props.saveUser(this.state.user);
  };

  render() {
    return (
      <section className="LoginPage page">
        <h1 className="title-tab">Sign Up</h1>
        <form onSubmit={this.handleSignUp}>
          <label className="default-label" htmlFor="name">
            Username
          </label>
          <SmartInput
            id="name"
            updateInput={this.updateInput}
            value={this.state.user.name}
          />
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveUser
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);

// export default LoginPage;
