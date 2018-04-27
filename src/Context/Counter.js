import React from 'react'

function Counter({value, onIncrement, onDecrement}) {
  return (
    <div className='counter-wrap'>
      <span className="decrement" onClick={onDecrement}>-</span>
      <span className="num">{value}</span>
      <span className="increment" onClick={onIncrement}>+</span>
    </div>
  )
}

export default Counter