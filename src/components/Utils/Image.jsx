import React from 'react';

const Image = ({ src, alt, isLightBox }) => {
    return <img src={src} alt={alt} className={`${isLightBox ? 'img img--galery' : 'img'}`}/>;
}
 
export default Image;