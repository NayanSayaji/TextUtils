// props
// functional components
// useState : is a hook which is used to create states
// 


import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        // console.log(newText)
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = ()=>{
        setText("");    
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }    

    // its using array destructuring 
    const [text, setText] = useState("");
    // text = "new text"; // wrong way of changing the state
    // setText("new text"); // correct way of changing the state

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* as here I am using "text" a state variable so the value of that state area is equal to the value of variable "text" so for showing the typed characters on the textarea I need to add the onchange event handeler which will update the value of input characters */}
                <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
            </div>
            <button className="btn btn-info m-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-info m-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-info m-2" onClick={handleClearText}>Clear TextBox</button>
        </div>
        <div className="container my-3">
            <h3>Summary About the above given Text</h3>
            <p> {text.split(" ").length} words , {text.length} characters.</p>
            <p>{text.split(" ").length * 0.008} Minutes read.</p>
            <h2>Preview of the text.</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
