import React from 'react';

export const PopUp =({popupdisplay, popupFn})=>{ 
    
    const handleSubmit =(e)=>{
       popupFn("popupdisplayHIDE");
    } 
    const handleClick =(e)=>{
        e.preventDefault(); 
         popupFn("popupdisplayHIDE")
    }
    return(
    <div className={popupdisplay} onSubmit={(e) => handleClick(e)}> 
            
            <div class="ml-form-embed"
                data-account="1308892:t0g9u5n8v8"
                data-form="1094822:b7x6u1">
            </div>
    </div>)

} 
