import React from 'react';
import SearchSection from './Newsparts/SearchSection';
import ArticleSection from './Newsparts/ArticleSection';
import NewsHeadLine from './Newsparts/NewsHeadLine';

const Newsmain = () => {
  return (
    <>
      <NewsHeadLine />
      <ArticleSection />
      <SearchSection />
    </>
  )
}

export default Newsmain