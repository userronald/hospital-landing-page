import { useState,useEffect } from "react";
import { heroSliderData } from "../../data/data"

const HeroSlider=()=>{

 const [currentSlide,setCurrentSlide] = useState(0);

  useEffect(()=> {
     const interval = setInterval(()=>{
        setCurrentSlide((prev)=>(prev + 1) % heroSliderData.length);
     },5000);
     return()=>clearInterval(interval);
  },[]);


    return (
      <>
        <div className="relative w-full h-[80vh] overflow-hidden">
          {heroSliderData.map((slide, index) => (
            <div
              key={slide.altText}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full w-full flex items-center px-6 md:px-16 lg:px-28 bg-gradient-to-r from-[#00adb5] via-[#00adb5]/80 to-transparent">
                <div className="w-full h-full flex items-center">
                  <div className="max-w-xl text-white space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold">
                      {slide.heading}
                    </h1>
                    <p className="text-lg md:text-xl">{slide.description}</p>
                    <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots Pagination */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
            {heroSliderData.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === currentSlide ? "bg-white" : "bg-gray-400"
                } transition duration-300`}
              ></div>
            ))}
          </div>
        </div>
      </>
    );
}

export default HeroSlider;  