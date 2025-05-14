import { FaFacebook, FaLinkedin, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Topbar = () => {
  return (
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
  );
};

export default Topbar;
