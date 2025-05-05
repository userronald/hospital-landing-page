import { Link } from "react-router-dom";
import { menuLinkData } from "../../data/data";
import Logo from "./logo";

const Navbar =()=>{

    return (
      <>
        <nav className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
            <div className="max-w-[200px] ">
              <Logo logoUrl="/images/header/logo.png" />
            </div>
            <ul className="flex  items-center gap-10 py-4 text-lg text-gray-800 font-medium">
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
}

export default Navbar;