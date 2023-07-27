
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor ="#212530f1";
      showAlert("Dark mode has beed enabled","success")      
    }else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has beed enabled","success")      
      // document.body.style.color ="black";
    }
  }

  return (
    <>
      {/* this title ="TextUtils" is a props. props -> property  */}
      <Navbar title="TextUtils" aboutText="ABOUT" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below." mode={mode}/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
