"use client"

// stylesheet
import Styles from "./disclaimer.module.css"

const DisclaimerText: React.FC<{}> = () => {
    return (
        <p className={Styles.text}>
            This website is an independent review analyzer tool, designed 
            to provide a useful platform for Argos users to share and explore 
            reviews of products available on <a href="https://www.argos.co.uk/">Argos.co.uk</a>. 
            Argos Limited owns all rights to the products and trademarks 
            listed on the site, and we make no claim of ownership or 
            affiliation with them. We do not generate any revenue from 
            this website, and our primary goal is to provide a valuable 
            resource for Argos customers to make informed purchasing decisions.
        </p>
    )
}

export default DisclaimerText