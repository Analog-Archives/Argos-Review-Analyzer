"use client"

// bootstrap components
import { Container } from "react-bootstrap"

// components
import Heading from "@/components/app/disclaimer/heading"
import Paragarph from "@/components/app/disclaimer/paragraph"

const topMargin: number = 50;

const DisclaimerPage: React.FC<{}> = () => {
    return (
        <>
            <Container>
                {/* disclaimer */}
                <div style={{ marginTop: topMargin }}>
                    <Heading title="Disclaimer" />
                    <Paragarph text="
                    This website is an independent review analyzer tool, 
                    designed to provide a useful platform for Argos users to 
                    share and explore reviews of products available on 
                    Argos.co.uk. Argos Limited owns all rights to the products 
                    and trademarks listed on the site, and we make no claim of 
                    ownership or affiliation with them." />
                </div>

                {/* important note */}
                <div style={{ marginTop: topMargin }}>
                    <Heading title="Important Note" />
                    <Paragarph text="    
                    We do not generate any revenue from this website, and our 
                    primary goal is to provide a valuable resource for Argos 
                    customers to make informed purchasing decisions. 
                    Our analytics tool is solely designed to help users navigate 
                    and analyze product reviews on Argos.co.uk, without any 
                    commercial interests or biases." />
                </div>

                {/* acknowledgments */}
                <div style={{ marginTop: topMargin }}>
                    <Heading title="Acknowledgments" />
                    <Paragarph text="    
                    We acknowledge that all reviews, feedback, and content provided 
                    on this site are the intellectual property of their respective authors, 
                    and we do not claim any ownership or rights over them. 
                    Additionally, we recognize Argos Limited as the copyright holder of 
                    all product information, trademarks, and other intellectual 
                    property featured on the site. By using our website, you agree 
                    to these terms and acknowledge that all content and reviews are 
                    subject to Argos Limited's terms and conditions, as well as 
                    our own website's terms of use." />

                </div>

                {/* contact */}
                <div style={{ marginTop: topMargin }}>
                    <Heading title="Contact" />
                    <Paragarph text="    
                    If you have any queries or concerns regarding our website, 
                    please contact us at [insert contact email or form]. We strive to maintain 
                    the accuracy and integrity of our content and are committed 
                    to resolving any issues promptly." />
                </div>
            </Container>
        </>
    )

}

export default DisclaimerPage