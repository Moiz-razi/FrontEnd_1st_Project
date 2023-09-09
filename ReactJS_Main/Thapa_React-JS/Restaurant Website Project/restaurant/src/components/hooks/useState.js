import React, {useState} from "react";

import './stylehooks.css';

const UseState = () => {
    // const initialData = 15;
     const[myNum,setMyNum] = useState(0);
     console.log(myNum);
     
    
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
            <div className="button2" onClick={()=> (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
         </div>
        </>
    );
}

export default UseState;