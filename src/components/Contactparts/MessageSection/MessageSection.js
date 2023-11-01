import React from 'react'

const MessageSection = () => {
  return (
    <section className="message-section">
        <div className="container">
            <div className="head-text">
                <h2>Leave us a message</h2>
                <h2>for any information.</h2>
            </div>
            <div className="user-input">
                <form action="#">
                    <input method="post" type="text" name="name" placeholder="Name*" />
                    <input method="post" type="email" name="email" placeholder="Email*" />
                    <textarea method="post" name="message" placeholder="Your message*" />
                </form>
            </div>
            <div className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></div>
        </div>
    </section>
  )
}

export default MessageSection