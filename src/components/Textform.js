import {useState} from 'react'
import React, { Component } from 'react'

export default function Textform(props) {
    // text=" new text" // wrong way to change the state
    // setText("new text") // correct way to change the state
  const [text, setText] = useState(""); 
  const handleOnClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);

  }
  const handleloclick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");
  }
  const handleclearclick =()=>{
    setText("");
    props.showAlert("Text cleared", "success");
  }
   const handleOnChange =(event)=>{
    setText(event.target.value);
    props.showAlert("Text changed", "success");
   }
 const handlesentclick = () => {
    if (text.length === 0) return;
    props.showAlert("Text converted to sentence case", "success");

   let newtext = ""; newtext += text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
       newtext += text[i].toLowerCase(); 
      }
     setText(newtext);
}
  return (
    <>
    <div className="container">
      <div>
<div className="mb">
    <h1 style={{color:props.mode=== 'dark'?'white':'black'}}>Enter the text  below</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1"  rows="8" style={{backgroundColor:props.mode=== 'dark'?'#172c41':'white', color:props.mode=== 'dark'?'white':'black'}}></textarea>
 </div> 
 <div className="conatiner my-2"> 
 <button className="btn btn-primary" onClick={handleOnClick}>change to uppercase </button>
  <button className="btn btn-primary"  onClick={handleloclick} style={{ marginLeft: "10px" }}> change to lowercase</button>
   <button className="btn btn-primary"  onClick={handleclearclick} style={{ marginLeft: "10px" }}> clear text</button>
    <button className="btn btn-primary"  onClick={handlesentclick} style={{ marginLeft: "10px" }}> sentence text</button>
</div>
</div>
<div className="container" style={{ marginTop: "10px" },{color:props.mode=== 'dark'?'white':'black'}}>
 <h3>Your text summary</h3>
  <p> {text.split(" ").length} words {text.length} characters</p>
  <p>{0.0008 * text.length} seconds to read</p>
  <h3>Preview</h3>
  <p > {text}</p>
</div>
</div>
</>
    )
  }
;