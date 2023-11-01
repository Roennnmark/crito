import React from 'react';
import Ourservices from './Homeparts/Ourservices/Ourservices';
import Teammembers from './Homeparts/TeamMembers/Teammembers';
import ShowCase from './Homeparts/ShowCase/ShowCase';
import Iconsection from './Homeparts/IconSection/Iconsection';
import Features from './Homeparts/Features/Features';
import AboutCompany from './Homeparts/AboutCompany/AboutCompany';
import ChooseUs from './Homeparts/ChooseUs/ChooseUs';
import ProjectAndCase from './Homeparts/ProjectAndCase/ProjectAndCase';
import ClientComments from './Homeparts/ClientComments/ClientComments';
import ArticleNews from './Homeparts/ArticleNews/ArticleNews';
import SearchBar from './Homeparts/SearchBar/SearchBar';

const Main = () => {
  return (
    <>
      <ShowCase />
      <Iconsection />
      <Features />
      <AboutCompany />
      <Ourservices />
      <ChooseUs />
      <ProjectAndCase />
      <Teammembers />
      <ClientComments />
      <ArticleNews />
      <SearchBar />
    </>
  )
}

export default Main