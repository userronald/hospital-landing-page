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
}

