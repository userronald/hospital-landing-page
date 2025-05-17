import { useCallback,useEffect,useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

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


    return (
      <div className="w-full">
        <div className="relative">
          <div className="bg-[#00ADB5] py-3 px-6 shadow-mobile-menu">
            <div className="flex justify-between items-center">
              <Logo logoUrl="images/logo.png" />
              <div>
                <button onClick={handleOpenMobileMenu} type="button">
                  {!isOpen ? (
                    <HiMenuAlt3 className="size-6 md:size-8 text-white" />
                  ) : (
                    <IoMdClose className="size-6 md:size-8 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="mx-5 px-2 bg-[red]">
              <div className="flex flex-col gap-y-8 pb-6 pt-4">
                <nav>
                  <ul >
                    <>
                      {mobileHeaderNavLinks.map((link) => (
                        <MobileMenuLink
                        
                          key={link.label}
                          label={link.label}
                          href={link.href}
                          onClose={handleCloseMobileMenu}
                          
                        />
                      ))}
                    </>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default MobileMenu;