import Footer_reuse from "./Footer_reuse";
import { footerColumns,socialLinks } from "@/components/Utils/Constants";

const Footer = () => {
    return(
        <>
            <Footer_reuse 
                columns={footerColumns}
                address="193/1a2, South Soorankudy, Kanyakumari,Agastheeswaram, Tamil Nadu, India, 629501" 
                email="info@aazhimin.com" 
                phone="+91 6369336414" 
                socialLinks={socialLinks}
                copyright="© 2025 Ginnovation Space Private Limited. All Rights Reserved"
            />
                 
        </>
    )
}
export default Footer;
