import React from 'react'
import './Blood.css'

const Blood = ({ quantidade }) => {
  return (
    <div className="blood-container">
      {Array.from({ length: quantidade }).map((_, index) => (
        <img
          key={index}
          src="/public/image/blood.png"
          className="blood"
          alt="blood"
        />
      ))}
    </div>
  )
}


export default Blood
