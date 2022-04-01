import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselWithInfo = ({ slides }) => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const carouselList = () => {
        return slides.map(s => <Carousel.Item key={s.id}>
            <img
                className="d-block w-100"
                src={s.img}
                alt={s.title}
            />
        </Carousel.Item>);
    }

    const showInfo = () => {
        const { title, description } = slides[index];

        return (
            <div className="carousel__info">
                {title && <h3 className="carousel__title carousel__title--center">{title}</h3>}
                <p className="text carousel__text">{description}</p>
            </div>
        )
    };
  
    return (
        <div className="container carousel__container carousel__container--portrait">
            <Carousel activeIndex={index} onSelect={handleSelect} pause={false} interval={15000}>
                {carouselList()}
            </Carousel>
            {showInfo()}
        </div>
    );
}
 
export default CarouselWithInfo;