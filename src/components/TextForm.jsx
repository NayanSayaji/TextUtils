// props
// functional components
// useState : is a hook which is used to create states
// 


import React, { useState } from 'react'

export default function TextForm(props) {
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

    const noOfWords = () => {
        // slipt the text and store in array "words"
        let words = text.split(" ");
        // console.log(words)
        // store the length of array into variable "wordCount"
        let wordCount = text.split(" ").length ;
        // console.log(words[words.length - 1]==="")
        // check whether the last element of array words is null or not "" 
        if (words[words.length ] === "") {
            // if it is null then decrement wordCount by 1
            wordCount-=1;
        } 

        // iterate through all elements for reducing the word count of "" null or empty elements 
        words.forEach(element => {
            // if element is empty or null ""
             if(element=== ""){
                // reduce wordCount
                wordCount--;
                // console.log(element)
             }
        });

        return wordCount;
    }
    // its using array destructuring 
    const [text, setText] = useState("");
    // text = "new text"; // wrong way of changing the state
    // setText("new text"); // correct way of changing the state

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* as here I am using "text" a state variable so the value of that state area is equal to the value of variable "text" so for showing the typed characters on the textarea I need to add the onchange event handeler which will update the value of input characters */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2d303b':'white', color: props.mode==='dark'?'white':'dark'}} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-info m-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-info m-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-info m-2" onClick={handleClearText}>Clear TextBox</button>
                <button className="btn btn-info m-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-info m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Summary About the above given Text</h3>
                <p> {noOfWords()} words , {text.length} characters.</p>
                <p>{text.split(" ").length * 0.008} Minutes read.</p>
                <h2>Preview of the text.</h2>
                <p>{text.length>0?text:"Enter something in above textbox to see preview here."}</p>
            </div>
        </>
    )
}
