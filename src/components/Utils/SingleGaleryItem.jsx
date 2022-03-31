import React from 'react';
import LightBoxElement from './LightBoxElement';

const SingleGaleryItem = ({ alt, src }) => {
    return ( 
        <li className="galery__item">
            <LightBoxElement alt={alt} src={src}/>
        </li>
     );
}
 
export default SingleGaleryItem;