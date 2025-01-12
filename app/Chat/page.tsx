"use client"
import React, { useEffect, useState } from "react"

// ui components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// interfaces
import { ChatScreenProps } from "@/interfaces/Result-Card-Interface"

// stylesheet
import Styles from './Styles.module.css'

const Chat: React.FC<ChatScreenProps> = ({ reviews }) => {
    // const [data, setData] = useState<String []>('')

    useEffect(() => {

    }, [])

    return (
        <>
            <div className={Styles.chat_screen_wrapper}>
                {/* chat box */}
                <div className={Styles.chat_display}>

                </div>

                {/* input */}
                <div className={Styles.input}>
                    <Input 
                        className={Styles.input_field} 
                        type="text" 
                        placeholder="Type your questions here ..." />
                    <Button className={Styles.btn}>Ask</Button>
                </div>
            </div>
        </>
    )
}

export default Chat;