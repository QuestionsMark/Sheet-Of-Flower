import React from 'react';
import CarouselWithInfo from '../../Utils/CarouselWithInfo';
import Titles from '../../Utils/Titles';

import { smLorem } from '../../../utils/lorem';

import previewImg from '../../../media/images/1.png';
import ScreenCarouselWithInfo from '../../Utils/ScreenCarouselWithInfo';

//
const slides = [
    {
        id: 0,
        description: smLorem,
        img: previewImg,
    },
    {
        id: 1,
        description: smLorem,
        img: previewImg,
    },
    {
        id: 2,
        description: smLorem,
        img: previewImg,
    },
];

const News = () => {
    return ( 
        <main className="main">
            {/* <Titles title="Nowości" subtitle="Już są z nami"/> */}
            {/* <CarouselWithInfo slides={slides}/> */}
            <ScreenCarouselWithInfo />
        </main>
     );
}
 
export default News;