import React from 'react'
import './Input.css'

function Input({text,result}) {
  return (
    <div className='inut-wrapper'>
        <div className='result'>
            <h1>{result}</h1>
        </div>
        <div className='text'>
            <h3>{text}</h3>

        </div>
       
        
        
        </div>
  )
}

export default Input