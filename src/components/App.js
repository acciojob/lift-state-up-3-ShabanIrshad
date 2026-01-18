
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOPtion,setSelectedOPtion]=useState('');

  const handleOption=(text)=>{
    setSelectedOPtion(text);
    console.log(selectedOPtion);

  }
  return (
    <div className="parent" >
        <h1>Parent Component</h1>
        <ChildComponent1 selectedOPtion={selectedOPtion} handleOption={handleOption}/>
        <ChildComponent2 selectedOPtion={selectedOPtion} handleOption={handleOption}/>
        <p>Selected Option: {selectedOPtion}</p>
    </div>
  )
}

export default App
