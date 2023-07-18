import { Carousel } from "@material-tailwind/react";
import React, {useState} from "react";
import image1 from "../assets/Images/image1.jpeg";
import image2 from "../assets/Images/image2.jpeg"
import image3 from "../assets/Images/image3.jpeg"
import image4 from "../assets/Images/image4.jpeg"
import image5 from "../assets/Images/image5.jpeg"
 
export default function Example() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
    image2,
    image3,
    image4,
    image5
    ];
  
    const goToPreviousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="max-w-screen-xl mx-auto">
        <div className="relative ">
          <div className="lg:w-[1400px] lg:h-[800px]   xs:w-[600px] xs:h-[600px] justify-center mt-4">
          <img src={images[currentIndex]} alt="Carousel Slide" className=" lg:w-[1400px] lg:h-[800px] xs:w-[600px] xs:h-[600px] flex justify-center items-center"  />
          </div>
  
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full text-6xl"
            onClick={goToPreviousSlide}
          >
            &lt;
          </button>
  
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full text-6xl"
            onClick={goToNextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };