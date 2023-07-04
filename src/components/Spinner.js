import React from 'react'
import loading from './loading.gif'
const Spinner = ()=> {
    return (
      <div className='text-center'>   
        <img className='my-6' src={loading} alt="" />
      </div>
    )
}

export default Spinner
