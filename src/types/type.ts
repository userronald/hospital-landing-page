export interface MenuLinkProps{
    href:string;
    label:string;
};



export type MobileMenuLinkProps = MenuLinkProps &{
         onClose?:()=>void;    
}

export interface HeroSliderProps{
    heading?:string;
    description?:string;
    imageUrl?:string;
    altText?:string;
    buttonText?:string;
}

export interface AboutusSectionProps {
    whtWeDoSubText?:string;
    whtWeDoHeading?:string;
    whtWeDoDescription?:string;
    iconImage?:Array<{src:string;altText:string}>;
    iconTexts?:Array<{text:string}>;
    aboutUsSubText?:string;
    aboutUsHeading?:string;
    aboutUsDescription?:string;
    aboutUsButton?:string;
    aboutUsBgImage?:string;
    aboutUsDNAImage?:string;
    aboutUsDoctorImage?:string;
}

