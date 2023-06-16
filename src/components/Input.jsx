import React, { useEffect, useState } from "react";
import Form from "./Form";

const Input = (props) => {

  const { setDay, setMonth, setYear ,day ,months,year } = props;
  // console.log(day, months, year);
  const handleInputChange = (setState)=>(event)=>{  
    setState(event.target.value)

  }

  return (
    <div className='input-fields'>
        
            <input  placeholder= "DD" value={day} onChange={handleInputChange(setDay)}/>
            <input  placeholder= "MM" value={months} onChange={handleInputChange(setMonth)}/>
            <input  placeholder= "YYYY" value={year} onChange={handleInputChange(setYear)}/>
        
    </div>
  )
}

export default Input
