"use client"

// components
import { Input } from '@/components/ui/input'

// shad cn components
import { Button } from "@/components/ui/button";

const SearchSection: React.FC<{}> = () => {
    return (
        <>  
            <p>Enter your product code here 👇</p>
            <Input />
            <Button />
            <a href="">How to get the product code ?</a>
        </>
    )
}

export default SearchSection