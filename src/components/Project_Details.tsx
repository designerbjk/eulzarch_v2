import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { projects_data } from '../data/Projects_Data';
import type { Project } from '../data/Projects_Data';

// Define the structure for the dynamic image imports
interface ImageModule {
  default: string; // The URL of the image
}

const ProjectDetails: React.FC = () => {
  // Get the projectSlug from the URL parameters
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project data based on the slug
    const foundProject = projects_data.find(p => p.slug === projectSlug);
    setProject(foundProject);

    if (foundProject) {
      // Dynamically import all images from the project's specific folder
      // Using glob with eager: true imports all matching files immediately
      // The path needs to be partially static for glob to work correctly.
      // We glob all images under sub_images/*/* and then filter by the project ID.
      const allSubImages = import.meta.glob<ImageModule>('/public/sub_images/*/*.(png|jpg|jpeg|gif)', { eager: true });

      const projectImages: string[] = [];
      const projectImagesPathPrefix = `/public/sub_images/${foundProject.id}/`;

      for (const path in allSubImages) {
        if (path.startsWith(projectImagesPathPrefix)) {
          projectImages.push(allSubImages[path].default);
        }
      }

      setImages(projectImages);
    }

    setLoading(false);
  }, [projectSlug]); // Re-run effect if projectSlug changes

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((imageUrl, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src={imageUrl}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-auto object-cover"
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