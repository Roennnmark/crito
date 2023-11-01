import React from 'react'

const ClientBox = ({ imgSrc, description, picSrc, title, secondtitle }) => {
  return (
    <div >
        <img src={imgSrc} alt="client-pic" />
        <p className="txt-1">{description}</p>
        <div className="img-text">
            <div className="img-text-1">
                <img src={picSrc} alt="client-pic" />
            </div>
            <div className="img-text-2">
                <h3>{title}</h3>
                <p className="txt-2">{secondtitle}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientBox