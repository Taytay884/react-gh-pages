import React, { Component } from "react";

// Store:
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { transferMoney, saveUser } from "../../store/actions";
import "./Transfer.css";

import SmartInput from "../../components/SmartInput/SmartInput";

class Transfer extends Component {
  state = {
    amount: ""
  };

  componentDidMount() {}

  updateInput = data => {
    this.setState(data);
  };

  handleTransfer = e => {
    e.preventDefault();
    let amount = this.state.amount;
    let cloneUser = Object.assign({}, this.props.user);
    if (amount <= 0 || cloneUser.balance < amount) {
      console.log("Error: insufficent funds");
      return;
    }
    cloneUser.balance -= amount;
    this.props.saveUser(cloneUser);
    this.props.transferMoney({ amount, to: this.props.contact.name });
    this.setState({ amount: "" });
  };
  render() {
    return (
      <section className="Transfer">
        <div>
          <form onSubmit={this.handleTransfer}>
            <h2>Want to transfer coins?</h2>
            <label htmlFor="amount">Amount</label>
            <SmartInput
              id="amount"
              type="number"
              updateInput={this.updateInput}
              value={this.state.amount}
            />
            <button type="submit">Transfer</button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ transferMoney, saveUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transfer);

// How I'm getting something from the service and put it into the state.

// How can I pass props to children...
