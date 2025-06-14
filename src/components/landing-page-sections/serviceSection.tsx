import { serviceSectionData } from "../../data/data";

const ServiceSection = () => {
  return (
    <>
      {serviceSectionData.map((item, index) => (
        <section key={index} className="pt-20 pb-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h5 className="text-primary text-xl font-semibold text-[#00ADB5] mb-2">
                {item.subHeading}
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">
                {item.mainHeading}
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                {item.description}
              </p>
            </div>

            {/* Icon Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {item.iconImage?.map((icon, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-8 text-center transition duration-300 hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4">
                    <img src={icon.src} alt={icon.altText} className="h-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#222] mb-3">
                    {item.iconText?.[i].text}
                  </h4>
                  <p className="text-gray-500 mb-4">
                    {item.iconDescription?.[i].text}
                  </p>
                  <a
                    href="#"
                    className="text-[#00ADB5] font-medium hover:underline inline-flex items-center"
                  >
                    {item.iconButton} <span className="ml-1">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceSection;
