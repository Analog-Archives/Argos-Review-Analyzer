"use client"

// components
import {
    Card,
    CardDescription,
    CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// interface
import { ResultCardProps } from '@/interfaces/Result-Card-Interface'

// stylesheet
import Styles from './result-card.module.css'
import { useState } from 'react'

const ResultCard: React.FC<ResultCardProps> = ({ title }) => {
    return (
        <div style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // marginTop: 50
        }}>
            <Card className={Styles.wrapper}>
                <CardDescription
                    style={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: 14,
                        textTransform: 'capitalize'
                    }}>
                    {title}</CardDescription>

                <hr style={{ color: '#E9E9E9' }} />

                <CardFooter
                    className='mx-auto d-block'
                    style={{
                        fontSize: 14,
                        marginTop: 20
                    }}>
                    Is this your product ?</CardFooter>

                <div style={{ marginTop: -5 }}>
                    <Button className={Styles.button_1}>No</Button>
                    <Button className={Styles.button_2}>Yes</Button>
                </div>
            </Card>
        </div>
    )
}

export default ResultCard