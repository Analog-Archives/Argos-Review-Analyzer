"use client"

// interfaces
import { ParagraphProps } from "@/interfaces/Paragraph-Interface"

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
    return (
        <>
            <p style={{
                color: 'white',
                marginTop: 15,
                fontWeight: 400,
                fontSize: 15
            }} >{text}</p>
        </>
    )
}

export default Paragraph