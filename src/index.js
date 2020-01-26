import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom.css';

const slides = [
  {
    img: 'https://dummyimage.com/1200x800/dde3e7/9ba4ab'
  },
  {
    img: 'https://dummyimage.com/1200x800/dde3e7/9ba4ab'
  },
  {
    img: 'https://dummyimage.com/1200x800/dde3e7/9ba4ab'
  },
  {
    img: 'https://dummyimage.com/1200x800/dde3e7/9ba4ab'
  },
  {
    img: 'https://dummyimage.com/1200x800/dde3e7/9ba4ab'
  }
];

const Prev = ({ onClick }) => (
  <span className="left-arrow" onClick={onClick} />
);

const Next = ({ onClick }) => (
  <span className="right-arrow" onClick={onClick} />
);

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <Prev />,
    nextArrow: <Next />    
  };

  return (
    <div className="container">
      <div className="slides">
        <h2>Carousel Items</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              
                <Link key={index} to={'/'} className="slide">
                  <img src={slide.img} data-index={index} alt="" />
                  <p>Slide {index}</p>
                </Link>
              
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Carousel />
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
