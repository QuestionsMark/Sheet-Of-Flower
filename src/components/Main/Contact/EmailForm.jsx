import React, { useState } from 'react';

const EmailForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailSend = (e) => {
        e.preventDefault();
        console.log('Wysłano email');
    };

    return ( 
        <form className="form" onSubmit={handleEmailSend}>
            <input type="text" className="form__inp" placeholder="Imię i nazwisko" minLength={1} maxLength={150} value={username} onChange={e => setUsername(e.target.value)} />
            <input type="email" className="form__inp" placeholder="E-mail" minLength={1} maxLength={150} value={email} onChange={e => setEmail(e.target.value)} />
            <textarea className="form__textarea" placeholder="Twoja wiadomość" value={message} onChange={e => setMessage(e.target.value)} />
            <input type="submit" className="form__submit" value="Wyślij"/>
        </form>
     );
}
 
export default EmailForm;