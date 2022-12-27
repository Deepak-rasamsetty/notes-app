import React, { useEffect } from 'react'
import { useState } from 'react';
export default function Example() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(count * 2);
    console.log('count - '+ count+' double - '+ doubleCount);
    const handleCount = () => {
        setCount(count + 1);
       // This will not use the latest value of count
    };
    useEffect(()=>{
        console.log('in use effect, count - '+ count);
        setDoubleCount(count * 2);
        return  ()=>{
            console.log('in cleanup, count - '+ count);
        }
    })
    return (
        <div className="App">
            <div>
                <h2>Count Without useEffect</h2>
                <h3>Count: {count}</h3>
                <h3>Count * 2: {doubleCount}</h3>
                <button onClick={handleCount}>Count++</button>
            </div>
        </div>
    );
  }