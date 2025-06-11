import AboutUsSection from "../landing-page-sections/aboutUsSection";
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
        </>
    )
}

export default Home;