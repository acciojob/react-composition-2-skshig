import React from 'react'


const Child = ({showProp,setShowProp }) => {

    function handleClsoe(){
        setShowProp(false);
    }
  return (
    <div>
        <p className="modal-p"></p>
        <button className='modal-close' onClick={handleClsoe}>Close Modal</button>
        <p>this is content of a modal</p>
    </div>
  )
}

export default Child