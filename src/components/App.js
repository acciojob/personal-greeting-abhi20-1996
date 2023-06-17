
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
let [name, setNmae]=useState("");

function enterdText(event){
         setNmae(event.target.value);
}



  return (
    <div>
        <label for="name">Enter your name:</label>
        <input value={name} onChange={enterdText} type="text" id="name"/>
        <p>{name ? `Hello ${name}!` : null}</p>
    </div>
  )
}

export default App