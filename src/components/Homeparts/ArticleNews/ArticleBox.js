import React from 'react'

const ArticleBox = ({ imgSrc, description, title, descriptiontwo, datenumber, datemonth}) => {
  return (
    <article>
        <img src={imgSrc} alt="article-pic" />
        <p>{description}</p>
        <h3>{title}</h3>
        <p>{descriptiontwo}</p>
        <div className="date-box-1">
            <h3>{datenumber}</h3>
            <p>{datemonth}</p>
        </div>
    </article>
  )
}

export default ArticleBox