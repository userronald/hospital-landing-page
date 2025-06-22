import { FaqSectionData } from "../../data/data";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {FaqSectionData.map((section, secIndex) => (
        <section
          key={secIndex}
          className="relative bg-[#00B8C5] text-white pt-16 pb-16 pr-4 pl-4 lg:pl-0 lg:pr-32 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/dots-bg.svg')] bg-no-repeat bg-right bg-contain opacity-10 pointer-events-none z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Image - Edge to Edge on large screens */}
            <div className="relative w-full h-full">
              <img
                src={section.faqImage}
                alt="FAQ Visual"
                className="w-full h-full object-cover rounded-none lg:rounded-lg"
              />

              {/* Modern Play Button */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-20 h-20 rounded-full bg-white/70 flex justify-center items-center shadow-xl transition hover:scale-105">
                  <div className="w-14 h-14 rounded-full bg-[#00B8C5] flex justify-center items-center text-white text-3xl font-bold shadow-md">
                    ▶
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="mt-6 lg:mt-0">
              <p className="text-white text-lg mb-1">{section.subHeading}</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-white">
                {section.mainHeading}
              </h3>

              {/* Accordion */}
              {section.faqItems?.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#00B8C5]/20 border border-white/20 rounded-md mb-4 p-5 transition-all duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-lg text-white"
                    onClick={() => handleAccordion(index)}
                  >
                    <span className="italic">{item.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp className="text-white" />
                    ) : (
                      <ChevronDown className="text-white" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <p className="text-white/80 mt-3 leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default FaqSection;
