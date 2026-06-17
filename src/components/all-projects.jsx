import { useState } from "react";
import { Eye, Code, ArrowRight } from "lucide-react";
import imgProductTest from "../assets/product-img.png";
import allProjects from "../../projects.json";
function AllProjects() {
    const filterProjects = [
        { id: 1, category: "All" },
        { id: 2, category: "E-commerce" },
        { id: 3, category: "Dashboard" }
    ]
    const [category, setCategory] = useState("All");

    return (
        <section className="all-projects w-full h-full pt-11 pb-11 lg:pt-24 lg:pb-24  bg-[#F8FAFC] dark:bg-[#000F21]">
            <div className="container w-full h-full">
                <div className="content-text flex flex-col gap-2.5">
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0F172A] dark:text-[#D3E4FE]">Selected Works</h1>
                    <p className="text-[14px] lg:text-[18px] text-[#475569] dark:text-[#C7C4D7]">A showcase of technical precision and user-centric design across diverse
                        development environments.</p>
                </div>
                <ul className="filter-projects w-full mt-12 mb-12 pb-12 flex items-center gap-3 flex-wrap border-b border-[#CBD5E1] dark:border-[#464554]">
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
                <div className="all-projects mt-6 mb-6 flex flex-wrap gap-6">
                    {allProjects.map((project, index) => {
                        return (
                            <div key={project.id} className="col-project w-98.5 h-84.25 border border-[#E2E8F0] dark:border-[#464554] rounded-xl">
                                <div className="main-content-project">
                                    <div className="content-img-product relative w-full h-55 mb-6">
                                        <div className="col-img-product absolute w-full h-full top-0 left-0  rounded-t-lg">
                                            <img src={project.img} alt="img-product" className="w-full h-full object-contain rounded-t-lg" />
                                        </div>
                                        <div className="view-code-icon absolute w-full h-full top-0 right-0 p-4 z-1 flex flex-col gap-2 items-end">
                                            <a href={project.linkView} target="_blank" className="col-view shadow bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                                                <Eye className="w-5" />
                                            </a>
                                            <a href={project.codeLink} target="_blank" className="col-code shadow bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                                                <Code className="w-5" />
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="skills-project pl-4 pr-4 flex gap-2 mb-3">
                                        {project.skills.map((skill, index) => {
                                            return (
                                                <li key={skill} className="w-fit h-6 pl-2 pr-2 pt-1 pb-1 rounded bg-[#EEF2FF] dark:text-[#C7C4D7] dark:bg-[#464554] flex justify-center items-center text-[10px] font-bold text-[#4F46E5] uppercase">{skill}</li>
                                            )
                                        })
                                        }
                                    </ul>
                                    <h2 className="title-project pl-4 pr-4 text-2xl font-bold text-[#0F172A] capitalize mb-6 dark:text-white">{project.name}</h2>
                                </div>
                                <div className="col-desc-view p-6">
                                    <p className="text-[15px] mb-2 dark:text-white">{project.description}</p>
                                    <a href={project.linkView} target="_blank" className="flex items-center gap-1">
                                        <p className="text-[16px] text-[#4F46E5] uppercase dark:text-[#C0C1FF]">view project</p>
                                        <ArrowRight className="text-[#4F46E5] dark:text-[#C0C1FF]" />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default AllProjects;