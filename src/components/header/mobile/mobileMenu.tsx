import { useCallback,useEffect,useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { mobileHeaderNavLinks } from "../../../data/data";
import Logo from "../logo";
import MobileMenuLink from "./mobileMenuLink";

const MobileMenu = ()=>{
  
    const [isOpen, setIsOpen]=useState<boolean>(false);
  

    //Mobile Menu Open function

    const handleOpenMobileMenu = useCallback(()=>{
        setIsOpen((prev)=>!prev);
    },[]);


    //Mobile Menu Close function

    const handleCloseMobileMenu = useCallback(()=>{
        setIsOpen(false);
    },[]);

    // function for stop scrolling when menu is open
    useEffect(()=>{
        if (isOpen){
            document.body.classList.add("overflow-hidden");

        }else{
            document.body.classList.remove("overflow-hidden");
        }
        return()=>document.body.classList.remove("overflow-hidden");
    },[isOpen]);


    return(
        <div className="block lg:hidden fixed inset-0 w-full h-full">
            <div className="relative">
                <div className="bg-primary-blue py-3 px-6 shadow-mobile-menu">
                     <div className="flex justify-between items-center">
                        <Logo logoUrl="images/logo.png" />
                        <div>
                            <button onClick={handleOpenMobileMenu} type="button">
                               {
                                !isOpen ? (
                                    <HiMenuAlt3 className="size-6 md:size-8 text-white" />
                                ):(
                                    <IoMdClose className="size-6 md:size-8 text-white" />
                                )
                               }
                            </button>
                        </div>
                     </div>
                </div>

                {
                    isOpen &&(
                      <h1>close</h1>  
                    )
                }
            </div>

        </div>
    )
}

export default MobileMenu;