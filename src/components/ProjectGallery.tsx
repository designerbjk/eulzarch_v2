import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router'; // Changed to react-router-dom
import type { Project, ProjectCategory } from '../data/Projects_Data';
import { projects_data } from '../data/Projects_Data';


const ITEMS_PER_PAGE = 16;

interface ProjectGalleryProps {
  projects?: Project[];
}

export const ProjectGallery = ({ projects = projects_data }: ProjectGalleryProps) => {
  const [currentCategory, setCurrentCategory] = useState<ProjectCategory>('전체');
  const [currentPage, setCurrentPage] = useState(0);

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project =>
    currentCategory === '전체' ? true : project.category === currentCategory
  );

  // Calculate pagination
  const pageCount = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(offset, offset + ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const categories: ProjectCategory[] = [
    '전체',
    '산업시설/기타',
    '주상복합/공동주택',
    '일반상업분야/업무시설',
    '종교시설',
    '인테리어'
  ];

  return (
    <div className="container mx-auto px-4 py-8"> {/* Added padding */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">건축설계사례</h2>
        <p className="text-lg text-gray-700">(주)을지와 500개 이상의 업체가 함께 했습니다.</p>
      </div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8"> {/* Centered buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setCurrentCategory(category);
              setCurrentPage(0); // Reset to first page when changing category
            }}
            className={`px-4 py-2 rounded-lg transition-colors text-sm md:text-base ${ /* Adjusted button size */
              currentCategory === category
                ? 'bg-blue-600 text-white shadow-md' // Added shadow for active
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {/* Use Link component to wrap each project item */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"> {/* Adjusted grid columns */}
        {currentProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/gallery/${project.slug}`} // Link to the detail page using the slug
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow" // Added hover effect
          >
            {/* The content inside the Link remains the same */}
            {project.imageUrl && (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3> 
              {project.description && (
                <p className="text-gray-600 text-sm">{project.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="flex justify-center gap-2 items-center my-8"
          pageClassName="rounded text-gray-700 text-lg min-w-[40px] text-center overflow-hidden" // Container for page buttons
          pageLinkClassName="block px-4 py-2 w-full h-full hover:bg-gray-200" // This makes the entire area clickable
          previousClassName="rounded text-gray-700 text-lg overflow-hidden" // Container for previous button
          previousLinkClassName="block px-4 py-2 hover:bg-gray-200" // This makes the entire area clickable
          nextClassName="rounded text-gray-700 text-lg overflow-hidden" // Container for next button
          nextLinkClassName="block px-4 py-2 hover:bg-gray-200" // This makes the entire area clickable
          activeClassName="bg-blue-600 text-white font-semibold" // Style for active page
          activeLinkClassName="hover:bg-blue-600" // Prevent hover color change on active button
          disabledClassName="text-gray-400 cursor-not-allowed"
          breakClassName="px-3 py-1" // Style for break label (...)
        />
      )}
    </div>
  );
};