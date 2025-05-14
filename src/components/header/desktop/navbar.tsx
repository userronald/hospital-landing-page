import { Link } from "react-router-dom";
import { menuLinkData } from "../../../data/data";
import Logo from "../logo";

const Navbar = () => {
  return (
    <>
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

export default Navbar;
