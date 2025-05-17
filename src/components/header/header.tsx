import DesktopMenu from "./desktop/desktopMenu";
import MobileMenu from "./mobile/mobileMenu";
import useMediaQuery from "../../hooks/useMediaQuery";


const Header = () => {

  const isDesktop = useMediaQuery("(min-width:1024px)") 
  return (
    <header className="relative z-50">
      {isDesktop ? <DesktopMenu />  :<MobileMenu />}
    </header>
  );
};

export default Header;
