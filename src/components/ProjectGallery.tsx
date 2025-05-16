import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import type { Project, ProjectCategory } from '../data/Projects_Data';
import { projects_data } from '../data/Projects_Data';

const ITEMS_PER_PAGE = 9;

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
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">건축설계사례</h2>
        <p className="text-lg">(주)을지와 500개 이상의 업체가 함께 했습니다.</p>
      </div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setCurrentCategory(category);
              setCurrentPage(0); // Reset to first page when changing category
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
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
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              {project.description && (
                <p className="text-gray-600">{project.description}</p>
              )}
            </div>
          </div>
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
          pageClassName="px-3 py-1 rounded hover:bg-gray-200"
          previousClassName="px-3 py-1 rounded hover:bg-gray-200"
          nextClassName="px-3 py-1 rounded hover:bg-gray-200"
          activeClassName="bg-blue-600 text-white"
          disabledClassName="text-gray-400 cursor-not-allowed"
        />
      )}
    </div>
  );
};
