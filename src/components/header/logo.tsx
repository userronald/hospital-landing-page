import { Link } from "react-router-dom";


interface LogoProps {
  href?: string;
  logoUrl:string;
  altText?:string;
}

export default function Logo({
    href = "/",
    altText= "Cure Well",
    logoUrl,
}:LogoProps){
    return(
        <>
        <Link to ={href}>
        <img src={logoUrl} alt={altText} />
        </Link>
        </>
    )

}
       
