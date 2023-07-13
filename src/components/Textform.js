import React, { useState } from 'react'

export default function Textform(props) {
    const upperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const lowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const removersymbol = () => {
        setText(text.replace(/[!,@,#,$,%,^,&,*,(,),_,=,+,{,},<,>/,?,",',:,;,`,-,.]/g, ""));
    }

    const change = (e) => {
        setText(e.target.value);
    }

    const copy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const clear = () => {
        setText("");
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container mt-5">
                <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h3>{props.heading}</h3>
                    <div className="my-3">
                        <textarea className="form-control" value={text} id="mybox" rows="8" onChange={change} style={{ backgroundColor: props.mode === 'dark' ? "#212529" : "white", color: props.mode === 'dark' ? "white" : "black" }}></textarea>
                    </div>
                    <div className="container d-flex p-0">
                        <button className="btn btn-dark border me-1" onClick={upperCase}>uppercase</button>
                        <button className="btn btn-dark border mx-1" onClick={lowerCase}> lowercase</button>
                        <button className="btn btn-dark border mx-1" onClick={removersymbol}>remove symbols</button>
                        <button className="btn btn-dark border mx-1" onClick={clear}> clear </button>
                        <button className="btn btn-dark border ms-1 d-none d-sm-block" onClick={copy}>copy</button>
                    </div>
                    <div className="conatiner mt-4">
                        <h4>your text summary:</h4>
                        <p>words : {text.split(" ").length} and character : {text.length}</p>
                        <h3>Preview:</h3>
                        <p id='fontstyle'>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
