import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
function ContactHome() {
    return (
        <section
            className="contact-home w-full h-full pt-11 pb-11 bg-[#F8FAFC] dark:bg-[#000F21]">
            <div className="container w-full h-full">
                <div className="content-section h-fit lg:h-98 bg-[#4F46E5] dark:bg-[#8083FF] pt-12 pb-12 rounded-3xl flex flex-col justify-center items-center gap-6">
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-[#ffffff] dark:text-[#0D0096] w-full lg-w-[44%] text-center">Ready to start your next project?</h1>
                    <p className="text-[14px] lg:text-[16px] text-[#ffffff] dark:text-[#0D0096]  w-full lg:w-[44%] text-center">I'm currently accepting new freelance projects and full-time opportunities. Let's talk about your vision.</p>
                    <div className="btns-contact flex gap-6">
                        <a className="email-btn w-40 h-13 lg:w-45 lg:h-15 bg-white dark:bg-[#0D0096] rounded-xl flex justify-center items-center gap-3" href="mailto:">
                            <Mail className="text-[22px] font-bold text-[#4F46E5] dark:text-[#8083FF]" />
                            <p className="text-[15px] lg:text-[18px] font-bold text-[#4F46E5] dark:text-[#8083FF] capitalize font-sans">email me</p>
                        </a>
                        <a className="whatsapp-btn w-40 h-13 lg:w-45 lg:h-15 border-2 border-white dark:border-[#0D0096] rounded-xl flex justify-center items-center gap-3" href="https://wa.me/201271382350">
                            <FaWhatsapp className="text-[22px] font-bold text-white dark:text-[#0D0096]" />
                            <p className="text-[15px] lg:text-[18px] text-white font-bold capitalize dark:text-[#0D0096]">whatsapp</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactHome;