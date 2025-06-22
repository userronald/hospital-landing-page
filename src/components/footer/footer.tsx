import { Link } from "react-router-dom";
import { FooterSectionData } from "../../data/data";
import Logo from "../header/logo";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const menuLinks = FooterSectionData.filter((item) => item.label && item.href);
  const appointmentLinks = FooterSectionData.filter(
    (item) => item.appointmentLabel && item.appointmentHref
  );
  const descriptionBlock = FooterSectionData.find(
    (item) => item.footerDescription
  );
  const socialIcons = descriptionBlock?.socialIcons || [];
  const mapBlock = FooterSectionData.find((item) => item.map);
  const mapTitle = FooterSectionData.find((item) => item.mapTitle)?.mapTitle;
  const quicklinkTitle = FooterSectionData.find(
    (item) => item.quicklinkTitle
  )?.quicklinkTitle;
  const copyright = FooterSectionData.find(
    (item) => item.copyrighttext
  )?.copyrighttext;

  return (
    <footer
      className="text-white py-16 px-5 md:px-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/footer/footer-bg.jpg')",
      }}
    >
      <div className="grid md:grid-cols-4 gap-10 z-10 relative">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="w-36">
            <Logo logoUrl="/images/cure_well.png" />
          </div>
          <p className="text-sm leading-relaxed text-white">
            {descriptionBlock?.footerDescription}
          </p>
          <div className="flex gap-3 pt-2">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.altText}
                className="h-8 w-8 bg-white rounded p-1 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Quick Links Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            {quicklinkTitle}
          </h4>
          <ul className="space-y-2 text-base text-white">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href ?? "#"}
                  className="hover:text-[#00adb5] inline-block transition-all duration-300 transform hover:translate-x-1 hover:scale-105"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">
            {quicklinkTitle}
          </h4>
          <ul className="space-y-2 text-base text-white">
            {appointmentLinks.map((link) => (
              <li key={link.appointmentLabel}>
                <Link
                  to={link.appointmentHref ?? "#"}
                  className="hover:text-[#00adb5] inline-block transition-all duration-300 transform hover:translate-x-1 hover:scale-105"
                >
                  {link.appointmentLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        {mapBlock?.map?.embedUrl && (
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              {mapTitle}
            </h4>
            <iframe
              src={mapBlock.map.embedUrl}
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>

      {/* Copyright + Social */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 pt-8 border-t border-gray-500 mt-8">
        <p className="mb-4 md:mb-0 text-center md:text-left">{copyright}</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sahaya-ronaldo-024b2a239/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00adb5] text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/userronald"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00adb5] text-lg"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
