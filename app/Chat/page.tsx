"use client"
import React, { useEffect, useState } from "react"
import Groq from "groq-sdk"

// ui components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// interfaces
// import { ChatScreenProps } from "@/interfaces/Result-Card-Interface"
import { SpeechBubbleProps } from "@/interfaces/Result-Card-Interface"

// stylesheet
import Styles from './Styles.module.css'
import ChatBubble from "@/components/app/chat/ChatBubble"

// grow client
const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

let userQuestionsSnapshot: SpeechBubbleProps[] = []
let conversation: any[] = [
    {
        role: 'system',
        content: `You are a helpful assitant that helps users 
        to select items in a store. Don't use too long answers when
        generating responses.`
    },
    {
        role: 'system',
        content: `Here some reviews related to a product. 
        Use them to give the best customer experice to the user. 
        Reviews - ${localStorage.getItem('reviews')}.`
    },
];

const Chat: React.FC = () => {
    const [data, setData] = useState<String[]>([])
    const [userQuestion, setUserQuestion] = useState<String>('')
    const [conversationState, setConversationState] = useState<SpeechBubbleProps[]>([])
    localStorage.setItem('conversation', JSON.stringify(conversation));

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('reviews') as string)
        console.log(data);
        setData(data);
    }, [])

    const handleUserQuestions
        = (event: React.ChangeEvent<HTMLInputElement>) => {
            setUserQuestion(event.target.value);
        }

    const dummyClickHandle = async () => {
        let userQuestionSnapshot = {
            role: "user",
            content: userQuestion
        };

        // updating the conversation in localstorage
        conversation.push(userQuestionSnapshot);

        // saving the conversation in the localstorage
        localStorage.setItem('conversation', JSON.stringify(conversation));

        setUserQuestion('');

        // API call to the groq
        try {
            const chatCompletion = await groq.chat.completions.create({
                messages: conversation,
                model: "llama-3.3-70b-versatile"
            });

            let tempResposneSnapshot = {
                role: 'assistant',
                content: chatCompletion.choices[0].message.content
            }

            // updating the conversation
            conversation.push(tempResposneSnapshot);

            setConversationState([...conversation]);

            // saving the conversation in the localstorage
            localStorage.setItem('conversation', JSON.stringify(conversation));

        } catch (error) {
            console.log(`Some error occured - ${error}`)
        }

        console.log(userQuestionsSnapshot)
    }

    return (
        <>
            <div className={Styles.chat_screen_wrapper}>
                {/* chat box */}
                <div className={Styles.chat_display}>
                    {conversationState.slice(2).map((item, index) => (
                        <div key={index}>
                            <ChatBubble
                                role={item.role}
                                content={item.content} />
                        </div>
                    ))}
                </div>

                {/* input */}
                <div className={Styles.input}>
                    <Input
                        className={Styles.input_field}
                        type="text"
                        value={userQuestion as string}
                        placeholder="Type your questions here ..."
                        onChange={handleUserQuestions} />
                    <Button
                        onClick={dummyClickHandle}
                        className={Styles.btn}>Ask</Button>
                </div>
            </div>
        </>
    )
}

export default Chat;