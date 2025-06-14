import { TestimonialSectionData } from "../../data/data";

const TestimonialSection = () => {
  return (
    <>
      {TestimonialSectionData.map((item, index) => (
        <section key={index} className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            {/* Subheading */}
            <h4 className="text-[#00ADB5] text-xl font-semibold mb-2">
              {item.subHeading}
            </h4>

            {/* Main Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
              {item.mainHeading}
            </h3>

            {/* Testimonial Text */}
            <div className="text-gray-600 italic max-w-3xl mx-auto text-lg leading-relaxed">
              {item.testimonials?.map((i, idx) => (
                <p key={idx} className="mb-4">
                  {i.text}
                </p>
              ))}
            </div>

            {/* Author Info */}
            <div className="mt-6">
              {item.testimonialReviewer?.map((review, i) => (
                <div key={i}>
                  <h4 className="text-[#00ADB5] text-xl font-semibold">
                    {review.text}
                  </h4>

                  <p className="text-gray-500">{item.reviewerDesignation?.[i]?.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default TestimonialSection;
