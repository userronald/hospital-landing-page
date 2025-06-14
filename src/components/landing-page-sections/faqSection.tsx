import { FaqSectionData } from "../../data/data";

const FaqSection =()=>{
    return(
        <>
         {
            FaqSectionData.map((item,index)=>(
                <section key={index}>
                    <p>{item.subHeading}</p>
                    <h3>{item.mainHeading}</h3>
                    <div>
                        {    
                            item.faqQuestions?.map((question,i)=>(
                                 <div key={i}>
                                   <h4>{question.text}</h4>
                                   <p>{item.faqAnswers?.[i]?.text}</p>
                                 </div>
                            ))  
                        }
                    </div>
                </section>
            ))
         }
        </>
    )
}


export default FaqSection;