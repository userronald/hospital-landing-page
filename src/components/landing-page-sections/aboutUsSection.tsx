import { aboutUsSectionData } from "../../data/data";

const AboutUsSection = () => {
  return (
    <>
      {aboutUsSectionData.map((item, index) => (
        <section key={index}>
          {/* What We Do Section */}
          <section className="wht-we-do pt-20 pb-10 bg-[#EEF6F9] relative z-10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-primary text-sm font-semibold uppercase mb-2">
                  {item.whtWeDoSubText}
                </p>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  {item.whtWeDoHeading}
                </h2>
                <p className="text-base text-body-color max-w-xl mx-auto">
                  {item.whtWeDoDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {item.iconImage?.map((icon, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={icon.src}
                      alt={icon.altText}
                      className="mx-auto mb-4"
                    />
                    <p className="text-sm font-medium text-gray-700">
                      {item.iconTexts?.[i]?.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Background image (graph) */}
            <div className="absolute bottom-0 left-0 w-full opacity-10 z-0">
              <img
                src={item.aboutUsBgImage}
                alt="Background Graph"
                className="w-full"
              />
            </div>
          </section>

          {/* About Us Section */}
          <section className="about-us pt-20 pb-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <p className="text-primary text-sm font-semibold uppercase mb-2">
                  {item.aboutUsSubText}
                </p>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  {item.aboutUsHeading}
                </h2>
                <p className="text-base text-body-color mb-6">
                  {item.aboutUsDescription}
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 text-white bg-primary hover:bg-blue-700 transition rounded"
                >
                  {item.aboutUsButton}
                </a>
              </div>
              <div className="w-full md:w-1/2 relative">
                <img
                  src={item.aboutUsDoctorImage}
                  alt="Doctors"
                  className="w-full z-10 relative"
                />
                <img
                  src={item.aboutUsDNAImage}
                  alt="DNA"
                  className="absolute -bottom-5 -left-5 w-32 opacity-50 z-0"
                />
              </div>
            </div>
          </section>
        </section>
      ))}
    </>
  );
};

export default AboutUsSection;
