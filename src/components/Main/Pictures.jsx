import React from 'react';

import Galery from '../Utils/Galery';
import Titles from '../Utils/Titles';

import img1 from '../../media/images/1.png';
import img2 from '../../media/images/2.png';
import img3 from '../../media/images/3.png';

//
const galery = [
    {
        id: 1,
        img: img1,
        alt: "pierwszy",
    },
    {
        id: 2,
        img: img2,
        alt: "pierwszy",
    },
    {
        id: 3,
        img: img3,
        alt: "pierwszy",
    },
    {
        id: 4,
        img: img2,
        alt: "pierwszy",
    },
    {
        id: 5,
        img: img1,
        alt: "pierwszy",
    },
    {
        id: 6,
        img: img3,
        alt: "pierwszy",
    },
]
//

const Pictures = () => {
    return ( 
        <main className="main">
            <Titles title="Obrazy" subtitle="Pędzlem na płutnie"/>
            <Galery galery={galery}/>
            {/* <Pagination /> */}
        </main>
     );
}
 
export default Pictures;