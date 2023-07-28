
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212530f1";
      showAlert("Dark mode has beed enabled", "success");
      document.title = "TextUtils - Dark Mode is On";


      // we can flash the title using setIntervals
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing !!!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Use TextUtils it's Awesome !!!";
      // }, 700);


    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beed enabled", "success")
      // document.body.style.color ="black";
      document.title = "TextUtils - Light Mode is On";
    }
  }

  return (
    <>

      <Router>
        {/* this title ="TextUtils" is a props. props -> property  */}
        <Navbar title="TextUtils" aboutText="ABOUT" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils for - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
