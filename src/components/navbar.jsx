import { Sun, Moon, Menu, X, House, FolderKanban, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { href, Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import profileIcon from "../assets/profile-icon.svg";
function Navbar() {
    const [value, setValue] = useState(null);
    const [dark, setDark] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const links = [
        { id: 1, name: "home", icon: House, href: "/" },
        { id: 2, name: "projects", icon: FolderKanban, href: "projects" },
        { id: 3, name: "contact", icon: Mail, href: "#" }
    ]

    const socialMedia = [
        { id: 1, name: "linkedin", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/saeed-mohamed-668992339/" },
        { id: 2, name: "github", icon: FaGithub, href: "https://github.com/sydalshghty?tab=repositories" },
        { id: 3, name: "whatsapp", icon: FaWhatsapp, href: "https://wa.me/201271382350" },
    ]

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [dark]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow dark:bg-(--bg1) z-50">
                <div className="container w-full h-full flex justify-between items-center">
                    <Link to={`/`}>
                        <h1 className="text-[20px] font-bold text-(--colorlogo) dark:text-white">SaeedMohamed</h1>
                    </Link>
                    <ul className="flex items-center gap-15">
                        {links.map((link, index) => {
                            return (
                                <li key={link.id} onClick={() => setValue(link.name)} className={`${value === link.name ? "active" : ""}`} >
                                    <Link className="text-[14px] font-medium capitalize text-(--linkcolor) font-sans dark:text-(--linkcolordark)" to={link.href}>{link.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="light-dark-icons flex gap-5 items-center">
                        {dark ?
                            <Moon className="cursor-pointer text-(--maincolor) w-7 h-7" onClick={() => setDark(!dark)} />
                            :
                            <Sun className="cursor-pointer text-(--maincolor) w-7 h-7" onClick={() => setDark(!dark)} />
                        }
                        <Menu className="cursor-pointer text-(--maincolor) menu-icon"
                            onClick={() => setShowMenu(!showMenu)}
                        />
                    </div>
                </div>
            </nav>
            <div className={`${showMenu ? "active" : ""} menu-navbar-mobile fixed top-0 left-0 z-50 bg-white w-1/2 h-screen shadow dark:bg-[#031427]`}>
                <div className="pt-5 pb-5 flex flex-col justify-between h-full">
                    <div className="col-one">
                        <div className="col-heading flex justify-between items-center mb-5 pl-5 pr-5">
                            <h1 className="capitalize  text-[20px] text-[#031427] font-bold dark:text-[#D3E4FE]">saeed mohamed</h1>
                            <X className="cursor-pointer text-[#C7C4D7]" onClick={() => setShowMenu(!showMenu)} />
                        </div>
                        <ul className="flex flex-col gap-1">
                            {links.map((link, index) => {
                                return (
                                    <li key={link.id} className="flex gap-4 w-full h-14 pt-4 pb-4  cursor-pointer transition-all duration-500 ease-in"
                                        onClick={() => {
                                            setShowMenu(false);
                                        }}
                                    >
                                        <link.icon className="text-[#C7C4D7] ml-5" />
                                        <Link to={link.href} className="text-[#C7C4D7] text-[16px] font-semibold capitalize">{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-connect w-full pl-5 pr-5 border-t border-[#C7C4D7] pt-5">
                        <h2 className="text-[17px] capitalize font-bold mb-2 text-[#C7C4D7]">connect</h2>
                        <div className="all-icon-social flex gap-3 flex-wrap mb-6">
                            {socialMedia.map((social, index) => {
                                return (
                                    <Link to={social.href} key={social.id} target="_blank">
                                        <div className="col-icon w-11 h-11 rounded-xl bg-white shadow flex justify-center items-center cursor-pointer dark:bg-[#1B2B3F]">
                                            <social.icon className="w-4 h-4 text-[#C7C4D7]" />
                                        </div>
                                    </Link>
                                )
                            })}
                            <Link to={"mailto:sydalshghty15@gmail.com"} target="_blank">
                                <div className="col-icon w-11 h-11 rounded-xl bg-white shadow flex justify-center items-center cursor-pointer dark:bg-[#1B2B3F]">
                                    <CgMail className="w-4 h-4 text-[#C7C4D7]" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-profile w-full h-24.5 p-6 bg-white shadow rounded-3xl flex items-center gap-4 dark:bg-[#1B2B3F]">
                            <img src={profileIcon} alt="profile-icon" />
                            <div>
                                <h2 className="text-[17px] capitalize font-bold  dark:text-[#D3E4FE]">saeed mohamed</h2>
                                <p className="text-[14px] capitalize font-medium dark:text-[#C7C4D7]">front-end engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;