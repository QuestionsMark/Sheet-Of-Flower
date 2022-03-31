import React from 'react';

import ContactInfo from './ContactInfo';
import EmailForm from './EmailForm';

const Contact = () => {
    return ( 
        <main className="main contact">
            <section className="contact__section">
                <h2 className="contact__title title title--md">Skontaktuj się z nami</h2>
                <div className="contact__container">
                    <ContactInfo icon="fa-solid fa-location-pin" text="ul. Lorema Ipsuma 23/2a 23-123 Miasto" title="adres"/>
                    <ContactInfo icon="fa-solid fa-mobile-screen" text="123-345-546" title="phone"/>
                    <ContactInfo icon="fa-solid fa-envelope" text="costam.email@gmail.com" title="email"/>
                </div>
            </section>
            <section className="contact__section">
                <h2 className="contact__title title title--md">Formularz kontaktowy</h2>
                <EmailForm />
            </section>
        </main>
     );
}
 
export default Contact;