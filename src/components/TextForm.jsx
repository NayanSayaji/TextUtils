// props
// functional components
// useState : is a hook which is used to create states
// 


import React, { useState } from 'react'

export default function TextForm(props) {

    // its using array destructuring 
    const [text, setText] = useState("");
    // text = "new text"; // wrong way of changing the state
    // setText("new text"); // correct way of changing the state



    // make text UpperCase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    // make text lowerCase
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    // clear the textBox
    const handleClearText = () => {
        setText("");
        props.showAlert("Text box is cleared now!", "info");
    }
    // copy to clipboard
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard!", "success");
    }

    // handleExtraSpaces
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }


    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    {/* as here I am using "text" a state variable so the value of that state area is equal to the value of variable "text" so for showing the typed characters on the textarea I need to add the onchange event handeler which will update the value of input characters */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2f303f':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-info m-2" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-info m-2" disabled={text.length===0} onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-info m-2" disabled={text.length===0} onClick={handleClearText}>Clear TextBox</button>
                <button className="btn btn-info m-2" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-info m-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Summary About the above given Text</h3>
                <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words,{text.length} characters.</p>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} Minutes read.</p>
                <h2>Preview of the text.</h2>
                <p>{text.length>0?text:"Nothing to preview."}</p>
            </div>
        </>
    )
}
