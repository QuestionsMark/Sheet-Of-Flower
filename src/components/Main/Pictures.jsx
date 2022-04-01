import React from 'react';

import Galery from '../Utils/Galery';
import Titles from '../Utils/Titles';

import img1 from '../../media/images/4.png';
import img2 from '../../media/images/5.png';
import img3 from '../../media/images/6.png';
import Text from '../Utils/Text';

//
const galery = [
    {
        id: 1,
        img: img1,
        img2: img3,
        alt: "pierwszy",
        title: "Siema Witam",
    },
    {
        id: 2,
        img: img2,
        img2: img1,
        alt: "pierwszy",
        title: "Siema Witam",
    },
    {
        id: 3,
        img: img3,
        img2: img1,
        alt: "pierwszy",
        title: "Siema Witam",
    },
    {
        id: 4,
        img: img2,
        img2: img1,
        alt: "pierwszy",
        title: "Siema Witam",
    },
    {
        id: 5,
        img: img1,
        img2: img2,
        alt: "pierwszy",
        title: "Siema Witam",
    },
    {
        id: 6,
        img: img3,
        img2: img1,
        alt: "pierwszy",
        title: "Siema Witam WItam Elo ELo",
    },
]
//

const Pictures = () => {
    return ( 
        <main className="main pictures">
            {/* <Titles title="Obrazy" subtitle="Pędzlem na płutnie"/> */}
            <section className="pictures__description">
                <Text />
            </section>
            <Galery galery={galery}/>
            {/* <Pagination /> */}
        </main>
     );
}
 
export default Pictures;