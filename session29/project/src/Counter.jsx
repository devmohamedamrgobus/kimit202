import { useState } from "react";

export default function Counter(){
    let [number,setNumber] = useState(0)
    let [colors,setColors] = useState([
        'red',
        'green',
        'blue'
    ])
    return (
        <>
            <h1>count is {number}</h1>
            <button onClick={()=>setNumber(++number)}>increment</button>


            <ul>

            {colors.map((c,i)=> <li key={i}>{c}</li> )}
            </ul>
        </>
    );
    
}