import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApi } from '../../imports/ui/apiProvider';

export const EditorPicksSlide = () => {
  const { data, loading, error } = useApi();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const itemsToShow = 2;
  const totalSlides = Math.ceil(data.length / itemsToShow);


  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    const startIndex = i * itemsToShow;
    const slideItems = data.slice(startIndex, startIndex + itemsToShow);
    slides.push(
      <Carousel.Item key={i} className='p-5'>
        <div className="d-flex justify-content-center align-items-center">
          {slideItems.map((item, index) => (
            <div key={index} className="d-flex mx-3 w-50 p-5">
              <img className="d-block w-50" style={{ height: "150px" }} src={item.image} alt={`Slide ${i}-${index}`} />
              <div className='mx-2'>
                <a className='text-light text-decoration-none fw-bold' href='/'>Lorem ipsum dolor sit amet consectetur</a>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, a est porro culpa soluta nobis iusto </p>
              </div>
            </div>
          ))}
        </div>
      </Carousel.Item>
    );
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Carousel controls={false} className='bg-danger w-100'>
        {slides}
      </Carousel>
    </div>
  );
};
