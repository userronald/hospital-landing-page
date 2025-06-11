import { TestimonialSectionData } from "../../data/data"

const TestimonialSection =()=>{

    return(
        <>
        {
            TestimonialSectionData.map((item,index)=>(
                <section key={index}>
                    <h4>{item.subHeading}</h4>
                    <h3>{item.mainHeading}</h3>
                    <div>
                        {item.testimonials?.map((i)=>(
                          <div>
                                  <p>{i.text}</p>
                          </div>
                        ))}
                    </div>
                </section>
            ))
        }
        </>
    )
}

export default TestimonialSection