import React from 'react';
import ContactMap from './Contactparts/ContactMap';
import InfoSection from './Contactparts/InfoSection';
import HeadLine from './Contactparts/HeadLine';
import MessageSection from './Contactparts/MessageSection/MessageSection';

const Contactsmain = () => {
  return (
    <>
      <HeadLine />
      <InfoSection />
      <MessageSection />
      <ContactMap />
    </>
  )
}

export default Contactsmain