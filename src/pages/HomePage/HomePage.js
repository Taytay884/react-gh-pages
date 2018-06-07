import React, { Component } from "react";

import "./HomePage.css";

// Store
import { connect } from "react-redux";

// CMPS:
import MoveList from "../../components/MoveList/MoveList";
import BitcoinChart from "../../components/BitcoinChart/BitcoinChart";

class HomePage extends Component {
  render() {
    const user = this.props.user;
    console.log("user", user);
    return (
      <section className="HomePage page">
        <h1 className="title-tab">Home</h1>
        <p>
          Hello <span>{user.name}</span>, Your balance is{" "}
          <span>{user.balance}$</span>
        </p>
        <BitcoinChart />
        <h2>Your Moves</h2>
        {user.moves ? (
          <MoveList moves={user.moves} />
        ) : (
          <h3>No transactions for now.</h3>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(HomePage);
