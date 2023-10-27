import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Newsmain from '../components/Newsmain';

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <Newsmain />
      <Footer />
  </div>
  )
}

export default News