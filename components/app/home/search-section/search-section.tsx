"use client"
import { useState } from 'react';

// shad cn components
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input'

// components
import ErrorMessage from '../result-card/ErrorMessage';
import ResultCard from '../result-card/result-card';

// stylesheet
import Styles from './search-section.module.css'
import { NextApiRequest, NextApiResponse } from 'next';

const SearchSection: React.FC<{}> = () => {
    const [inputValue, setInputValue] = useState<string>('');
    // const [productCode, setProductCode] = useState<string>('')
    const [productName, setProductName] = useState<string>('')
    const [isSearched, setIsSearched] = useState<boolean>(false);

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    }

    const apiHandler = async () => {
        try {
            const API = `https://www.argos.co.uk/product-api/bazaar-voice-reviews/partNumber/${inputValue}?Limit=2&Offset=10&Sort=SubmissionTime%3ADesc&returnMeta=true`;
            const response = await fetch(API);
            if (response.ok) {
                const data = await response.json();
                console.log(data.data.Results[0].OriginalProductName)
                let product = data.data.Results[0].OriginalProductName;
                if (product) {
                    setProductName(product);
                    setIsSearched(true);
                }
            }
        } catch (error) {
            setProductName('');
            setIsSearched(true);
            console.log(`Error Occurred ${error}`)
        }
    }

    const handleSearchClick = async () => {
        if (inputValue.trim()) {
            await apiHandler()
            console.log('clicked ! and the captured value is : ' + inputValue)
        }
        else {
            setProductName('');
            setIsSearched(true);
            console.log('Found an empty input value')
        }
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

            {/* confirmation */}
            {productName ?
                <ResultCard title={productName} />
                :
                (isSearched ? <ErrorMessage /> : " ")
            }
        </div>
    )
}

export default SearchSection;