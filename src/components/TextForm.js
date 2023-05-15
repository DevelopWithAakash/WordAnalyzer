import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        // console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    // capitalization for every word first character is capital
    const handleCapClick = () => {
        // console.log("Capitalization was clicked: " + text);
        // let text = newText;
        let words = text.toLowerCase().split(' ');
        let CapText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let newText = CapText.join(' ');
        setText(newText)
    }

    // COPPY ALL TEXT FROM BOX
    const handleCopyClick = () => {
        // console.log("Copy was clicked: " + text);
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // Remove Extra Spaces
    const handleRmExSpClick = () => {
        // console.log("Remove Extra Spaces was clicked: " + text);
        let Text = text.split(/[ ]+/);
        let newText = Text.join(' ');
        setText(newText)
    }

    const handleClearClick = () => {
        // console.log("ClearText was clicked: " + text);
        let newText = ('');
        setText(newText)
    }



    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success my-1 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-info my-1 mx-1" onClick={handleCapClick}>Convert to Capitalization</button>
                <button className="btn btn-secondary my-1 mx-1" onClick={handleRmExSpClick}>Remove Extra Spaces</button>
                <button className="btn btn-warning my-1 mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-danger my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                {/* <p>{text.split(" ").length} Words and {text.replace(/\s/g, '').length} Characters</p> */}
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s/g, '').length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}