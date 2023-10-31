import React from 'react';
import Ourservices from './Homeparts/Ourservices/Ourservices';
import Teammembers from './Homeparts/TeamMembers/Teammembers';
import ShowCase from './Homeparts/ShowCase/ShowCase';
import Iconsection from './Homeparts/IconSection/Iconsection';
import Features from './Homeparts/Features/Features';
import AboutCompany from './Homeparts/AboutCompany/AboutCompany';
import ChooseUs from './Homeparts/ChooseUs/ChooseUs';
import ProjectAndCase from './Homeparts/ProjectAndCase/ProjectAndCase';

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
    </>
  )
}

export default Main