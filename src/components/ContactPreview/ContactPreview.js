import React from 'react';
import { Link } from "react-router-dom";
import './ContactPreview.css';

const ContactPreview = (props) => {
    const contact = props.contact;

    // function handleClick(e) {
    //     e.preventDefault();
    //     // props.history.push(`/contact/${props.contact._id}`);
    //     // console.log(props);
    //     // props.history.push(`/`);
    //     // console.log('The link was clicked.');
    // }

    const route = `/contact/${props.contact._id}`;
    return (
        // <li onClick={handleClick}>
        <li className="ContactPreview">
            <Link to={route}>
                <div className="flex align-center">
                    <img src={contact.picture} alt='' />
                    <span>{contact.name}</span>
                </div>
            </Link>
        </li>
    );
}

export default ContactPreview;
