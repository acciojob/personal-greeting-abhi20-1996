
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
        {name ? <p>Hello {name}!</p> : null}
    </div>
  )
}

export default App