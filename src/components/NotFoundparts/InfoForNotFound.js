import React from 'react';
import ErrorPic from '../../assets/images/error.png';
import { NavLink } from 'react-router-dom'


const InfoForNotFound = () => {
  return (
    <div className="error-page">
        <img src={ErrorPic} alt="error" />
        <NavLink to="/"><button  /></NavLink>
    </div>
  )
}

export default InfoForNotFound