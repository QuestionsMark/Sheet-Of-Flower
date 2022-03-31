import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = ({ title, text, icon }) => {
    return ( 
        <div className="contact__info">
            <FontAwesomeIcon icon={icon} className="contact__icon"/>
            <h3 className="contact__info-title">{title}</h3>
            <p className="contact__info-text">{text}</p>
        </div>
);
}
 
export default ContactInfo;