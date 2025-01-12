"use client"
import React from "react";

// components
import { Button } from "@/components/ui/button";

// stylesheet
import Styles from './result-card.module.css'

const ErrorMessage: React.FC = () => {
    return (
        <div className={Styles.error_message_wrapper}>
            <p>Product not found, <br /> Please check the product code again</p>
            <Button className={Styles.btn} >Alright</Button>
        </div>
    );
}

export default ErrorMessage