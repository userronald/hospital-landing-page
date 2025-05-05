import { Link } from "react-router-dom";

interface LogoProps {
  href?: string;
  logoUrl: string;
  altText?: string;
}


export default  function Logo({
    href="/",
    logoUrl,
    altText = "Logo"
}:LogoProps){
    return(
        <Link to={href}>
            <img  
               src={logoUrl} 
               alt={altText}
               className="object-contain object-left w-full h-full" />
        </Link>

    )
}