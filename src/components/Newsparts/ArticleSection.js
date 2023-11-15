import React from 'react'
import { useArticles } from '../../contexts/ArticleContext'

const ArticleSection = () => {
    const { articles } = useArticles()


  return (
    <div className="article-section">
                    <h2>Our News & Articles</h2>
        <div className="container">
            <div className="all-articles">
                {articles.map(article => (
                    <div className="article-item" key={article.id}>
                        <img src={article.imageUrl} alt="bild" />
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>
                        <p>{article.content}</p>
                        <p className="article-published">{article.published}</p>
                    </div>
                ))}
            </div>
            <div className="text-box">
                <p>&lt;</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>...</p>
                <p>9</p>
                <p>&gt;</p>
            </div>
        </div>
    </div>
  )
}

export default ArticleSection