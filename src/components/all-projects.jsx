import { useState } from "react";

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
                <ul className="filter-projects w-full mt-12 mb-12 flex items-center gap-3 flex-wrap">
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
            </div>
        </section>
    )
}
export default AllProjects;