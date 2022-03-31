import React from 'react';

const Titles = ({ title, subtitle }) => {
    return ( 
        <>
            <h2 className="title title--md home__title">{title}</h2>
            <h2 className="title title--sm">{subtitle}</h2>
        </>
     );
}
 
export default Titles;