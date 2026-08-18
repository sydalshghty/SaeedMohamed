import HeadingContact from "../components/heading-contact";
import FormContact from "../components/form-contact";
import Footer from "../components/footer";
function ContactPage(){
    return(
        <div className="mt-16">
            <HeadingContact/>
            <FormContact/>
            <Footer/>
        </div>
    )
}
export default ContactPage;