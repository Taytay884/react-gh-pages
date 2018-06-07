import React, { Component } from 'react';
import ContactService from '../../services/ContactService'
import SmartInput from '../../components/SmartInput/SmartInput'

// Store:
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveContact, loadContact } from '../../store/actions'

import './ContactEditPage.css';

class ContactEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                _id: null,
                picture: '',
                name: '',
                email: '',
                phone: ''
            },
        }
    }

    componentDidMount() {
        const contactId = this.props.match.params.id;
        if (contactId) {
            this.props.loadContact(contactId, contact => {
                this.setState({ contact })
            });
        } else {
            const contact = ContactService.getEmptyContact()
            this.setState({ contact });
        }
    }

    handleSave = (e) => {
        e.preventDefault();
        const contact = this.state.contact;
        this.props.saveContact(
            contact,
            (contacts) => {
                if (contact._id) this.props.history.push(`/contact/${contact._id}`)
                else this.props.history.push(`/contact/${contacts[contacts.length - 1]._id}`)
            }
        )
    }

    updateInput = (data) => {
        const newContact = Object.assign(this.state.contact, data);
        this.setState(newContact);
    }

    render() {
        if (!this.state.contact) return <h1>Loading...</h1>
        return (
            <section className="ContactEditPage page" >
                <h1 className="title-tab">Edit</h1>
                <img src={this.state.contact.picture} alt='' />
                <form>
                    < ul >
                        <li>
                            <label htmlFor="name">Name</label>
                            <SmartInput id="name" updateInput={this.updateInput} value={this.state.contact.name} />
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <SmartInput id="email" updateInput={this.updateInput} value={this.state.contact.email} />
                        </li>
                        <li>
                            <label htmlFor="phone">Phone</label>
                            <SmartInput id="phone" updateInput={this.updateInput} value={this.state.contact.phone} />
                        </li>
                    </ul>
                    <button onClick={this.handleSave}>
                        Save
                    </button>
                </form>
            </section >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveContact,
        loadContact
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage);

// export default ContactEditPage;
