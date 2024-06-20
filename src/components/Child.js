import React from 'react'


const Child = ({setShowProp }) => {

    function handleClsoe(){
        setShowProp(false);
    }
  return (
    <div>
        <button className='model-close' onClick={handleClsoe}>Close Modal</button>
        <p className="model p">this is content of a modal</p>
    </div>
  )
}

export default Child