"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

// interfaces
import { ChatScreenProps } from "@/interfaces/Result-Card-Interface"

const Chat: React.FC<ChatScreenProps> = ({ reviews }) => {
    // const [data, setData] = useState<String []>('')
    
    useEffect(() => {

    }, [])
    
    return (
        <>
            <div style={{ color: "white" }}>Chat Screen</div>
        </>
    )
}

export default Chat;