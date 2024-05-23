import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApi } from '../../imports/ui/apiProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


export const EditorPicksSlide = () => {
  const { data, loading, error } = useApi();

  if (loading) {
    return <div><FontAwesomeIcon icon={faSpinner} spin /></div>;
  }

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  const itemsToShow = 2;
  const totalSlides = Math.ceil(data.result.length / itemsToShow);


  const slides = [];
  for (let x = 0; x < totalSlides; x++) {
    const startIndex = x * itemsToShow;
    const slideItems = data.result.slice(startIndex, startIndex + itemsToShow);
    slides.push(
      <Carousel.Item key={x} className='p-5'>
        <div className="d-flex justify-content-center align-items-center">
          {slideItems.map((item, index) => (
            <div key={index} className="d-flex w-50 p-2">
              <img className="d-block w-50" style={{ height: "150px" }} src={item.image} alt={item.name} />
              <div className='mx-2'>
                <a href={item.key} className='text-light text-decoration-none fw-bold'>{item.name}</a>
                <p className='description-text' >{item.description}</p>
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
