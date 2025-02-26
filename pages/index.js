import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <Services />
            <AboutUs />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home;