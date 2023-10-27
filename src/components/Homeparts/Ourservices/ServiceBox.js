import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div>
        <div className="box-1">
            <h2>___</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <a className="btn-black" href={url}><i className="fa-regular fa-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default ServiceBox