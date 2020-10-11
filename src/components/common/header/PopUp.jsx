import React, { useState } from 'react';

export const PopUp =({popupdisplay, popupFn, handleSubmitEmail})=>{ 
    const [upDateState, name, email] = useState("name", "email"); 
    const handleSubmit =(e)=>{
        e.preventDefault(); 
        let name = e.target.name.value; 
        let email = e.target.email.value; 
        console.log(name, email) 
        //popupFn("popupdisplayHIDE");  
       // upDateState(name, email); 
        let postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                mode: 'cors',
                cache: 'default',

            },
            body: JSON.stringify({'fname': name, 'email':email}),
        }
        
        fetch('http://localhost:3000/dev/signup', postOptions)
        .then(response =>{ 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            res.json()})
        .then(data => console.log(data))
        //here we can use "state" or the name, email to submit to the backend
        console.log("fetching") 
        popupFn("popupdisplayHIDE");
    } 
    const handleClick =()=>{
         popupFn("popupdisplayHIDE")
    }
    return(
    <div className={popupdisplay} > 
            
            <div class="ml-form-embed"
                data-account="1308892:t0g9u5n8v8"
                data-form="1094822:b7x6u1">
            </div>
    </div>)

} 
