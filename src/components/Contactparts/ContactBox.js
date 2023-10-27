import React from 'react'

const ContactBox = ({title, description_1, description_2}) => {
  return (
    <div className="box-one border">
        <div className="box-icon">
            <a href="#"><i className="fa-sharp fa-solid fa-location-dot fa-lg"></i></a>
        </div>
        <div className="box-text">
            <h3>{title}</h3>
            <p>{description_1}</p>
            <p>{description_2}</p>
        </div>
    </div>
  )
}

export default ContactBox