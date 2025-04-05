import Team from "../Component/Team"
import Hero from "../Component/Hero"
import Service from "./Service"
import Contact from "./Contact"
import About from "./About"
import Testimonial from "../Component/Testimonial"
import ClientStatsPage from "../Component/ClientStatsPage"
import Vision from "../Component/Vison"
import Chatbot from "./chatbot"

function Home(){


    return<>
    <Hero/>
    <About/>
    <Service/>
    <ClientStatsPage/>
    <Team/>
    <Testimonial/>
    <Vision/>
    <Contact/>
    <Chatbot/>
    </>
}
export default Home