import React, { Fragment, useState } from "react";

export default function TextForm(props) {




  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value)

  }


  const handleUpclick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoclick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let tobereplaced = new RegExp(repval, "g");

    let toreplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
    props.showAlert("Successfully replaced!", "success");
  }


  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Successfully removed all the extra spaces!","success");
  }


  const handleClearclick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = "";
    setText(newText);
    props.showAlert("All cleared!", "danger");
  }

  const handlespeakclick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleSpeechclick = () => {
    speechSynthesis.cancel();
  }

 


  const [text, setText] = useState("");
  // text = "new text";  //wrong way to change te state
  //  setText("new text"); // Correct way to change the State
  return (
    <>
      <div className="conatiner" style={{color: props.mode === 'dark'?'white':'#021a34'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text}
           style={{background : props.mode==='dark'?'linear-gradient(45deg, black, transparent)':
           'white', color: props.mode === 'dark'? 'white':'#021a34'}} onChange={handleOnchange} 
          id="myBox" rows="12"></textarea>
         </div>  
           
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpclick}> Convert to Uppercase </button>
          
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoclick}> Convert to Lowercase </button>
          
        <button type="button" className="btn btn-primary" onClick={replaceString}> Replace word </button>

        <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
          
        <button type="button" className="btn btn-primary mx-2" onClick={handleClearclick}> Clear All </button>
         
         <button type="button" className="btn btn-primary mx-2" onClick={handlespeakclick}> Speech </button>

         <button type="button" className="btn btn-primary mx-2" onClick={handleSpeechclick}> CancelSpeech </button>
         
         
         
           
       </div>

      <div className="container" style={{color: props.mode === 'dark'? 'white':'#021a34' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
        <h3 className="my-2"> Preview </h3>
        <p>{text.length>0?text:"Enter your text in the textbox above to preview here "}</p>
      </div>
    </>
  );
}    
          
        
       
          
        
          
          
          
        

        
         
         
         
       
          
        
        
         
         
       
          
        
       
         
       
         
        
        
         
         
         
        
         
       
      
