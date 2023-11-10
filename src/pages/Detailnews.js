import React from 'react';
import Header from '../components/PartsForAllPages/Header/Header';
import Footer from '../components/PartsForAllPages/Footer/Footer';
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