import React from 'react'
import FeaturesBox from './FeaturesBox'
import Sectiontitle from '../../Sectiontitle'

const Features = () => {
  return (
    <section className="features">
        <div className="box-boxx border"></div>
        <div className="container">
            <div className="sections-3">
                <div className="section-title">
                    <Sectiontitle title="Features" description="Our Accounting is trusted by thousand of companies"/>
                    <a className="btn-yellow" href="learn-more.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <div className="section-two">
                    <FeaturesBox icon="fa-regular fa-handshake fa-2xl" title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeaturesBox icon="fa-sharp fa-light fa-chart-mixed-up-circle-dollar fa-2xl" title="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                </div>
                <div className="section-three">
                    <FeaturesBox icon="fa-regular fa-lightbulb-exclamation-on fa-2xl" title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeaturesBox icon="fa-regular fa-gear fa-2xl" title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features