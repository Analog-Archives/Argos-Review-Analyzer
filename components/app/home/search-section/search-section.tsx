"use client"
import { useState } from 'react';

// shad cn components
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";

import ResultCard from '../result-card/result-card';

// stylesheet
import Styles from './search-section.module.css'
import { NextApiRequest, NextApiResponse } from 'next';

const SearchSection: React.FC<{}> = () => {
    const [inputValue, setInputValue] = useState<string>(() => { return ("") });
    const [productName, setProductName] = useState<string>("");

    const handleChange = (event: any) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    // button click handle and API call
    const API = 'https://www.argos.co.uk/product-api/bazaar-voice-reviews/partNumber/9509519?Limit=2&Offset=10&Sort=SubmissionTime%3ADesc&returnMeta=true';
    const handleSearchClick = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();

            if (data) {
                console.log(data.data.Results[0].OriginalProductName);    
                const productName = data.data.Results[0].OriginalProductName;
                setProductName(productName);

                {/* quick result */}
                // <ResultCard title={productName} />
            }
        
        } catch (error) {
            throw new Error("Somethng went wrong!");
        }
    }

    return (
        <div className={`${Styles.wrapper} mx-auto d-block`}>
            <p>Enter your product code here 👇</p>
            <div style={{
                display: 'flex',
                marginTop: 20,
                marginBottom: 10
            }}>
                <Input value={inputValue} onChange={handleChange} />

                <Button
                    onClick={handleSearchClick}
                    className={Styles.search_button}>
                    Search</Button>
            </div>
            <a href="">How to get the product code ?</a>
        </div>
    )
}

export default SearchSection