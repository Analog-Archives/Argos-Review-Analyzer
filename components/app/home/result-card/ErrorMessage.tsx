"use client"
import React from "react";


// components
import { Button } from "@/components/ui/button";

const ErrorMessage: React.FC = () => {
    return (
        <div>
            <p>Product not found, Check the
                product code again</p>
            <Button>Ok</Button>
        </div>
    );
}

export default ErrorMessage