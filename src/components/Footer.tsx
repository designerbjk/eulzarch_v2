import React from 'react';
// import { Link } from 'react-router-dom'; // Link might not be needed if no internal nav here

const Footer: React.FC = () => {
  // Basic Tailwind classes are used for demonstration.
  return (
    <footer id="footer" className="bg-gray-800 text-gray-300 py-8">
      <div className="inner container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="logo mb-4 md:mb-0">
            <figure>
              <img src="/img/footer-logo.png" alt="을지엔지니어링 종합건축사사무소 하단 로고" className="h-8" />
            </figure>
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
          <ul className="sns flex space-x-3" aria-label="소셜 미디어 링크">
            <li>
              <a href="https://facebook.com/your-page-url" target="_blank" rel="noopener noreferrer" aria-label="페이스북 바로가기" className="hover:text-white">
                <img src="/img/ico-sns-facebook.png" alt="페이스북 아이콘" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/your-profile-url" target="_blank" rel="noopener noreferrer" aria-label="인스타그램 바로가기" className="hover:text-white">
                <img src="/img/ico-sns-instagram.png" alt="인스타그램 아이콘" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/your-channel-url" target="_blank" rel="noopener noreferrer" aria-label="유튜브 바로가기" className="hover:text-white">
                <img src="/img/ico-sns-youtube.png" alt="유튜브 아이콘" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;