import React from 'react'


const Child = ({showProp,setShowProp }) => {

    function handleClsoe(){
        setShowProp(false);
    }
  return (
    <div>
        <p className="model-p"></p>
        <button className='model-close' onClick={handleClsoe}>Close Modal</button>
        <p>this is content of a modal</p>
    </div>
  )
}

export default Child