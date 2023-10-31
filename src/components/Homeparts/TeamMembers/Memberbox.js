import React from 'react'


const Memberbox = ({ imageSrc, title, description }) => {
  return (
    <div className="memberbox">
        <img src={imageSrc} alt="member-pic" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Memberbox