import coretechIcon from "../assets/coretech-icon.svg";
import styleIcon from "../assets/style-icon.svg";
import backendIcon from "../assets/backend-icon.svg";
import { motion } from "framer-motion";
function TechnicalSkills(){
    const coreTech = [
        {id: 1, skill: "html"},
        {id: 2, skill: "css"},
        {id: 3, skill: "tailwind css"},
        {id: 4, skill: "javascript"},
        {id: 5, skill: "react js"},
        {id: 6, skill: "redux"},
        {id: 7, skill: "redux toolkit"},
        {id: 8, skill: "git & github"}
    ]
    const style = [
        {id: 1, skill: "css"},
        {id: 2, skill: "Tailwind CSS"},
        {id: 3, skill: "Framer Motion"}
    ]
    const backend = [
        {id: 1, skill: "node js"},
        {id: 2, skill: "express js"},
        {id: 3, skill: "MongoDB"},
    ]
    return(
        <section className="technical-skils pt-11 pb-11  bg-[#F8FAFC] dark:bg-[#031427]">
            <motion.div 
                initial={{opacity: 0, y: 200}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{
                    once: true,
                }}
            className="container">
                <div className="col-heading mb-8 lg:mb-12">
                    <h1 className="text-2xl lg:text-4xl font-bold text-[#0F172A] dark:text-white">Technical Skills</h1>
                </div>
                <div  className="all-cols-skills flex gap-6 items-center">
                    <div className="core-tech-col w-[70%] h-40 lg:h-48.5 bg-white shadow rounded-lg p-6 dark:bg-[#1E293B]">
                        <div className="heading flex items-center gap-4 mb-4 lg:mb-6">
                            <img src={coretechIcon} alt="core-tech" />
                            <h2 className="text-xl lg:text-2xl font-bold capitalize text-[#0F172A] dark:text-white">Core Tech</h2>
                        </div>
                        <ul className="all-skills flex gap-3 flex-wrap">
                            {coreTech.map((tech,index) => {
                                return(
                                    <li key={tech.id} className="w-fit h-6 pl-3 pr-3 pt-1 pb-1 border border-[#E2E8F0] dark:bg-[#475569] rounded flex justify-center items-center text-[12px] lg:text-[14px] font-semibold text-[#334155] font-sans uppercase  dark:border-none dark:text-[#C7C4D7]">{tech.skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="style-backend-cols flex gap-6 items-center">
                        <div className="style-col h-40 lg:h-48.5 bg-white dark:bg-[#1E293B] shadow rounded-lg p-6  w-full lg:w-64 sm:w-50">
                            <div className="heading flex items-center gap-4 mb-3 lg:mb-6">
                                <img src={styleIcon} alt="style-icon" />
                                <h2 className="text-[16px] lg:text-[18px] font-bold text-[#0F172A] dark:text-white capitalize">Styling</h2>
                            </div>
                            <ul className="pl-6">
                                {style.map((tech,index) => {
                                    return(
                                        <li key={tech.id} className="text-[14px] lg:text-[16px] text-[#475569] dark:text-[#C7C4D7] capitalize">{tech.skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="backend-col h-40 lg:h-48.5 bg-white dark:bg-[#1E293B] shadow rounded-lg p-6 w-full lg:w-64 sm:w-50">
                            <div className="heading flex items-center gap-4 mb-4 lg:mb-6">
                                <img src={backendIcon} alt="backend-icon" />
                                <h2 className="text-[16px] dark:text-white lg:text-[18px] font-bold text-[#0F172A] capitalize">backend</h2>
                            </div>
                            <ul className="pl-6">
                                {backend.map((tech,index) => {
                                    return(
                                        <li key={tech.id} className="text-[14px] lg:text-[16px] text-[#475569] dark:text-[#C7C4D7] capitalize">{tech.skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
export default TechnicalSkills;