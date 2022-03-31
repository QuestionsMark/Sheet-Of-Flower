import React from 'react';

import CarouselWithInfo from '../../Utils/CarouselWithInfo';
import Titles from '../../Utils/Titles';

import { smLorem } from '../../../utils/lorem';

import previewImg from '../../../media/images/1.png';
import Introduction from './Introduction';
import Galery from '../../Utils/Galery';

import verticalImg from '../../../media/images/1.png';
import squareImg from '../../../media/images/2.png';
import horizontalImg from '../../../media/images/3.png';

//
const galery = [
    {
        id: 0,
        img: verticalImg,
        title: "Vertical"
    },
    {
        id: 1,
        img: squareImg,
        title: "Square"
    },
    {
        id: 2,
        img: horizontalImg,
        title: "Horizantal"
    },
]

const slides = [
    {
        id: 0,
        description: smLorem,
        img: previewImg,
        title: "Ela",
    },
    {
        id: 1,
        description: smLorem,
        img: previewImg,
        title: "Ola",
    },
    {
        id: 2,
        description: smLorem,
        img: previewImg,
        title: "Sławek",
    },
];
//

const Home = () => {
    return ( 
        <main className="main home">
            <section className="home__section intro">
                <Galery galery={galery}/>
                <Introduction />
            </section>
            <section className="home__section about-us">
                <Titles title="Poznajmy się" subtitle="Krótko o nas"/>
                <CarouselWithInfo slides={slides}/>
            </section>
        </main>
     );
}
 
export default Home;