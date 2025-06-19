import { FaqSectionData } from "../../data/data";
import { useState } from "react";

const FaqSection =()=>{

    const [activeIndex  , setActiveIndex]=useState<number | null>(null);

     const handleAccordion = (index:number)=>{
        setActiveIndex(prev=>(prev === index ? null : index))
     }

    return (
      <>
        {FaqSectionData.map((section, secIndex) => (
          <section key={secIndex}>
            <p>{section.subHeading}</p>
            <h3>{section.mainHeading}</h3>
            <div>
              {section.faqItems?.map((item, index) => (
                <div key={index}>
                  <h4 onClick={() => handleAccordion(index)}>
                    {item.question}
                  </h4>
                  {activeIndex === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </>
    );
}


export default FaqSection;