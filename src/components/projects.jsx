import { Link } from "react-router-dom";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { Code, Eye, ArrowRight } from "lucide-react";
import allProjects from "../../projects.json";
import { motion } from "framer-motion";
function Projects() {
    return (
        <section className="featured-projects w-full h-full pt-11 pb-11 bg-[#F8FAFC] dark:bg-[#000F21]">
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container w-full h-full">
                <div className="col-heading w-full flex justify-between items-end">
                    <div>
                        <h1 className="text-xl  lg:text-4xl font-bold text-[#0F172A] dark:text-[#ffffff]">Featured Projects</h1>
                        <p className="text-[#475569] dark:text-[#C7C4D7] text-[12px] lg:text-[16px] font-sans">Selected works focusing on performance and UX.</p>
                    </div>
                    <Link to={"/projects"} className="flex items-center gap-2">
                        <p className="text-[12px] lg:text-[14px] font-semibold text-[#4F46E5] dark:text-[#C0C1FF] capitalize">view all projects</p>
                        <HiMiniArrowTopRightOnSquare className=" text-[#4F46E5] dark:text-[#C0C1FF]" />
                    </Link>
                </div>
                <div className="all-projects pt-8 pb-5 w-full h-full flex gap-6 flex-wrap">
                    {allProjects.length === 0 ? "" :
                        <>
                            {allProjects.map((project, index) => {
                                return (
                                    <div key={project.id} className="col-project w-98.5 h-84.25 border border-[#E2E8F0] dark:border-[#464554] rounded-xl">
                                        <div className="main-content-project flex flex-col items-start justify-start gap-4">
                                            <div className="content-img-product relative w-full h-55 ">
                                                <div className="col-img-product absolute w-full h-full top-0 left-0  rounded-t-lg">
                                                    <img src={project.img} alt="img-product" className=" rounded-t-lg" />
                                                </div>
                                            </div>
                                            <div className="col-icons w-full  flex justify-end gap-2 pr-4 -mt-7.5 z-50">
                                                <a href={project.codeLink} target="_blank">
                                                    <Code className="text-[#94A3B8]" />
                                                </a>
                                                <a href={project.linkView}>
                                                    <Eye className="text-[#94A3B8]" />
                                                </a>
                                            </div>
                                            <ul className="skills-project pl-4 pr-4 flex gap-2">
                                                {project.skills.map((skill, index) => {
                                                    return (
                                                        <li key={skill} className="w-fit h-6 pl-2 pr-2 pt-1 pb-1 rounded bg-[#EEF2FF] dark:text-[#C7C4D7] dark:bg-[#464554] flex justify-center items-center text-[10px] font-bold text-[#4F46E5] uppercase">{skill}</li>
                                                    )
                                                })
                                                }
                                            </ul>
                                            <h2 className="title-project pl-4 pr-4 text-2xl font-bold text-[#0F172A] capitalize  dark:text-white">{project.name}</h2>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }

                </div>
            </motion.div>
        </section>
    )
}
export default Projects;