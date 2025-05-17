import { FaFacebook, FaLinkedin, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { menuLinkData } from "../../../data/data";
import Logo from "../logo";

const DesktopMenu = () => {
  return (
    <>
      <div className="bg-[#00ADB5] text-white py-2">
        <div className="container mx-auto px-32 flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="bg-white/20 rounded-full p-2 text-white">
                <FaPhoneAlt />
              </span>
              <span>+463281626556</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-white/20 rounded-full p-2 text-white">
                <IoMailOutline />
              </span>
              <span>hellomedic@gmail.com</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <span className="bg-white/20 rounded-full p-2 hover:text-white transition">
              <FaFacebook />
            </span>
            <span className="bg-white/20 rounded-full p-2 hover:text-white transition">
              <FaTwitter />
            </span>
            <span className="bg-white/20 rounded-full p-2 hover:text-white transition">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <nav className="bg-white border-t border-gray-200 px-26  py-2 flex justify-between items-center">
        <div>
          <Logo logoUrl="/images/logo.png" />
        </div>

        <div>
          <ul className="flex justify-center items-center gap-10 py-4 text-lg text-gray-800 font-medium">
            {menuLinkData.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link
                  to={link.href}
                  className="hover:text-[#00adb5] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DesktopMenu;
