import React from 'react';
// Import section components once they are created
import MainVisualSection from '../sections/MainVisualSection';
import ProjectSection from '../sections/ProjectSection';
import WhatBannerSection from '../sections/WhatBannerSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';

// AOS (Animate on Scroll) - if you use it, initialize it in App.tsx or main.tsx
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// React.useEffect(() => {
//   AOS.init({
//     duration: 1000, // example duration
//     easing: 'ease-in-sine', // example easing
//     once: true, // whether animation should happen only once - while scrolling down
//   });
// }, []);


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