'use client'
import { useState , useEffect } from 'react'
import './counter.css'

export default function Counter() {

    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)



    useEffect(() => {
 
    }, [second, minute, hour])

    return (
        <div className="time_counter">
            <div className="time_counter_container">
                <h1>Time Counter</h1>
                <hr />
                <h1>{hour} : {minute} : {second}</h1>
                <div className="time_counter_buttons">
                    <button className="stop_button">STOP</button>
                    <button className="start_button">START</button>
                </div>
            </div>
        </div>
    )
}