import { useState } from "react";
import { Eye, Code, ArrowRight } from "lucide-react";
import imgProductTest from "../assets/product-img.png";
import allProjects from "../../projects.json";
import { motion } from "framer-motion";
function AllProjects() {
    const filterProjects = [
        { id: 1, category: "All" },
        { id: 2, category: "E-commerce" },
        { id: 3, category: "Dashboard" }
    ]
    const [category, setCategory] = useState("All");
    const ecommerceProjects = allProjects.filter((project) => project.category === "E-commerce");
    const dashboardProjects = allProjects.filter((project) => project.category === "Dashboard");

    return (
        <section
            className="all-projects-section w-full h-full pt-11 pb-11 lg:pt-24  lg:pb-24  bg-[#F8FAFC] dark:bg-[#000F21]">
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container w-full h-full">
                <div className="content-text flex flex-col gap-2.5">
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0F172A] dark:text-[#D3E4FE]">Selected Works</h1>
                    <p className="text-[14px] lg:text-[18px] text-[#475569] dark:text-[#C7C4D7]">A showcase of technical precision and user-centric design across diverse
                        development environments.</p>
                </div>
                <ul className="filter-projects w-full mt-12  pb-12 flex items-center gap-3 flex-wrap border-b border-[#CBD5E1] dark:border-[#464554]">
                    {filterProjects.map((project, index) => {
                        return (
                            <li key={project.id}
                                onClick={() => setCategory(project.category)}
                                className={` ${category === project.category ? "active" : ""}  w-fit h-8 border border-[#CBD5E1] rounded-xl 
                                    pl-6 pr-6 pt-2 pb-2 flex justify-center items-center
                                    cursor-pointer text-[14px] text-[#334155] font-semibold
                                    dark:bg-[#102034]
                                    dark:border-[#464554]
                                    dark:text-[#D3E4FE]
                                    `}>{project.category}</li>
                        )
                    })}

                </ul>
                <div className="all-projects pt-11 lg:pt-24 flex flex-wrap gap-6">
                    {
                        category == "All" ?
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
                                })
                                }
                            </>
                            :
                            ""
                    }
                    {
                        category == "E-commerce" ?
                            <>
                                {ecommerceProjects.map((project, index) => {
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
                                })
                                }
                            </>
                            :
                            ""
                    }
                    {
                        category == "Dashboard" ?
                            <>
                                {dashboardProjects.map((project, index) => {
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
                                })
                                }
                            </>
                            :
                            ""
                    }
                </div>
            </motion.div>
        </section>
    )
}
export default AllProjects;