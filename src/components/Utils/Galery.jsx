import React from 'react';

import SingleGaleryItem from './SingleGaleryItem';

const Galery = ({ galery }) => {

    const galeryList = galery.map(i => <SingleGaleryItem key={i.id} item={i} />);

    return ( 
        <section className="galery">
            <ul className="galery__list">
                {galeryList}
            </ul>
        </section>
     );
}
 
export default Galery;