import React from 'react';
import { Link } from 'react-router';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    category: "산업시설/기타",
    imageSrc: "/images/1.jpg",
    imageAlt: "봉평면 재산리 금당마을 류경희 아트갤러리 조감도",
    title: "봉평면 재산리 금당마을 \"류경희 아트갤러리…",
    type: "신축",
    area: "지하1층,지상2층",
    link: "/project/detail/86"
  },
  {
    category: "주상복합/공동주택",
    imageSrc: "/images/2.jpg",
    imageAlt: "화양동 오피스텔, 도시형생활주택, 근린생활시설 조감도",
    title: "2021	화양동 오피스텔,도시형생활주택,근…",
    type: "신축",
    area: "지하2층 지상12층 4,400㎡",
    link: "/project/detail/22"
  },
  {
    category: "일반상업분야/업무시설",
    imageSrc: "/images/3.png",
    imageAlt: "양주시 덕계동 근린생활시설",
    title: "2023 양주시 덕계동 678-3외 3필지",
    type: "근린생활시설, 도시형생활주택(단지형연립주택)",
    area: "4633.95㎡ 지하1층 지상4층",
    link: "/project/detail/22"
  },
  {
    category: "종교시설",
    imageSrc: "/images/4.jpg",
    imageAlt: "와동제일교회",
    title: "2010 와동제일교회",
    type: "대한예수교 장로회",
    area: "지하1층 ,지상5층 1497평㎡",
    link: "/project/detail/22"
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section id="project" aria-labelledby="project-title" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="sec-tit mb-8 text-center md:text-left"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          {/* Decorative span, can be styled with Tailwind or CSS */}
          <span className="block w-10 h-1 bg-blue-600 mb-2 mx-auto md:mx-0"></span>
          <div className="h3-tit">
            <h3 id="project-title" className="text-3xl font-bold text-gray-800">PROJECT</h3>
            <p className="text-gray-600">(주)을지와 500개 이상의 업체가 함께 했습니다.</p>
          </div>
        </div>
        <div className="inner">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                aosData={{ animation: "fade-up" }}
              />
            ))}
          </ul>
        </div>
        <div className="more-btn text-center mt-8">
          <Link
            to="/project/gallery"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            MORE <span className="visually-hidden"> 프로젝트 더보기</span>
            {/* Decorative div/span, can be styled or removed */}
            {/* <div><span></span></div> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;