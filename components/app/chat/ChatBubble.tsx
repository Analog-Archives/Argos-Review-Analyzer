"use client"

import { SpeechBubbleProps } from "@/interfaces/Result-Card-Interface"
import React from "react"

const userBubbleWrapper = {
    // border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left'
}

const assistantBubbleWrapper = {
    // border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right'
}

const bubbleStyle = {
    marginTop: '7px',
    marginBottom: '7px',
    fontSize: '15px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '17px',
    paddingRight: '17px',
    borderRadius: '12px',
    // width: '50%',
    backgroundColor: 'rgb(74, 74, 74)'
}

const ChatBubble: React.FC<SpeechBubbleProps>
    = ({ role, content }) => {
        return (
            <>
                {role == "user" ?
                    <div style={userBubbleWrapper}>
                        <div
                            style={bubbleStyle} >
                            <small style={{
                                color: "white",
                                fontWeight: 600,
                                opacity: .7
                            }}>{role}</small>
                            <br />
                            {content}
                        </div>
                    </div>
                    :
                    <div style={assistantBubbleWrapper}>
                        <div
                            style={bubbleStyle} >
                            <small style={{
                                color: "white",
                                fontWeight: 600,
                                opacity: .7
                            }}>{role}</small>
                            <br />
                            {content}
                        </div>
                    </div>}
            </>
        )
    }

export default ChatBubble