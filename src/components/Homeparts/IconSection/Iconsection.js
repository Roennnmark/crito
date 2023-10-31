import React from 'react'
import logoOne from '../../../assets/images/Logo-2.svg'
import logoTwo from '../../../assets/images/Logo-3.svg'
import logoThree from '../../../assets/images/Logo-4.svg'
import logoFour from '../../../assets/images/Logo-5.svg'
import logoFive from '../../../assets/images/Logo-6.svg'

const Iconsection = () => {
  return (
    <section className="icons">
        <div className="container">
            <img src={logoOne} alt="Paperz" />
            <img src={logoTwo} alt="Dorfus" />
            <img src={logoThree} alt="Martino" />
            <img src={logoFour} alt="Square" />
            <img src={logoFive} alt="Gobona" />
        </div>
    </section>
  )
}

export default Iconsection