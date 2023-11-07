import React from 'react'

const FeaturesBox = ({ icon, title, description }) => {
  return (
    <>
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </>
  )
}

export default FeaturesBox