import { Link } from "react-router-dom";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { Code, Eye } from "lucide-react";
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
                                    <div key={project.id} className="col-project shadow rounded-xl w-88.75 dark:bg-[#1E293B]">
                                        <div className="col-img-product w-full h-48 rounded-xl">
                                            <img src={project.img} className="w-full h-full rounded-t-xl object-contain" alt="img-product" />
                                        </div>
                                        <div className="all-information-product p-6 flex flex-col gap-5">
                                            <div className="title-view-col w-full flex justify-between items-center">
                                                <h2 className="text-[20px] font-bold text-[#0F172A] capitalize dark:text-white">{project.name}</h2>
                                                <div className="col-icons flex items-center gap-2">
                                                    <a href={project.codeLink} target="_blank">
                                                        <Code className="text-[15px] text-[#94A3B8] cursor-pointer" />
                                                    </a>
                                                    <a href={project.linkView} target="_blank">
                                                        <Eye className="text-[15px] text-[#94A3B8] cursor-pointer" />
                                                    </a>
                                                </div>
                                            </div>
                                            <p className="p-description text-[14px] text-[#475569] dark:text-[#C7C4D7]">
                                                {project.description}
                                            </p>
                                            <ul className="col-skills flex flex-wrap gap-2">
                                                {project.skills.map((skill, index) => {
                                                    return (
                                                        <li key={skill} className="w-fit h-5 pt-0.5 pb-0.5 pl-2 pr-2 bg-[#EEF2FF] rounded text-[#4F46E5] text-[12px] dark:text-[#CBD5E1] dark:bg-[#475569] uppercase">{skill}</li>
                                                    )
                                                })}
                                            </ul>
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