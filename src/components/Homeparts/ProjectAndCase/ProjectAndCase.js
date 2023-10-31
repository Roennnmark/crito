import React from 'react'
import imgOne from '../../../assets/images/article-image-1.png'
import imgTwo from '../../../assets/images/article-image-2.png'
import imgThree from '../../../assets/images/article-image-3.png'
import imgFour from '../../../assets/images/article-image-4.png'
import ProjectBox from './ProjectBox'
import Sectiontitle from '../../Sectiontitle'

const ProjectAndCase = () => {

    const projectList = [
        { picSrc: imgOne, title:"Grow you business", url:"/Chef Operation Officer" },
        { picSrc: imgTwo, title:"Why your client needs a responsive website", url:"/Senior Consultant" },
        { picSrc: imgThree, title:"Educate your employees to get better results", url:"/Senior Consultant" },
        { picSrc: imgFour, title:"Business Insights is a important piece of your business", url:"/Senior Tech Consultant" }
    ];

  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <Sectiontitle title="Project & Case Studies" description="Let's Looks Out Global Projects"/>
            </div>
            <div className="project-and-cases">
            {projectList.map(( myItem, index ) => (
                        <ProjectBox key={index} picSrc={myItem.picSrc} title={myItem.title} url={myItem.url} />
                    ))}
        </div>
        <div className="center-content">
                <a className="btn-black" href="projects.html">All recent projects <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        </div>
    </section>
  )
}

export default ProjectAndCase