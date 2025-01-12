"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tooltip } from 'react-tooltip';

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
    const [productName, setProductName] = useState<string>('')
    const [reviews, setReviews] = useState<string[]>([]);
    const [isSearched, setIsSearched] = useState<boolean>(false);

    // routing instance
    const router = useRouter();

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    }

    const apiHandler = async () => {
        try {
            let limit: number = 1;
            const initialAPI = `https://www.argos.co.uk/product-api/bazaar-voice-reviews/partNumber/${inputValue}?Limit=${limit}&Offset=10&Sort=SubmissionTime%3ADesc&returnMeta=true`;
            const response = await fetch(initialAPI);
            if (response.ok) {
                const data = await response.json();
                // getting the product name
                console.log(data.data.Results[0].OriginalProductName)
                let product = data.data.Results[0].OriginalProductName;
                if (product) {
                    setProductName(product);
                    setIsSearched(true);
                }

                // getting the review limit
                let totalReviewCount: number = data.data.TotalResults;
                console.log(`Total review count is - ${totalReviewCount}`)

                totalReviewCount >= 100 ?
                    limit = 100
                    :
                    limit = totalReviewCount;

                // calling the secondary api handle
                secondaryAPIHandler(limit)
            }
        } catch (error) {
            setProductName('');
            setIsSearched(true);
            console.log(`Error Occurred ${error}`)
        }
    }

    const secondaryAPIHandler = async (reviewLimit: number) => {
        let reviewsCollectorSnapshot: string[] = []

        try {
            const secondaryAPI = `https://www.argos.co.uk/product-api/bazaar-voice-reviews/partNumber/${inputValue}?Limit=${reviewLimit}&Offset=10&Sort=SubmissionTime%3ADesc&returnMeta=true`;
            const response = await fetch(secondaryAPI);
            const data = await response.json();

            for (let i = 0; i < data.data.Results.length; i++) {
                reviewsCollectorSnapshot.push(data.data.Results[i].ReviewText)
            }
            setReviews(reviewsCollectorSnapshot);

            // debugging
            console.log(`Length of the array - ${data.data.Results.length}`)
            console.log(`Temp. collection -  ${reviewsCollectorSnapshot.length}`)

        } catch (error) {
            console.log(`Some error occured - ${error}`)
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

            <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content="Hellow World"
                href="">
                How to get the product code ?</a>

            {/* confirmation */}
            {productName ?
                <ResultCard reviews={reviews} title={productName} />
                :
                (isSearched ? <ErrorMessage /> : " ")
            }
        </div>
    )
}

export default SearchSection;