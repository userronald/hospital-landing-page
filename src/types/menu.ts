export interface MenuLinkProps{
    href:string;
    label:string;
};



export type MobileMenuLinkProps = MenuLinkProps &{
         onClose?:()=>void;
      
}

