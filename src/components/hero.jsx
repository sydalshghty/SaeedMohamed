import ProfileImg from "../assets/profile-img.png";
import { ArrowRight } from "lucide-react";
import BgLight from "../assets/Hero Section-bg.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="hero-section w-full h-full bg-(--bg2) pt-15 pb-20 lg:pt-24 lg:pb-24 dark:bg-(--bgdark2) relative">
            <div className="container w-full h-full flex">
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="col-information flex flex-col gap-6">
                    <div className="col-available w-51.25 h-5.5 pt-1 pb-1 pl-3 pr-3 bg-(--avialableBG) rounded-xl flex justify-center items-center dark:bg-[#26364A]">
                        <p className="text-[14px] font-semibold font-sans text-(--textColor) dark:text-[#C0C1FF]">AVAILABLE FOR WORK</p>
                    </div>
                    <h1 className="text-[30px] lg:text-[48px] font-extrabold  text-[#0F172A] w-full lg:w-[70%] dark:text-[#ffffff] ">Crafting <span className="text-[#4F46E5] dark:text-[#8083FF]">High-Performance</span> Web Experiences</h1>
                    <p className="description text-[14px] lg:text-[18px] text-[#475569] dark:text-[#C7C4D7] w-full lg:w-[60%]">I am a front-end engineer specializing in building precision-engineered,
                        scalable web applications with React, JavaScript,Tailwind css,Redux-Toolkit and modern design systems.</p>
                    <div className="view-touch-btns flex flex-col lg:flex-row  items-start lg:items-center gap-6">
                        <Link to={"/projects"}>
                            <div className="view-btn cursor-pointer flex gap-1 items-center justify-center w-45.75 h-12 pl-8 pr-8 pt-4 pb-4 bg-[#4F46E5] rounded text-[14px] text-white font-semibold font-sans dark:bg-[#C0C1FF] dark:text-[#1000A9]">
                                View Projects
                                <ArrowRight className="text-white w-4 dark:text-[#1000A9]" />
                            </div>
                        </Link>

                    </div>
                </motion.div>
                <div className="col-img">
                    {/* <img src={ProfileImg} alt="profile-img" /> */}
                </div>
            </div>
        </div>
    )
}
export default Hero;