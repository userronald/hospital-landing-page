// Custom Hook for Which mnu to display under which device

import { useState,useEffect } from "react";

const useMediaQuery = (query:string)=>{
   const [matches,setMatches]= useState<boolean>(false)
     
   useEffect(()=>{
    //matchMedia is a built in browser api which takes media query string and gives media query list
    const media = window.matchMedia(query); // This window.matchMedia only works on the browser
                                            // Use another method when u use server side rendering

    if (media.matches !== matches){
        setMatches(media.matches);
    }

    const listener = ()=>setMatches(media.matches);
    media.addEventListener("change",listener);

    return()=>media.removeEventListener("change",listener);
   },[matches,query]);

   return matches;

}

export default useMediaQuery;