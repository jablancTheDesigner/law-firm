import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <section className="py-6 bg-tahiti text-midnight">
                <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Need to schedule an appointment?</h1>
                    <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 border">Contact</button>
                </div>
            </section>
            <AboutUs />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home;