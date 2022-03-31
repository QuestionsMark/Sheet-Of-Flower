import React from 'react';
import Image from './Image';

const LightBoxElement = ({ src, alt }) => {
    return ( 
        <a href={src} className="light-box__link">
            <Image src={src} alt={alt} srl_gallery_image isLightBox/>
        </a>
     );
}
 
export default LightBoxElement;