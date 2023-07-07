import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert"; 


function App() {
    const [mode, setMode] = useState('light');   //whether dark mode in enabled or not   
    
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
       setAlert({
          msg:message,
          type: type
       })
       
       setTimeout(() => {
        setAlert(null);
       }, 1500);
    }

    const toggleMode = ()=>{
        if (mode === 'light') {
                 setMode('dark');
                 document.body.style.background = '#021a34';
                 showAlert("Dark mode has been enabled", "success");

        }else {
                setMode('light');  
                document.body.style.background = 'white';
                showAlert("Light mode has been enabled","success");
        }  }    
  
  return ( 
    <>
           {/*   <Navbar/>      default value from Navbar component file */}
           {/*  <Navbar/> */ }

      
      <Navbar title="TextAnalyzer"  AboutText="About TextAnalyzer" mode={mode}  toggleMode={toggleMode}/>  

        <Alert alert={alert}/>

      <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Try TextAnalyzer - word counter,character counter,all clear, remove extra spaces" mode={mode}/>
      </div>
    
    </>
  );
}

export default App;
