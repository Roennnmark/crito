import React from 'react';
import NewsArticles from './DetailNewsparts/NewsArticles';
import DetailNewsHeadLine from './DetailNewsparts/DetailNewsHeadLine';
import DigitalizationSection from './DetailNewsparts/DigitalizationSection';

const Detailnewsmain = () => {
  return (
    <div>
      <DetailNewsHeadLine />
      <DigitalizationSection />
      <NewsArticles />
    </div>
  )
}

export default Detailnewsmain