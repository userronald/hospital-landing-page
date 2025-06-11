import { serviceSectionData } from "../../data/data";

const ServiceSection =()=>{

    return (
      <>
        {serviceSectionData.map((item, index) => (
          <section key={index}>
            <div>
              <h5>{item.subHeading}</h5>
              <h3>{item.mainHeading}</h3>
              <p>{item.description}</p>
            </div>
            {/* IconBox */}
             <div>
               {
                item.iconImage?.map((icon,i)=>(
                   <div key={i}>
                     <img 
                     src={icon.src} 
                     alt={icon.altText}
                      />
                      <p>{item.iconText?.[i].text}</p>
                      <p>{item.iconDescription?.[i].text}</p>
                      <p>{item.iconButton}</p>
                   </div>
                ))
               }
             </div>
          </section>
        ))}
      </>
    );
}

export default ServiceSection;