import React from 'react';
import Header from '../components/Header/Header';
import Homemain from '../components/Homemain';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Homemain />
      <Footer />
    </div>
  )
}

export default Home