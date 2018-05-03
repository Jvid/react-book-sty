import React from 'react'
import './counter.css'

function Counter({caption, onIncrement, onDecrement, value}) {
  return(
    <div className='counter-wrap'>
      <span className="decrement" onClick={onDecrement}>-</span>
      <span className="num">{value}</span>
      <span className="increment" onClick={onIncrement}>+</span>
    </div>
  )
}

export default Counter