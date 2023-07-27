
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if (mode==='light') {
      setMode('dark')
    }else{
      setMode('light')
    }
  }
  return (
    <>
      {/* this title ="TextUtils" is a props. props -> property  */}
      <Navbar title="TextUtils2" aboutText="ABOUT" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below." />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
