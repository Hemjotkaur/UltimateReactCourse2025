import React, { useState } from "react";
import './Counter.css'

const Counter = () => {
    const [step,setStep] = useState(1);
    const [count,setCount] = useState(0);
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    function handleSub(){
        if(step!=1){
             setStep((s)=>s-1);
        }
    }
      function handleSubc(){
       setCount((c)=>c-step);
    }
     function handleAdd(){
        setStep((s)=>s+1);
    }
     function handleAddc(){
        setCount((c)=>c+step);
    }
  return (
    <div>
      <div className="box1">
        <button className="minus" onClick={handleSub}>-</button>
        <div className="step">Step:{step}</div>
        <button className="add" onClick={handleAdd}>+</button>
      </div>
       <div className="box1">
        <button className="minus" onClick={handleSubc}>-</button>
        <div className="step">Count:{count}</div>
        <button className="add" onClick={handleAddc}>+</button>
      </div>
      <div className="date-time">
        {count === 0 
        ? "Today is" 
        : count > 0
        ? `${count} days from today is`
        : `${Math.abs(count)} days ago was`}
        {date.toDateString()}
      </div>
    </div>
  );
};

export default Counter;
