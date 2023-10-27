import React from 'react'


const Memberbox = ({title, description, imageSrs}) => {
  return (
    <div className="memberbox">
        <img src={imageSrs} alt="member-pic" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Memberbox