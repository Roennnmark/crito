import React from 'react'
import Sectiontitle from '../../Sectiontitle'
import Memberbox from './Memberbox'
import ImageOne from '../../../assets/images/cristine-palmer.png'
import ImageTwo from '../../../assets/images/mark-aubri.png'
import ImageThree from '../../../assets/images/kimberly-hansen.png'
import ImageFour from '../../../assets/images/justin-willoman.png'




const Teammembers = () => {
  return (
    <section className="team-members">
        <div className="container">
            <div className="section-title">
                <Sectiontitle title="Our Services" description="We Provide The Best Service For Consulting"/>
                <a className="btn-yellow" href="projects.html">Browse Team <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
                <div className="head-members">
                        <Memberbox title="Kristine Palmer" description="Chef Operation Officer" img src={ImageOne} alt="pic of palmer" />
                        <Memberbox title="Mark Aubri" description="Senior Consultant" />
                        <Memberbox title="Kimberly Hansen" description="Senior Consultant" />
                        <Memberbox title="Justin Willoman" description="Senior Tech Consultant" />
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