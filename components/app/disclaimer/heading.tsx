"use client"

// interfaces
import { HeadingPagePros } from "@/interfaces/Heading-Interface"

const Heading: React.FC<HeadingPagePros> = ({ title }) => {
    return (
        <>
            <h4 style={{ color: 'white', fontSize: 22 }}>{title}</h4>
        </>
    )
}

export default Heading