import React, { Component } from "react";
import { Link } from "react-router-dom";

// Store:
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadContact, saveUser } from "../../store/actions";
import "./ContactDetailsPage.css";

import SmartInput from "../../components/SmartInput/SmartInput";
import Transfer from "../../components/Transfer/Transfer";

class ContactDetailsPage extends Component {
  state = {
    contact: {}
  };

  componentDidMount() {
    const contactId = this.props.match.params.id;
    this.props.loadContact(contactId, contact => {
      this.setState({ contact });
    });
  }

  updateInput = data => {
    this.setState(data);
  };

  render() {
    if (this.state.contact.name) {
      return (
        <section className="ContactDetailsPage page">
          <div className="details">
            <h1 className="title-tab">Details</h1>
            <img src={this.state.contact.picture} alt="" />
            <h2>{this.state.contact.name}</h2>
            <ul>
              <li className="flex">
                <i className="email-icon" />
                {this.state.contact.email}
              </li>
              <li className="flex">
                <i className="phone-icon" />
                {this.state.contact.phone}
              </li>
            </ul>
            <Link to={`/contact/${this.state.contact._id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <hr />
          <Transfer contact={this.state.contact} />
        </section>
      );
    } else {
      return (
        <section className="ContactDetailsPage page">
          <h1>Wrong Contact ID.</h1>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadContact, saveUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetailsPage);

// How I'm getting something from the service and put it into the state.

// How can I pass props to children...
