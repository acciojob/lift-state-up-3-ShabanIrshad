import React from 'react';

const ChildComponent1=({selectedOPtion,handleOption})=>{
    return (
        <>
            <h2>Child Component 1</h2>
            <button onClick={()=>handleOption("Option 1")}>Option 1</button>
        </>

    );


}

export default ChildComponent1; 