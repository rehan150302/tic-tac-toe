import React from 'react';
import './square.css'

const Square = ({ value, onClick}) => {
  const style = value === "X" ? "square x" : "square o";
  return (
    <div 
      onClick={onClick}
      className={style}>
      <h5>{value}</h5>
    </div>
  )
}

export default Square
