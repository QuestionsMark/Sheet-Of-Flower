import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ControlledCarousel = ({ slides }) => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const carouselList = () => {
        return slides.map((s, i) => <Carousel.Item key={String(i)}>
            <img
                className="d-block w-100"
                src={s.img}
                alt={s.name}
            />
            <Carousel.Caption>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
            </Carousel.Caption>
        </Carousel.Item>);
    }
  
    return (
        <div className="container custom-container">
            <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
                {carouselList()}
            </Carousel>
        </div>
    );
}
 
export default ControlledCarousel;