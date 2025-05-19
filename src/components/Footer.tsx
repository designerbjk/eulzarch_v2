import React from 'react';
// import { Link } from 'react-router-dom'; // Link might not be needed if no internal nav here

const Footer: React.FC = () => {
  // Basic Tailwind classes are used for demonstration.
  return (
    <footer id="footer" className="bg-gray-800 text-gray-300 py-8">
      <div className="inner container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="logo mb-4 md:mb-0 flex items-center">
            <figure>
              <img src="/logo/logo.svg" alt="을지엔지니어링 종합건축사사무소 하단 로고" className="h-16 filter invert" />
            </figure>
            <div className="ml-4 pl-4 border-l border-gray-500">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-200">엔지니어링 종합건축사사무소</span>
                <span className="text-xs text-gray-400">부동산 개발 시행사</span>
              </div>
            </div>
          </div>
          <div className="address text-sm mb-4 md:mb-0">
            <ul className="mb-2">
              <li>회사명 : 을지엔지니어링 종합건축사사무소</li>
              <li>주소 : 서울시 강남구 삼성동 10-9도안빌딩 2층전관</li>
            </ul>
            <ul className="mb-2">
              <li>전화번호 : <a href="tel:02-511-8194" className="hover:text-white">02-511-8194</a></li>
              <li>팩스번호 : 02-547-8395</li>
            </ul>
            <p>© EULJI ALL RIGHT RESERVED (주)을지엔지니어링 종합건축사사무소</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;