import React from 'react';
// Import section components once they are created
import MainVisualSection from '../sections/MainVisualSection';
import ProjectSection from '../sections/ProjectSection';
import WhatBannerSection from '../sections/WhatBannerSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';



const HomePage: React.FC = () => {
  return (
    <>
      <MainVisualSection />
      <ProjectSection />
      <WhatBannerSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;