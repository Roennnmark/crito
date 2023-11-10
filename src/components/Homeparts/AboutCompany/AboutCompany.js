import React from 'react'
import Sectiontitle from '../../PartsForAllPages/Sectiontitle'
import womanImage from '../../../assets/images/walking-woman.png'
import Button from '../../PartsForAllPages/Button'

const AboutCompany = () => {
  return (
    <section className="about-company">
        <div className="container">
            <div className="company-section-1">
                <img src={womanImage} alt="woman walking" />
                <div className="company-box">
                    <div className="image-text">
                        <h3>Samantha Brown, </h3>
                        <p>Founder</p>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="company-section-2">
                <div className="section-title">
                    <Sectiontitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p className="company-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="move-buttons">
                    <Button type="dark" title="Learn More" url="/learnmore" />
                    <a className="btn-transparent" href="play.html"><i className="fa-solid fa-play"></i></a>
                    <p>Intro Video</p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default AboutCompany