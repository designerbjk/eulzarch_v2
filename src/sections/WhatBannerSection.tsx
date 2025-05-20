import React from 'react';
import { Download } from 'lucide-react';

const WhatBannerSection: React.FC = () => {
  return (
    <section
      id="what-banner"
      aria-labelledby="what-banner-title"
      className="relative py-16 bg-blue-700 text-white" // Example styling
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="banner-txt">
          <h5 id="what-banner-title" className="text-3xl font-bold mb-4">WHAT WE ARE?</h5>
          <p className="mb-6 text-lg">
            <span className="block text-xl font-semibold mb-2">"고객님의 사업발전에 동반자가 되겠습니다"</span>
            부동산 개발 컨설팅 및 건축설계 감리 전문회사로서<br />
            건축계획, 설계, 기술분야에서 풍부한 경험을 가진 고급전문인력과<br />
            D.BASE된 첨단 CAD의 과학적인 프로세스를 통하여<span className="md:inline hidden"> </span><span className="block md:hidden"></span>건축 토탈시스템을 구축하였습니다.
          </p>
          <a
            href="https://drive.google.com/file/d/15MYB9Kd-YcxAhp3C2rXS3QIVtjRcSjvN/view?usp=sharing"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            회사소개 다운로드
            <Download className="w-5 h-5 ml-2" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatBannerSection;