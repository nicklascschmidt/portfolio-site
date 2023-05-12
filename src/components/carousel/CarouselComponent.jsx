/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

const imgStyle = {
  height: '100%',
};
const CarouselComponent = ({linkArray}) => {
  return (
    <Carousel showIndicators={false} infiniteLoop={true} showThumbs={false}>
      {linkArray.map((link, i) => (
        <img key={`carousel-image-${i}`} src={link} alt={`picture${i + 1}`} style={imgStyle} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
