
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* this title ="TextUtils" is a props. props -> property  */}
      <Navbar title="TextUtils2" aboutText="ABOUT" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below." />
      </div>
    </>
  );
}

export default App;
