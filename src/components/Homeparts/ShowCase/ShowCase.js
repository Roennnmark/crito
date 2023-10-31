import React from 'react'
import imageOfMan from '../../../assets/images/showcase-man.png'
import showcaseLines from '../../../assets/images/lines-2.png'

const ShowCase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes</p>
            <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
            <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <img src={imageOfMan} alt="pic of a man with a tablet" />
        </div>
        <div className="lines-showcase"><img src={showcaseLines} alt="lines-for-showcase" /></div>
    </section>
  )
}

export default ShowCase