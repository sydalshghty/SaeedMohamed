import { SendHorizontal, Mail, MapPin, MessageCircleMore, Code } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
function FormContact(){
    return(
        <section className="form-contact w-full h-full pb-8 md:pb-12 dark:bg-(--bgdark2)">
            <div className="container w-full h-full flex gap-10">
                <form method="POST" className="w-full md:w-[60%] p-5 md:p-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg dark:bg-[#0B1C30] dark:border-[#464554]">
                    <h1 className="text-2xl text-[#0F172A] dark:text-[#D3E4FE] font-bold mb-2 md:mb-5">Send a Message</h1>
                    <div className="col-name-email w-full flex gap-6 mb-6">
                        <div className="col-name flex flex-col w-1/2 gap-1">
                            <label className="text-[14px] text-[#475569] dark:text-[#C7C4D7] uppercase font-semibold">name</label>
                            <input className="h-12 bg-white  border border-[#E2E8F0] dark:bg-[#26364A]  dark:border-[#464554] pl-4 pr-4 md:pl-2 md:pr-2 rounded outline-none text-[#6B7280] text-[16px]" type="text" placeholder="Enter Your Name" required/>
                        </div>
                        <div className="col-email flex flex-col w-1/2 gap-1">
                            <label className="text-[14px] text-[#475569] dark:text-[#C7C4D7] uppercase font-semibold">email</label>
                            <input className="h-12 bg-white border border-[#E2E8F0] dark:bg-[#26364A]  dark:border-[#464554] pl-4 pr-4 md:pl-2 md:pr-2 rounded outline-none text-[#6B7280] text-[16px]" type="email" placeholder="Enter Your Email" required/>
                        </div>
                    </div>
                    <div className="col-message mb-6 w-full flex flex-col gap-1">
                        <label className="text-[14px] text-[#475569] dark:text-[#C7C4D7] uppercase font-semibold">message</label>
                        <textarea className="h-20 md:h-40 p-4 bg-white border border-[#E2E8F0] dark:bg-[#26364A]  dark:border-[#464554] pl-4 pr-4 md:pl-2 md:pr-2 rounded outline-none text-[#6B7280] text-[16px]" placeholder="How can I help you today?"></textarea>
                    </div>
                    <button type="submit" className="flex justify-center items-center gap-2 cursor-pointer pl-4 pr-4 md:pl-8 md:pr-8 bg-[#4F46E5] dark:bg-[#C0C1FF] rounded-sm h-12 ">
                        <p className="text-[16px] text-white dark:text-[#1000A9]">Send a Message</p>
                        <SendHorizontal className="text-[20px] text-white dark:text-[#1000A9]"/>
                    </button>
                </form>
                <div className="col-socialconnect w-full md:w-[38%] flex flex-col gap-6">
                    <div className="col-directInfo bg-[#F1F5F9] p-6 border border-[#E2E8F0] dark:bg-[#0B1C30] dark:border-[#464554] rounded-lg">
                        <h1 className="text-2xl text-[#0F172A] dark:text-[#D3E4FE] dark:border-[#464554] font-bold capitalize mb-6 border-b border-[#E2E8F0] pb-1">direct contact</h1>
                        
                        <a href="mailto:sydalshghty15@gmail.com" className="col-email flex gap-4 items-center mb-6">
                            <div className="email-icon w-10 h-10 bg-[#E1E0FF] dark:bg-[#26364A] border border-[#E2E8F0] dark:border-[#464554] rounded-sm flex justify-center items-center">
                                <Mail className="text-[#4F46E5] dark:text-[#C0C1FF] w-5 h-4"/>
                            </div>
                            <div className="email-content">
                                <p className="text-[14px] text-[#475569] dark:text-[#908FA0] uppercase font-semibold font-sans">email</p>
                                <p className="text-[16px] text-[#0F172A] dark:text-[#D3E4FE] font-sans">sydalshghty15@gmail.com</p>
                            </div>
                        </a>

                        <div className="col-location flex gap-4 items-center mb-6">
                            <div className="location-icon w-10 h-10 bg-[#E1E0FF] dark:bg-[#26364A] border border-[#E2E8F0] dark:border-[#464554] rounded-sm flex justify-center items-center">
                                <MapPin className="text-[#4F46E5] dark:text-[#C0C1FF] w-5 h-4"/>
                            </div>
                            <div className="location-content">
                                <p className="text-[14px] text-[#475569] dark:text-[#908FA0] uppercase font-semibold font-sans">location</p>
                                <p className="text-[16px] text-[#0F172A] dark:text-[#D3E4FE] font-sans">cairo, Egypt</p>
                            </div>
                        </div>

                        <a href="https://wa.me/201271382350" className="col-whatsapp flex gap-4 items-center">
                            <div className="whatsapp-icon w-10 h-10 bg-[#E1E0FF] dark:bg-[#26364A] border border-[#E2E8F0] dark:border-[#464554] rounded-sm flex justify-center items-center">
                                <MessageCircleMore className="text-[#4F46E5] dark:text-[#C0C1FF] w-5 h-4"/>
                            </div>
                            <div className="whatsapp-content">
                                <p className="text-[14px] text-[#475569] dark:text-[#908FA0] uppercase font-semibold font-sans">whatsapp</p>
                                <p className="text-[16px] text-[#0F172A] dark:text-[#D3E4FE] font-sans">01271382350</p>
                            </div>
                        </a>

                    </div>
                    <div className="col-socialchannels bg-[#F1F5F9] p-6 border border-[#E2E8F0] dark:bg-[#0B1C30] dark:border-[#464554] rounded-lg">
                        <h1 className="text-2xl text-[#0F172A] dark:text-[#D3E4FE] dark:border-[#464554] font-bold capitalize mb-6 border-b border-[#E2E8F0] pb-1">social channels</h1>
                        <div className="col-btns-social flex gap-4 w-full items-center">
                            <a href="https://www.linkedin.com/in/saeed-mohamed-668992339/" target="_blank" className="w-1/2 bg-[#FFFFFF] dark:bg-[#26364A] border border-white dark:border-[#464554] rounded-sm h-14 flex justify-center items-center gap-2">
                                <FaLinkedinIn className="text-[#0F172A] dark:text-[#908FA0]"/>
                                <p className="text-[16px] text-[#0F172A] capitalize dark:text-[#D3E4FE]">linkedin</p>
                            </a>
                            <a href="https://github.com/sydalshghty?tab=repositories" target="_blank" className="w-1/2 bg-[#FFFFFF] dark:bg-[#26364A] border border-white dark:border-[#464554] rounded-sm h-14 flex justify-center items-center gap-2">
                                <Code className="text-[#0F172A] dark:text-[#908FA0]"/>
                                <p className="text-[16px] text-[#0F172A] capitalize dark:text-[#D3E4FE]">github</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FormContact;