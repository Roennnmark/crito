import React from 'react'
import ContactBox from './ContactBox'

const InfoSection = () => {
  return (
    <section className="info-section">
        <div className="container">
            <div className="info-boxes">
                <ContactBox title="Visit us" description_1="Sveavägen 31" description_2="111 34 STOCKHOLM" />
                <ContactBox title="Call us" description_1="+46 (8) 121 470 50" description_2="+46 (8) 121 470 51" />
                <ContactBox title="Email us" description_1="info@crito.com" description_2="support@crito.com" />
            </div>
        </div>
    </section>
)
}

export default InfoSection