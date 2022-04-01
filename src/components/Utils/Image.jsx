import React from 'react';

const Image = ({ src, alt, isGalery, active }) => {
    return <img src={src} alt={alt} className={`${isGalery ? 'img img--galery' : 'img'}${active ? ' active' : ''}`}/>;
}
 
export default Image;