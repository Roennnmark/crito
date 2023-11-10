import React from 'react'

const Sectiontitle = ({title, description}) => {
  return (
    <div className="section-title">
        <p>{title}</p>
        <h2>{description}</h2>
    </div>
  )
}

export default Sectiontitle