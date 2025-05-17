import { Link } from "react-router-dom";
import { MobileMenuLinkProps } from "../../../types/menu";

export default function MobileMenuLink({
    href,
    label,
    onClose,
}:MobileMenuLinkProps){
    

    return (
      <li key={label}>
        <Link
          to={href}
          onClick={onClose}
          className="hover:text-[#00adb5] transition-colors duration-200"
        >
          {label}
        </Link>
      </li>
    );
}