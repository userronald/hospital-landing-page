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
              <p className="font-raleway text-primary text-xl font-semibold  mb-5 text-[#00adb5]">
                {item.whtWeDoSubText}
              </p>
              <h2 className="font-raleway  text-5xl font-bold text-dark mb-8">
                {item.whtWeDoHeading}
              </h2>
              <p className="text-base text-body-color max-w-xl mx-auto text-lg text-gray-500">
                {item.whtWeDoDescription}
              </p>
            </div>
          </section>

          {/* Row 2: Graph Image */}
          <div className="w-full px-40">
            <img
              src={item.aboutUsBgImage}
              alt="Graph Background"
              className="w-full object-cover"
            />
          </div>

          {/* Row 3: Icon Grid */}
          <div className="container mx-auto px-30 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {item.iconImage?.map((icon, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-[87px] h-[87px] flex items-center justify-center rounded-full shadow-[0_0_25px_rgba(0,173,181,0.15)] bg-white mb-4">
                    <img
                      src={icon.src}
                      alt={icon.altText}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <p className="text-base sm:text-[17px] font-medium text-gray-700">
                    {item.iconTexts?.[i]?.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 4: About Us Section */}
          <section className="pt-20 pb-20 bg-white">
            <div className="container  px-4 flex flex-col md:flex-row items-center gap-10">
              {/* Left side */}
              <div className=" mx-56 w-full flex flex-col items-center text-center">
                <p className="text-primary text-xl text-[#00adb5] font-semibold mb-4">
                  {item.aboutUsSubText}
                </p>
                <h2 className="font-raleway text-5xl font-extrabold text-gray-800 mb-6">
                  {item.aboutUsHeading}
                </h2>
                <p className="text-lg text-gray-500 mb-6 text-center">
                  {item.aboutUsDescription}
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-3 text-white bg-[#00adb5] hover:bg-[#00adb5ab] transition rounded text-lg font-semibold mb-12"
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
                className="w-full max-h-[700px] object-contain relative z-10"
              />
            </div>
          </section>
        </section>
      ))}
    </>
  );
};

export default AboutUsSection;
