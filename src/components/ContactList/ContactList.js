import React from 'react';
import ContactPreview from '../ContactPreview/ContactPreview';
// import './css/ContactList.css';


const ContactList = (props) => {
    const contacts = props.contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)
    return (
        <section className="ContactList">
            <ul>
                {contacts}
            </ul>
        </section>
    );
}

export default ContactList;
