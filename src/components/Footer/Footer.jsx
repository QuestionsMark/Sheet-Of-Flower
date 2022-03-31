import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return ( 
        <footer className="footer">
            <p className="footer__info">tel. 530 681 528</p>
            <p className="footer__info">a.bien2950@gmail.com</p>
            <div className="footer__social-media">
                {/* <Twitter /> */}
                <a href="#" className="footer__link"><FontAwesomeIcon icon="fa-brands fa-facebook-f" className="footer__icon" /></a>
                <a href="#" className="footer__link"><FontAwesomeIcon icon="fa-brands fa-twitter" className="footer__icon" /></a>
            </div>
        </footer>
     );
}
 
export default Footer;