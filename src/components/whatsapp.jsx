import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
function Whatsapp(){
    return(
            <a href="https://wa.me/201271382350" target="_blank" className="col-whatsapp fixed bottom-10 right-5 w-12 h-12 lg:w-14 lg:h-14 bg-[#25D366] flex justify-center items-center rounded-full animate-bounce">
                <FaWhatsapp className="text-white text-[25px] lg:text-[27px]"/>
            </a>
    )
}
export default Whatsapp;