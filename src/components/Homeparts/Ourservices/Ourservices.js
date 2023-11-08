import React from 'react';
import ServiceBox from './ServiceBox';
import Sectiontitle from '../../Sectiontitle';
import Button from '../../Button'

const Ourservices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <Sectiontitle title="Our Services" description="We Provide The Best Service For Consulting"/>
        <div className="different-services">
          <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/businessadvice" />
          <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/startupbusiness" />
          <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/financialadvice" />
          <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus" url="/services/riskmanagement" />
        </div>
        <div className="center-content">
            <Button type="transparent" title="Browse Services" url="/services" />
        </div>
      </div>
      <div className="lines-services"><img src="images/lines-4.png" alt="" /></div>
    </section>
    
  )
}

export default Ourservices