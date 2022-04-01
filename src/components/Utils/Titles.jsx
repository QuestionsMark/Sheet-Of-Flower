import React from 'react';

const Titles = ({ title, subtitle }) => {
    return ( 
        <div className="title__wrapper">
            <h2 className="title title--md home__title">{title}</h2>
            <h2 className="title title--sm">{subtitle}</h2>
        </div>
     );
}
 
export default Titles;