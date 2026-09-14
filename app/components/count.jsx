'use client'
import { useState } from 'react'
import './count.css'

export default function Counter({productCount, setProductCount}) {
    
    function onCountMinus(){
        if(productCount == 0){
            setProductCount(productCount - 1)
        }
        // else{
        //     setProductCount(productCount == 0)
        // }
    }
    
    return (
        <div className="counter">
            <p onClick={() => setProductCount(productCount - 1)} style={{ borderRight: "1px solid #000" }}>-</p>
            {productCount}
            <p onClick={onCountMinus} style={{ borderLeft: "1px solid #000" }}>+</p>
        </div>
    )
}