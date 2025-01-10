"use client"
import { useState } from 'react';

// components
import { Input } from '@/components/ui/input'

// shad cn components
import { Button } from "@/components/ui/button";

import ResultCard from '../result-card/result-card';

// stylesheet
import Styles from './search-section.module.css'
import { NextApiRequest, NextApiResponse } from 'next';

const SearchSection: React.FC<{}> = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    }

    const apiHandler = async () => {
        try {
            const API = 'https://www.argos.co.uk/product-api/bazaar-voice-reviews/partNumber/9509519?Limit=2&Offset=10&Sort=SubmissionTime%3ADesc&returnMeta=true';
            const response = await fetch(API);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                // console.log(res.status(200).json(data));
            }
        } catch (error) {
            // console.log(res.status(500).json({ message: 'request failed' }));
            throw new Error('Error occurred - ' + error);
        }
    }

    const handleSearchClick = async () => {
        await apiHandler()
        console.log('clicked ! and the captured value is : ' + inputValue)
    }

    return (
        <div className={`${Styles.wrapper}`}>
            <p>Enter your product code here 👇</p>

            <div style={{
                display: 'flex',
                marginTop: 20,
                marginBottom: 10
            }}>
                <div style={{ display: 'flex' }}> 
                    <Input value={inputValue} onChange={handleChange} />

                    <Button
                        onClick={handleSearchClick}
                        className={Styles.search_button}>
                        Search</Button>
                </div>
            </div>

            <a href="">How to get the product code ?</a>

            {/* quick result */}
            <ResultCard title='GoPro HERO10 CHDHX-101-RW 4k Action Camera - Black' />
        </div>
    )
}

export default SearchSection;