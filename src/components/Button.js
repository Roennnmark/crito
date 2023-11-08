import React from 'react'

const Button = ({type, url, title}) => {

    const getbButtonClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'dark':
                return 'btn-black'
            default:
                return 'btn-transparent'

        }
    }
  return (
    <a className={getbButtonClassName()} href={url}>{title}<i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button