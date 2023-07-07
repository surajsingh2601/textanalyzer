// import React, { useState } from "react";

export default function About() {
 /* const [myStyle, setmyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });*/
  /*const [btntext, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light  Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };*/

  return (
    <div className="container">
      <h2 className="my-3">About Us</h2>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
               aria-controls="collapseOne" > UPPERCASE#1 </button>
               
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
           
           <div className="accordion-body">
              <strong>This is the CAPITALIZE accordion body.</strong>In this
              Capitalize Function Only one click you can Capital all the words
              of the Box, what you type. <code>.accordion-body</code> In this
              Capitalize Function Only one click you can Capital all the words
              of the Box, what you type.In this Capitalize Function Only one
              click you can Capital all the words of the Box, what you type.
            </div>
          </div>
        </div>
           
          
             

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo" > LOWERCASE#2 </button>
             
             
             
             
             
             
           
             
             
            
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
            <div className="accordion-body" >
              <strong>This is the LOWERCASE accordion body.</strong> In this
              Lowercase Function, Only one click, you can Small all the words of
              the Box, what you type. <code>.accordion-body</code>
            </div>
          </div>
        </div>
           
           <div className="accordion-item">
          <h2 className="accordion-header">
         
           

        
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
               aria-expanded="false" aria-controls="collapseThree" > SPEECH & CANCEL SPEECH #3 </button>
             
             
             
             
             
             
           
             
             
            
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
             <div className="accordion-body">
              <strong>This is the Speech accordion body.</strong> In this Speech
              and Cancel Speech Function Only one click you can Listen and
              cancel all the words of the Box, what you type.
              <code>.accordion-body</code>
            </div>
          </div>
        </div>
       </div>
     
    </div>
  );
}       
           
         
           
     
          
       
          
          
       
 
