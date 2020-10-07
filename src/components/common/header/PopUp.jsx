import React, { useState } from 'react';

export const PopUp =({popupdisplay, popupFn, handleSubmitEmail})=>{ 
    const [upDateState, name, email] = useState("name", "email"); 
    const handleSubmit =(e)=>{
        e.preventDefault(); 
        let name = e.target.name.value; 
        let email = e.target.email.value; 
        console.log(name, email) 
        popupFn("popupdisplayHIDE");  
        upDateState(name, email); 
        //here we can use "state" or the name, email to submit to the backend
    } 
    const handleClick =()=>{
         popupFn("popupdisplayHIDE")
    }
    return(
    <div className={popupdisplay} > 
            <form onSubmit={(e) => {
                e.preventDefault();
                let savedE = e
                handleSubmit(savedE); 
            }} > 

            <label>Name:</label>
            <input type="text" name="name" />
            <br/>
            <label>Email: </label>
            <input type="text" name="email" /> 
            <input type="submit" value="Connect" />  <span className="close" onClick={(e) => handleClick(e)} > <b>&times;</b></span>
        </form>
    </div>)

} 
