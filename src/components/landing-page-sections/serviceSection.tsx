import { serviceSectionData } from "../../data/data";
import { motion } from "framer-motion";


const ServiceSection = () => {
  return (
    <>
      {serviceSectionData.map((item, index) => (
        <section
          key={index}
          className=" pt-10 pb-20 bg-white relative text-center"
          id="service"
        >
          <div className="absolute top-0 left-0 z-0 ">
            <img
              src={item.bgImage}
              alt="Service"
              className="h-[200px] md:h-[250px] "
            />
          </div>
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h5
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-raleway text-xl font-semibold text-[#00ADB5] mb-2"
              >
                {item.subHeading}
              </motion.h5>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-raleway text-3xl md:text-4xl font-bold text-[#222] mb-4"
              >
                {item.mainHeading}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-500 max-w-xl mx-auto"
              >
                {item.description}
              </motion.p>
            </div>

            {/* Icon Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
              {item.iconImage?.map((icon, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,173,181,0.3)]  p-8 text-center transform transition-all duration-300 ease-in-out hover:bg-[#00ADB5] hover:scale-105 max-w-[400px] min-h-[300px] mx-auto"
                >
                  <div className="flex justify-center mb-4">
                    <img src={icon.src} alt={icon.altText} className="h-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#222] mb-3 group-hover:text-white transition-colors duration-300">
                    {item.iconText?.[i].text}
                  </h4>
                  <p className="text-gray-500 mb-4 group-hover:text-white transition-colors duration-300">
                    {item.iconDescription?.[i].text}
                  </p>
                  <a
                    href="#"
                    className="text-[#00ADB5] font-medium hover:underline inline-flex items-center group-hover:text-white transition-colors duration-300"
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
