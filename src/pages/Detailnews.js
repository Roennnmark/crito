import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Detailnewsmains from '../components/Detailnewsmain';

const Detailnews = () => {
  return (
    <div className="wrapper">
      <Header />
      <Detailnewsmains />
      <Footer />
  </div>
  )
}

export default Detailnews