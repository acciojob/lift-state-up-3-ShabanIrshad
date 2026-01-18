import React from 'react';

const ChildComponent2=({selectedOption,handleOption})=>{
     return (
        <>
            <h2>Child Component 2</h2>
            <button onClick={()=>handleOption("Option 2")}>Option 2</button>
        </>

    );
}

export default ChildComponent2;