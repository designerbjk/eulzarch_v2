import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { projects_data } from '../data/Projects_Data';
import type { Project } from '../data/Projects_Data';


interface ImageModule {
  default: string;
}

const ProjectDetails: React.FC = () => {

  const { projectSlug } = useParams<{ projectSlug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const foundProject = projects_data.find(p => p.slug === projectSlug);
    setProject(foundProject);

    if (foundProject) {
      // Dynamic import with a clear pattern for Vite to understand
      // This approach works better for assets in the src directory
      const loadImages = async () => {
        try {
          // Use import.meta.glob with eager: false for dynamic imports
          const imageModules = import.meta.glob<ImageModule>('/src/sub_images/*/*.(png|jpg|jpeg|gif)');
          const projectPrefix = `/src/sub_images/${foundProject.id}/`;
          
          const loadedImages: string[] = [];
          
          // Load each matching image asynchronously
          for (const path in imageModules) {
            if (path.startsWith(projectPrefix)) {
              console.log('Loading image:', path);
              try {
                const module = await imageModules[path]();
                console.log('Loaded image URL:', module.default);
                loadedImages.push(module.default);
              } catch (err) {
                console.error('Error loading image', path, err);
              }
            }
          }
          
          setImages(loadedImages);
        } catch (error) {
          console.error('Error loading images:', error);
        } finally {
          setLoading(false);
        }
      };
      
      loadImages();
    } else {
      setLoading(false);
    }
  }, [projectSlug]);

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <Link to="/project/gallery" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-2"><strong>Category:</strong> {project.category}</p>
      {project.description && (
        <p className="text-gray-600 mb-4"><strong>Details:</strong> {project.description}</p>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Project Images</h2>
        {images.length > 0 ? (
          // Updated container for a masonry-like layout using CSS Columns
          <div className="columns-1 md:columns-2 lg:columns-3 gap-x-6">
            {images.map((imageUrl, index) => (
              // Added break-inside-avoid-column to prevent items from splitting across columns
              // Added mb-6 for vertical spacing between items in a column
              <div key={index} className="break-inside-avoid-column mb-6 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src={imageUrl}
                  alt={`${project.title} image ${index + 1}`}
                  // Added `block` display to the image for better layout control
                  className="w-full h-auto object-cover block"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No specific images found for this project.</p>
        )}
      </div>

      <div className="mt-8">
        <Link to="/project/gallery" className="text-blue-600 hover:underline">
          ← Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;