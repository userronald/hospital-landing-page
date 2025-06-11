export interface MenuLinkProps{
    href:string;
    label:string;
};



export type MobileMenuLinkProps = MenuLinkProps &{
         onClose?:()=>void;    
}

// Slider Section
export interface HeroSliderProps{
    heading?:string;
    description?:string;
    imageUrl?:string;
    altText?:string;
    buttonText?:string;
}


// About Us section
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

//Services Section
export interface ServiceSectionProps{
    subHeading?:string;
    mainHeading?:string;
    description?:string;
    iconImage?:Array<{src:string;altText:string}>;
    iconText?:Array<{text:string}>;
    iconDescription?:Array<{text:string}>;
    iconButton?:string;
}

//Testimonial section
export interface TestimonialSectionProps{
    subHeading?:string;
    mainHeading?:string;
    testimonials?:Array<{text:string}>;
    testimonialReviewer?:Array<{text:string}>
    reviewerDesignation?:Array<{text:string}>
}

