import React from 'react';

interface DepartmentBoxProps {
  title: string;
  className?: string;
}

const DepartmentBox = ({ title, className = '' }: DepartmentBoxProps) => (
  <div
    className={`bg-neutral-800 text-neutral-200 py-2.5 px-3.5 rounded-sm border-t-2 border-blue-500 
      w-64 sm:w-72 md:w-80
      text-center text-xs sm:text-sm whitespace-normal leading-tight ${className}`}
  >
    {title.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </React.Fragment>
    ))}
  </div>
);

// Main Organizational Chart Component
const OrganizationalChart = () => {
  const ceoCircleSize = "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40";
  const advisoryCircleSize = "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"; // Smaller than before
  const midLevelCircleSize = "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32";

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10 sm:py-16 px-4 font-['Malgun_Gothic',_sans-serif] text-neutral-200 max-w-full">

      {/* CEO and Advisory Section with better balance */}
      <div className="relative w-full flex justify-center pl-[35%] sm:pl-[30%] pb-[3%] mt-10 sm:mt-16 md:mt-20">
        {/* CEO Node - Centered with its outer ring */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-[-8px] sm:inset-[-10px] md:inset-[-12px] border-2 border-blue-500 rounded-full opacity-60 z-0"></div>
          <div className={`${ceoCircleSize} bg-blue-400 text-white rounded-full flex flex-col items-center justify-center relative z-10 p-1 shadow-xl`}>
            <span className="text-base sm:text-lg md:text-xl font-bold">대표이사</span>
            <span className="text-xs sm:text-sm md:text-base">(CEO)</span>
          </div>
        </div>
        
        {/* Advisory Group Node - positioned to the left and aligned vertically */}
        <div className="flex items-center absolute left-[5%] sm:left-[15%] md:left-[20%] top-1/2 transform -translate-y-1/2">
          <div className={`${advisoryCircleSize} bg-blue-600 bg-opacity-70 text-white rounded-full flex-shrink-0 flex items-center justify-center text-center p-1 shadow-lg`}>
            <span className="text-xs sm:text-sm md:text-base font-semibold">관련자문단</span>
          </div>
          <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-px border-t-2 border-dotted border-blue-500 mx-2"></div>
        </div>
      </div>

      {/* Vertical line from CEO structure downwards - better connected */}
      <div className="w-px h-12 sm:h-16 md:h-20 border-l-2 border-dotted border-blue-500 ml-[35%] sm:ml-[30%]"></div>

      {/* Horizontal line for the main T-junction */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-px border-t-2 border-dotted border-blue-500 ml-[35%] sm:ml-[30%]"></div>

      {/* Mid-Level Nodes: 소장 and 관리본부 */}
      <div className="flex flex-col md:flex-row justify-around w-full max-w-2xl lg:max-w-4xl mt-[-1px] px-2 sm:px-0"> {/* mt-[-1px] to connect flush with the T-junction line */}

        {/* 소장 Branch */}
        <div className="flex flex-col items-center px-2 sm:px-3 md:px-4 pt-0">
          <div className="w-px h-8 sm:h-10 md:h-12 border-l-2 border-dotted border-blue-500"></div> {/* Connector up to horizontal line */}
          <div className={`${midLevelCircleSize} bg-neutral-300 text-black rounded-full flex items-center justify-center text-center p-1 my-2 sm:my-3 shadow-md`}>
            <span className="text-base md:text-lg font-semibold">소장</span>
          </div>
          <div className="w-px h-6 sm:h-8 md:h-10 border-l-2 border-dotted border-neutral-500"></div> {/* Connector down to departments */}
          <div className="space-y-2 sm:space-y-2.5 mt-2 sm:mt-3">
            <DepartmentBox title="설계/감리 사업본부" />
            <DepartmentBox title="건축설계1팀" />
            <DepartmentBox title="건축설계2팀" />
            <DepartmentBox title="인테리어 리모델링팀" />
          </div>
        </div>

        {/* 관리본부 Branch */}
        <div className="flex flex-col items-center px-2 sm:px-3 md:px-4 pt-0">
          <div className="w-px h-8 sm:h-10 md:h-12 border-l-2 border-dotted border-blue-500"></div> {/* Connector up to horizontal line */}
          <div className={`${midLevelCircleSize} bg-neutral-300 text-black rounded-full flex items-center justify-center text-center p-1 my-2 sm:my-3 shadow-md`}>
            <span className="text-base md:text-lg font-semibold">관리본부</span>
          </div>
          <div className="w-px h-6 sm:h-8 md:h-10 border-l-2 border-dotted border-neutral-500"></div> {/* Connector down to departments */}
          {/* Departments under 관리본부 - stacked vertically */}
          <div className="flex flex-col items-center space-y-2 mt-2 sm:mt-3">
            <DepartmentBox title="지구단위 계획팀" />
            <DepartmentBox title="해외사업부" />
            <DepartmentBox title="경영지원팀" />
            <DepartmentBox title="금융지원팀" />
            <DepartmentBox 
              title="사업타당성 조사 및
마케팅지원팀" 
              className="text-xs py-3" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Company: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* CEO Message Section */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold mb-8 text-center">CEO 인사말</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
          <p className="text-xl font-semibold text-center mb-8">
            고객만족과 고객감동을 위하여 정성을 다하겠습니다.
          </p>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">(주) 을지</h2>
            <p className="text-lg">엔지니어링 종합건축사 사무소</p>
            <p className="text-lg">부동산 개발 시행사</p>
          </div>

          <p className="text-lg font-semibold text-center mb-8">
            정직과 신뢰로 함께하겠습니다.
          </p>

          <p className="leading-relaxed">
            부동산 개발 컨설팅 및 건축설계 감리전문회사로서 건축계획, 설계, 기술분야에서 풍부한 경험을 가진
            고급 전문인력과 D.BASE된 첨단 CAD의 과학적인 프로세스를 통하여 최적공간 창조 및 신기술 개발과
            합리적이고 미래지향적인 사고로 건축토탈 시스템을 구축하였습니다.
          </p>

          <p className="leading-relaxed">
            건축주와의 만족스런 만남을 위하여 항상 최선을 다하며, 믿음의 기업정신으로 일 할 것을 약속드립니다.
          </p>

          <div className="text-right mt-8">
            <p>(주) 을지엔지니어링 종합건축사사무소 임직원 일동</p>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">COMPANY | 조직도</h2>
          <p className="text-lg text-gray-700">
            구성원의 성취감과 자부심으로 성장하는 건축전문집단
          </p>
        </div>

        <div className="flex justify-center">
          <OrganizationalChart />
        </div>
      </section>
    </div>
  );
};

export default Company;
