import AboutUsSection from "../landing-page-sections/aboutUsSection";
import CallToAction from "../landing-page-sections/callToAction";
import FaqSection from "../landing-page-sections/faqSection";
import HeroSlider from "../landing-page-sections/heroSlider"
import ServiceSection from "../landing-page-sections/serviceSection";
import TestimonialSection from "../landing-page-sections/testimonialSection";

const Home = ()=>{

    return(
        <>
        <HeroSlider />
        <AboutUsSection />
        <ServiceSection />
        <TestimonialSection />
        <FaqSection />
        <CallToAction />
    
        </>
    )
}

export default Home;