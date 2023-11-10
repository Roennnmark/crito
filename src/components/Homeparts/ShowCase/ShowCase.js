import React from 'react'
import imageOfMan from '../../../assets/images/showcase-man.png'
import showcaseLines from '../../../assets/images/lines-2.png'
import Button from '../../PartsForAllPages/Button'


const ShowCase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes</p>
            <Button type="yellow" title="Get Consulting" url="/consulting" />
            <Button type="transparent" title="Learn More" url="/learnmore" />
            </div>
            <img src={imageOfMan} alt="pic of a man with a tablet" />
        </div>
        <div className="lines-showcase"><img src={showcaseLines} alt="lines-for-showcase" /></div>
    </section>
  )
}

export default ShowCase