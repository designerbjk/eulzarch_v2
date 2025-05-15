import React from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
// import CompanyPage from './pages/CompanyPage'; // Example for other pages
// import BusinessPage from './pages/BusinessPage';
// import ProjectGalleryPage from './pages/ProjectGalleryPage';
// ... other page imports

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
        <Route path="company" element={<PlaceholderPage title="Company" />} />
        <Route path="business" element={<PlaceholderPage title="Business" />} />
        <Route path="project/gallery" element={<PlaceholderPage title="Project Gallery" />} />
        <Route path="project/movie" element={<PlaceholderPage title="Project Movie" />} />
        <Route path="customer" element={<PlaceholderPage title="Customer" />} />
        {/* Add other routes here */}
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Route>
    </Routes>
  );
}

export default App;