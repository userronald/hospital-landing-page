import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialSectionData } from "../../data/data";
import { useRef, useState } from "react";

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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-[#00ADB5] text-xl font-semibold mb-2">
          {item.subHeading}
        </h4>
        <h3 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
          {item.mainHeading}
        </h3>

        <Slider {...settings} ref={sliderRef}>
          {item.testimonials?.map((t, idx) => (
            <div key={idx} className="px-8">
              <p className="text-gray-600 italic text-lg leading-relaxed mb-4">
                “{t.text}”
              </p>
              <h5 className="text-[#00ADB5] text-xl font-semibold">
                {item.testimonialReviewer?.[idx]?.text}
              </h5>
              <p className="text-gray-500">
                {item.reviewerDesignation?.[idx]?.text}
              </p>
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
