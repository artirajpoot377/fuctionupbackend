import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUPClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("OnChange")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');

  return (
    <div>
    <h1>{props.heading}</h1>  
  <div className="mb-3">
   
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUPClick}>convert to uppercase</button>

    </div>
  )
}
