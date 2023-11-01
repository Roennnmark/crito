import React from 'react'
import SearchBarLines from '../../../assets/images/lines.png'

const SearchBar = () => {
  return (
    <section className="search-bar">
        <img className="background-lines-right" src={SearchBarLines} alt="background-lines" />
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <button className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default SearchBar