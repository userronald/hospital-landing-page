import { Link } from "react-router-dom";
import { MobileMenuLinkProps } from "../../../types/type";

export default function MobileMenuLink({
  href,
  label,
  onClose,
}: MobileMenuLinkProps) {
  return (
    <li
      key={label}
      className="hover:text-[#00adb5] transition-colors duration-200"
    >
      <Link to={href} onClick={onClose}>
        {label}
      </Link>
    </li>
  );
}
