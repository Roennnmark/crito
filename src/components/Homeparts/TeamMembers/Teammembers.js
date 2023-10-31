import React from 'react'
import Sectiontitle from '../../Sectiontitle'
import Memberbox from './Memberbox'
import imageOne from '../../../assets/images/cristine-palmer.png'
import imageTwo from '../../../assets/images/mark-aubri.png'
import imageThree from '../../../assets/images/kimberly-hansen.png'
import imageFour from '../../../assets/images/justin-willoman.png'


const Teammembers = () => {

    const imageList = [
        { imageSrc: imageOne, title:"Kristine Palmer", description:"Chef Operation Officer" },
        { imageSrc: imageTwo, title:"Mark Aubri", description:"Senior Consultant" },
        { imageSrc: imageThree, title:"Kimberly Hansen", description:"Senior Consultant" },
        { imageSrc: imageFour, title:"Justin Willoman", description:"Senior Tech Consultant" }
    ];

  return (
    <section className="team-members">
        <div className="container">
            <div className="section-title">
                <Sectiontitle title="Our Services" description="We Provide The Best Service For Consulting"/>
                <a className="btn-yellow" href="projects.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
                <div className="head-members">
                    {imageList.map(( myItem, index ) => (
                        <Memberbox key={index} imageSrc={myItem.imageSrc} title={myItem.title} description={myItem.description} />
                    ))}
                </div>
            <div className="slide-dots">
                <div className="dot"></div>
                <div className="dot-2"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    </section>
  )
}

export default Teammembers