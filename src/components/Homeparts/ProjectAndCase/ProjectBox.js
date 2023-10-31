import React from 'react'

const ProjectBox = ({ picSrc, title, url }) => {
  return (
    <div>
        <img src={picSrc} alt="picpic" />
        <h3>{title}</h3>
        <a href={url}>Read More<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
  )
}

export default ProjectBox