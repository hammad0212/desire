import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectioncard/HomeSectioncard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Homesectioncarusel({ data = [], sectionName = '' }) {
  console.log("data from the carusel",data)
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsToShow = 5;
  const totalItems = data.length;

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: itemsToShow },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      const newIndex = Math.max(activeIndex - 1, 0);
      setActiveIndex(newIndex);
      carouselRef.current?.slideTo(newIndex);
    }
  };

  const slideNext = () => {
    if (activeIndex < totalItems - itemsToShow) {
      const newIndex = Math.min(activeIndex + 1, totalItems - itemsToShow);
      setActiveIndex(newIndex);
      carouselRef.current?.slideTo(newIndex);
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.map((item) => (
    <HomeSectionCard key={item._id} product={item} /> // Pass the product to HomeSectionCard
  ));

  return (
    <div className="border">
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className="relative px-4 lg:px-8">
        <div className="relative p-5">
          <AliceCarousel
            ref={carouselRef}
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
          />

          {/* Previous Button */}
          {activeIndex > 0 && (
            <button
              onClick={slidePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 z-50 text-white bg-black/50 rounded-full p-2 border-none outline-none cursor-pointer hover:bg-red-500 transition-colors duration-300"
              aria-label="previous"
            >
              <KeyboardArrowLeftIcon />
            </button>
          )}

          {/* Next Button */}
          {activeIndex < totalItems - itemsToShow && (
            <button
              onClick={slideNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 z-50 text-white bg-black/50 rounded-full p-2 border-none outline-none cursor-pointer hover:bg-red-500 transition-colors duration-300"
              aria-label="next"
            >
              <KeyboardArrowRightIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homesectioncarusel;
