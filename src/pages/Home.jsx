import Hero from "../components/hero";
import TechnicalSkills from "../components/skills";
import Projects from "../components/projects";
import Code from "../components/code";
import ContactHome from "../components/contact-home";
import Footer from "../components/footer";
function Home(){
    return(
        <>
            <div className="home-page-content mt-16">
                <Hero/>
                <TechnicalSkills/>
                <Projects/>
                <Code/>
                <ContactHome/>
                <Footer/>
            </div>
        </>
    )
}
export default Home;