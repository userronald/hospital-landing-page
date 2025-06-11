export interface MenuLinkProps{
    href:string;
    label:string;
};


export type MobileHeaderNavLinkProps = MenuLinkProps & {
    onClose?: ()=>void;
    onChildOpen?: (label:string)=>void;
};