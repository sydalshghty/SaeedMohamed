import Hero from "../components/hero";
import TechnicalSkills from "../components/skills";
import Projects from "../components/projects";
import Code from "../components/code";
function Home(){
    return(
        <>
            <div className="home-page-content mt-16">
                <Hero/>
                <TechnicalSkills/>
                <Projects/>
                <Code/>
            </div>
        </>
    )
}
export default Home;