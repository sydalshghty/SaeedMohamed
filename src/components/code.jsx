import checkIcon from "../assets/icon-check.svg";
import codeImg from "../assets/code-img.png";
import { motion } from "framer-motion";
function Code(){
    return(
        <section className="code-section bg-[#F8FAFC] dark:bg-[#031427] w-full h-full pt-11 pb-11">
            <motion.div 
                initial={{opacity: 0, y: 200}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{
                    once: true,
                    amount: 0.3
                }}
            className="container w-full h-full flex gap-12 lg:gap-24 items-center">
                <div className="content-text w-[50%] flex flex-col gap-6">
                    <h1 className="text-2xl lg:text-4xl font-bold text-[#0F172A] dark:text-white">Engineered for Quality</h1>
                        <p className="text-[13px] lg:text-[16px] text-[#475569] dark:text-[#C7C4D7]">My approach to front-end development is rooted in technical excellence. I
                        don't just build interfaces; I architect systems that are performant,
                        maintainable, and robust.</p>
                    <div className="col-performance-scalable flex flex-col gap-3">
                        <div className="col-performance flex gap-3 items-start">
                            <img src={checkIcon} alt="icon-img" />
                            <div>
                                <h3 className="text-[14px] lg:text-[16px] font-bold text-[#0F172A] dark:text-white">Performance-First</h3>
                                    <p className="text-[12px] lg:text-[14px] text-[#475569] dark:text-[#C7C4D7]">Optimizing for sub-second paint times and smooth 60fps animations.</p>
                            </div>
                        </div>
                        <div className="col-scalable flex gap-3 items-start">
                            <img src={checkIcon} alt="icon-img" />
                            <div>
                                <h3 className="text-[14px] lg:text-[16px] font-bold text-[#0F172A] dark:text-white">Scalable Architecture</h3>
                                <p className="text-[12px] lg:text-[14px] text-[#475569] dark:text-[#C7C4D7]">Utilizing Atomic Design and design tokens for consistent, growing apps.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-img-code">
                    <img src={codeImg} alt="code-img" />
                </div>
            </motion.div>
        </section>
    )
}
export default Code;