import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return ( 
        <footer className="footer">
            <p className="footer__info">tel. 530 681 528</p>
            <p className="footer__info">a.bien2950@gmail.com</p>
            <div className="footer__social-media">
                {/* <Twitter /> */}
                <a href="https://www.facebook.com/ola.dziurman" target="_blank" className="footer__link"><FontAwesomeIcon icon="fa-brands fa-facebook-f" className="footer__icon" /></a>
                <a href="#" target="_blank" className="footer__link"><FontAwesomeIcon icon="fa-brands fa-instagram" className="footer__icon" /></a>
            </div>
        </footer>
     );
}
 
export default Footer;