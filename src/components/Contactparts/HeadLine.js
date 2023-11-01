import React from 'react'
import HeadLineLines from '../../assets/images/connect-lines.png'

const HeadLine = () => {
  return (
    <section className="lets-connect">
        <div className="lines-connect"><img src={HeadLineLines} alt="lines-for-connect" /></div>
        <div className="container">
            <div className="connect-title">
                <p>Home Contact</p>
                <h1>Let's Connect</h1>
            </div>
        </div>
    </section>
  )
}

export default HeadLine