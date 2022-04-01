import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import bg1 from '../../media/images/bg1.webp';
import bg2 from '../../media/images/bg2.webp';
import bg3 from '../../media/images/bg3.webp';
import bg4 from '../../media/images/bg4.webp';
import bg5 from '../../media/images/bg5.webp';
import { mdLorem, smLorem } from '../../utils/lorem';

const ScreenCarouselWithInfo = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return ( 
        <Carousel activeIndex={index} onSelect={handleSelect} pause={false} fade>
            <Carousel.Item>
                <img
                    className="carousel__img carousel__img--screen"
                    src={bg4}
                    alt="siema"
                />
                <Carousel.Caption>
                    <h2 className="carousel__title">Siema</h2>
                    {smLorem}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel__img carousel__img--screen"
                    src={bg5}
                    alt="siema"
                />
                <Carousel.Caption>
                    <h2 className="carousel__title">Siema</h2>
                    {smLorem}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel__img carousel__img--screen"
                    src={bg4}
                    alt="siema"
                />
                <Carousel.Caption>
                    <h2 className="carousel__title">Siema</h2>
                    {smLorem}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default ScreenCarouselWithInfo;