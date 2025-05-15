import React from 'react';
import { Link } from 'react-router';

interface ProjectCardProps {
  category: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  type: string;
  area: string;
  link: string;
  aosData?: {
    animation: string;
    offset?: string;
    duration?: string;
    easing?: string;
    delay?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category, imageSrc, imageAlt, title, type, area, link, aosData
}) => {
  const aosAttributes = aosData ? {
    'data-aos': aosData.animation,
    'data-aos-offset': aosData.offset || "300",
    'data-aos-duration': aosData.duration || "1000",
    'data-aos-easing': aosData.easing || "ease-in-sine",
    ...(aosData.delay && {'data-aos-delay': aosData.delay})
  } : {};

  return (
    <li {...aosAttributes} className="bg-white shadow-lg rounded-lg overflow-hidden">
      <dl>
        <dt className="bg-gray-100 p-3 font-semibold text-gray-700">{category}</dt>
        <dd>
          <figure>
            <img src={imageSrc} alt={imageAlt} className="w-full h-48 object-cover" />
          </figure>
          <div className="proj-txt p-4">
            <div className="content mb-3">
              <h5 className="text-lg font-bold mb-1">{title}</h5>
              <p className="text-sm text-gray-600">{type}</p>
              <p className="text-sm text-gray-600"><strong>면적:</strong> {area}</p>
            </div>
            <div className="more">
              <Link to={link} className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                READ MORE <span className="visually-hidden"> about {title}</span>
              </Link>
            </div>
          </div>
        </dd>
      </dl>
    </li>
  );
};

export default ProjectCard;