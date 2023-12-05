import React from 'react'
import emptyImage from './empty.jpeg'

const EmptyCart = () => {
  return (
    <>
    <div className='bg-white mt-5 m-10 w-2/3 inline-flex'>
        <img src={emptyImage} alt='jug and glass' className='ml-12 w-80 h-60'></img>
        <div>
            <h1>Your Cart is Empty</h1>
        </div>
        
    </div>
    </>
  )
}

export default EmptyCart