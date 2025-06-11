import { aboutUsSectionData } from "../../data/data";

const AboutUsSection = () => {
  return (
    <>
      {aboutUsSectionData.map((item, index) => (
        <section key={index} className="space-y-10">
          {/* Row 1: What We Do Section */}
          <section className="relative pt-20 pb-10 text-center bg-white">
            <div className="absolute top-0 left-0 z-0  ">
              <img
                src={item.aboutUsDNAImage}
                alt="DNA"
                className="h-[200px] md:h-[500px]"
              />
            </div>
            <div className="container mx-auto px-4">
              <p className="font-raleway text-primary text-sm font-semibold uppercase mb-2">
                {item.whtWeDoSubText}
              </p>
              <h2 className="text-3xl font-bold text-dark mb-4">
                {item.whtWeDoHeading}
              </h2>
              <p className="text-base text-body-color max-w-xl mx-auto">
                {item.whtWeDoDescription}
              </p>
            </div>
          </section>

          {/* Row 2: Graph Image */}
          <div className="w-full px-20">
            <img
              src={item.aboutUsBgImage}
              alt="Graph Background"
              className="w-full object-cover"
            />
          </div>

          {/* Row 3: Icon Grid */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {item.iconImage?.map((icon, i) => (
                <div key={i}>
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

          {/* Row 4: About Us Section */}
          <section className="pt-20 pb-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
              {/* Left side */}
              <div className="w-full flex flex-col items-center text-center">
                <p className="text-primary text-sm font-semibold uppercase mb-2">
                  {item.aboutUsSubText}
                </p>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  {item.aboutUsHeading}
                </h2>
                <p className="text-base mb-6 text-center">
                  {item.aboutUsDescription}
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 text-white bg-primary hover:bg-blue-700 transition rounded"
                >
                  {item.aboutUsButton}
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full relative">
              <img
                src={item.aboutUsDoctorImage}
                alt="Doctors"
                className="w-full max-h-[650px] object-contain relative z-10"
              />
            </div>
          </section>
        </section>
      ))}
    </>
  );
};

export default AboutUsSection;
