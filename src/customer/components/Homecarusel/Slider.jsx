import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Sliderdata } from './Sliderdata';

const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
};

const items = Sliderdata.map((item) => (
    <img className='cursor-pointer' role='presentation' src={item.imageUrl} alt='/' />
));

const Slider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
    />
);

export default Slider;
