import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import SingleGaleryItem from './SingleGaleryItem';

const Galery = ({ galery }) => {

    const galeryList = galery.map(i => <SingleGaleryItem key={i.id} alt={i.title} src={i.img} />);

    return ( 
        <section className="galery">
            <SRLWrapper>
                <ul className="galery__list">
                    {galeryList}
                </ul>
            </SRLWrapper>
        </section>
     );
}
 
export default Galery;