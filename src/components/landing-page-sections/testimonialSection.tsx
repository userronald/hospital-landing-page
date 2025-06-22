import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialSectionData } from "../../data/data";
import { useRef, useState } from "react";
import { motion } from "framer-motion";


const TestimonialSection = () => {
  const sliderRef = useRef<Slider>(null);
  const [active, setActive] = useState(0);
  const item = TestimonialSectionData[0];
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    swipe: true,
    beforeChange: (_: number, next: number) => setActive(next),
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={item.bgImage}
          alt="Testimonial Background"
          className="w-full h-full object-contain opacity-10 pointer-events-none"
        />
      </div>
      <div className="container mx-auto px-4 text-center">
        <motion.h4
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-raleway text-[#00ADB5] text-xl font-semibold mb-2"
        >
          {item.subHeading}
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-raleway text-3xl md:text-4xl font-bold text-[#333] mb-6"
        >
          {item.mainHeading}
        </motion.h2>

        <Slider {...settings} ref={sliderRef}>
          {item.testimonials?.map((t, idx) => (
            <div
              key={idx}
              className="relative px-4 md:px-32 lg:px-64 flex flex-col items-center text-center"
            >
              {/* Quote Icon as Background */}
              <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-40 w-40 text-[#00ADB5] opacity-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6.17C5.02 8.32 4 10.78 4 13.5 4 15.43 5.57 17 7.5 17S11 15.43 11 13.5 9.43 10 7.5 10c-.48 0-.94.08-1.37.21.19-1.23.72-2.39 1.54-3.33zM16.17 6.17C14.02 8.32 13 10.78 13 13.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5S18.93 10 17 10c-.48 0-.94.08-1.37.21.19-1.23.72-2.39 1.54-3.33z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-gray-600 italic text-lg leading-relaxed mb-4">
                  {t.text}
                </p>
                <h5 className="text-[#00ADB5] text-xl font-semibold">
                  {item.testimonialReviewer?.[idx]?.text}
                </h5>
                <p className="text-gray-500">
                  {item.reviewerDesignation?.[idx]?.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-8 flex justify-center space-x-4">
          {item.testimonialImages?.map((img, i) => (
            <button
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`focus:outline-none transition-transform ${
                i === active ? "scale-110" : "scale-100 opacity-70"
              }`}
            >
              <img
                src={img.src}
                alt={img.altText}
                className="w-16 h-16 rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
