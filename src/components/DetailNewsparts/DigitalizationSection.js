import React from 'react'
import girlImg from '../../assets/images/image-31.png'

const DigitalizationSection = () => {
  return (
    <div className="digitalization">
        <div className="container">
            <h3>How To Use Digitalization In The Classroom</h3>
            <p>Mar 25, 2023 Business Kimberly Hansen</p>
            <div className="both-sides">
                <div className="left-side">
                    <img src={girlImg} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                    <p className="citat">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                </div>
                <div className="right-side">
                    <input type="text" placeholder="Type to search..." />
                    <div className="recent-posts">
                        <h4>Recent Posts</h4>
                        <p>How To Blow Through Capital At An Incredible Rate</p>
                        <p>Design Studios That Everyone Should Know About? </p>
                        <p>How did we get 1M+ visitors in 30 days without anything!</p>
                        <p>Figma On Figma: How We Built Our Website Design System</p>
                    </div>
                    <div className="news-categories">
                        <h4>Categories</h4>
                        <p>Technology  -  20 Posts</p>
                        <p>Freelancing  -  07 Posts</p>
                        <p>Writing  -  16 Posts</p>
                        <p>Marketing  -  11 Posts</p>
                        <p>Business  -  35 Posts</p>
                        <p>Education  -  14 Posts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DigitalizationSection