import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const EditorPicksSlide = () => {
  return (
    <Carousel className='bg-dark'>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="/images/logo.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="/images/logo.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="/images/logo.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
