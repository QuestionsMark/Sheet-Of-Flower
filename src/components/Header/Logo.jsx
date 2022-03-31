import React from 'react';

import logoImg from '../../media/images/logo.png';

const Logo = () => {
    return ( 
        <div className="logo">
            <div className="img-wrapper logo__img-wrapper">
                <img src={logoImg} alt="logo" className="img" />
            </div>
        </div>
     );
}
 
export default Logo;