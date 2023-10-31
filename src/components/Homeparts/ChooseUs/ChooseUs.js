import React from 'react'
import Sectiontitle from '../../Sectiontitle'
import twoWomanImage from '../../../assets/images/two-women-talking.png'

const ChooseUs = () => {
  return (
    <section className="choose-us">
        <div className="container">
            <div className="left-section">
                <div className="section-title">
                    <Sectiontitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
                </div>
                <div className="icon-text">
                    <div className="icon-text-1">
                        <i className="fa-regular fa-thumbs-up fa-2xl"></i>
                    </div>
                    <div className="icon-text-2">
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="icon-text">
                    <div className="icon-text-1">
                        <i className="fa-regular fa-bullseye-pointer fa-2xl"></i>
                    </div>
                    <div className="icon-text-2">
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="icon-text">
                    <div className="icon-text-1">
                        <i className="fa-sharp fa-regular fa-bezier-curve fa-2xl"></i>
                    </div>
                    <div className="icon-text-2">
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="icon-text">
                    <div className="icon-text-1">
                        <i className="fa-light fa-head-side-gear fa-2xl"></i>
                    </div>
                    <div className="icon-text-2">
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <img className="two-woman" src={twoWomanImage} alt="two woman talking" />
                <div className="box-behind-img"></div>
            </div>
        </div>
    </section>
  )
}

export default ChooseUs