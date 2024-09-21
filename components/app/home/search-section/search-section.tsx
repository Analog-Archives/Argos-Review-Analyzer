"use client"

// components
import { Input } from '@/components/ui/input'

// shad cn components
import { Button } from "@/components/ui/button";

// stylesheet
import Styles from './search-section.module.css'

const SearchSection: React.FC<{}> = () => {
    return (
        <div className={`${Styles.wrapper} mx-auto d-block`}>
            <p>Enter your product code here 👇</p>
            <div style={{
                display: 'flex',
                marginTop: 20,
                marginBottom: 10
            }}>
                <Input />
                <Button>Search</Button>
            </div>
            <a href="">How to get the product code ?</a>
        </div>
    )
}

export default SearchSection