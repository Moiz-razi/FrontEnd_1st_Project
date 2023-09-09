import React, {useState,useEffect, useLayoutEffect, useInsertionEffect} from "react";

import './stylehooks.css';

const UseEffect = () => {
    const initialData = 15;
     const[myNum,setMyNum] = useState(initialData);
     console.log(myNum);
     
     useEffect(() =>{
        document.title = `Chats(${myNum})`
     })
    
    return (
        <>
         <div className="center_div">
            <p>{myNum}</p>
            <div className='button2' onClick={()=> setMyNum(myNum + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
           
         </div>
        </>
    );
}

export default UseEffect;