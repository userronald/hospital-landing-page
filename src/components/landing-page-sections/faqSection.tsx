import { FaqSectionData } from "../../data/data";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Use any icon lib you prefer

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
          className="bg-[#00B8C5]/10 py-16 px-4 md:px-20 lg:px-36"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side Image */}
            <div className="relative">
              <img
                src={section.faqImage}
                alt="Frequently Asked Questions"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex justify-center items-center shadow-md">
                  <div className="w-12 h-12 rounded-full bg-[#00B8C5] flex justify-center items-center text-white text-xl font-bold">
                    ▶
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side FAQ */}
            <div>
              <p className="text-[#00B8C5] font-medium text-lg">
                {section.subHeading}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-slate-800">
                {section.mainHeading}
              </h3>

              {/* Accordion Items */}
              {section.faqItems?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md mb-4 shadow-md p-4 transition-all duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center text-left font-semibold text-lg text-slate-700"
                    onClick={() => handleAccordion(index)}
                  >
                    <span>{item.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp className="text-[#00B8C5]" />
                    ) : (
                      <ChevronDown className="text-[#00B8C5]" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <p className="text-gray-600 mt-3 leading-relaxed">
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
