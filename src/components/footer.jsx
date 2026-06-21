import { motion } from "framer-motion";
function Footer() {
    return (
        <section
            className="footer bg-[#F8FAFC] dark:bg-[#000F21] pt-11 pb-11">
            <div className="content-footer w-full bg-white dark:bg-[#020617] h-37.5 border-t border-b border-[#E2E8F0] dark:border-[#1E293B]">
                <div className="container w-full h-full flex justify-between items-center">
                    <div className="col-div">
                        <h2 className="text-[18px] font-bold text-[#0F172A] dark:text-white capitalize">saeed mohamed</h2>
                        <p className="text-[12px] text-[#64748B]">© 2026 SAEED MOHAMED. ENGINEERED FOR QUALITY.</p>
                    </div>
                    <ul className="flex gap-8 items-center">
                        <li>
                            <a href="https://www.linkedin.com/in/saeed-mohamed-668992339/" target="_blank" className="text-[12px] text-[#64748B]">LINKEDIN</a>
                        </li>
                        <li>
                            <a href="https://github.com/sydalshghty?tab=repositories" target="_blank" className="text-[12px] text-[#64748B]">GITHUB</a>
                        </li>
                        <li>
                            <a href="https://wa.me/201271382350" target="_blank" className="text-[12px] text-[#64748B]">WHATSAPP</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Footer;