import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const SingleGaleryItem = ({ item }) => {

    const { id, alt, img, img2, title } = item;

    const [flag, setFlag] = useState(false);

    const toggleActive = () => {
        setFlag(prev => !prev);
    }

    return ( 
        <li className="galery__item" onMouseEnter={toggleActive} onMouseLeave={toggleActive}>
            <Link to={`/products/${id}`}>
                <Image src={img} alt={alt} isGalery active={flag}/>
                <Image src={img2} alt={alt} isGalery active={!flag}/>
                <p className="galery__title galery__title--picture">{title}</p>
            </Link>
        </li>
     );
}
 
export default SingleGaleryItem;