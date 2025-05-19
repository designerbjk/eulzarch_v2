import React from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout'; // Assuming you have a Layout component
import HomePage from './pages/HomePage';
import Company from './pages/Company';
import Business from './pages/Business';
import Contact from './pages/Contact';

import { ProjectGallery } from './components/ProjectGallery';
import ProjectDetails from './components/Project_Details';
import ProjectMovie from './components/ProjectMovie';

// Placeholder components for other pages
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p>This is a placeholder page for {title}.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="company" element={<Company />} />
        <Route path="business" element={<Business />} />
        {/* Project routes */}
        <Route path="project">
          {/* Gallery list page */}
          <Route path="gallery" element={<ProjectGallery />} />
          {/* Project detail page using slug */}
          <Route path="gallery/:projectSlug" element={<ProjectDetails />} />
          <Route path="movie" element={<ProjectMovie />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        {/* Add other routes here */}
        {/* Catch-all for 404 */}
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Route>
    </Routes>
  );
}

export default App;