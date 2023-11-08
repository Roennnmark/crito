import React from 'react'
import ArticleBox from './NewsArticleBox';
import articleImgOne from '../../assets/images/image-31.png'
import articleImgTwo from '../../assets/images/image-32.png'
import articleImgThree from '../../assets/images/image-33.png'
import Button from '../Button'

const NewsArticles = () => {

    const articleList = [
        {  imgSrc: articleImgOne, description: "Business", title:"How To Use Digitalization In The Classroom", descriptiontwo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", datenumber: "25", datemonth: "Mar"  },
        {  imgSrc: articleImgTwo, description: "Business", title:"How To Implement Chat GPT In Your Projects", descriptiontwo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", datenumber: "17", datemonth: "Mar"  },
        {  imgSrc: articleImgThree, description: "Business", title:"The Guide To Support Modern CSS Design", descriptiontwo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.", datenumber: "13", datemonth: "Mar"  }
    ];

  return (
    <section className="articles-news">
        <div className="container">
            <div className="section-title">
                <div className="article-headline-1">
                    <p>Article & News</p>
                </div>
                <div className="article-headline-2">
                    <h2>Get Every Single Articles & News</h2>
                    <Button type="transparent" title="Browse Articles" url="/news" />
                </div>
            </div>
            <div className="three-articles">
                {articleList.map(( myItem, index ) => (
                    <ArticleBox key={index} imgSrc={myItem.imgSrc} description={myItem.description} title={myItem.title} descriptiontwo={myItem.descriptiontwo} datenumber={myItem.datenumber} datemonth={myItem.datemonth} />
                ))}
            </div>

            <div className="slide-dots-2">
                <div className="dot-2"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    </section>
  )
}

export default NewsArticles