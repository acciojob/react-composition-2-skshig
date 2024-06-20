
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
let [showProp, setShowProp] = useState(false);

  function handleShowButton(){
    setShowProp(true);
  }
  return (
    <div className="modal-ovarlay"  style={{backgroundColor:"thistle", margin:"solid black"}}>
        {/* Do not remove the main div */}
        <button onClick={handleShowButton}  style={{backgroundColor:"tomato"}}>Show Modal</button>
        {
          showProp &&
          <Child setShowProp={setShowProp} />
        }
        
    </div>
  )
}

export default App
