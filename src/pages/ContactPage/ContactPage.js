import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import "./ContactPage.css";

// Store
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadContacts } from "../../store/actions";

class ContactPage extends Component {
  componentDidMount() {
    this.renderContacts();
    // console.log("userState", this.props.user.balance);
  }

  renderContacts = (filterBy = null) => {
    this.props.loadContacts(filterBy);
  };

  handleFilter = e => {
    const input = e.target.value;
    console.log(input);
    let filterBy = { term: input };
    this.renderContacts(filterBy);
  };

  render() {
    return (
      <section className="ContactPage page">
        <h1 className="title-tab">Contacts</h1>
        <Filter handleFilter={this.handleFilter} />
        <ContactList contacts={this.props.contacts} />
        <Link className="add-contact" to="/contact/new">
          <i className="add-contact-icon" />
        </Link>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadContacts
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage);
