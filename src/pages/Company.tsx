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

// Helper for Circle Nodes
interface CircleNodeProps {
  title: string;
  subtitle?: string;
  sizeClasses: string;
  bgClasses: string;
  textClasses?: string;
  hasOuterRing?: boolean;
  outerRingColor?: string;
}

const CircleNode: React.FC<CircleNodeProps> = ({ 
  title, subtitle, sizeClasses, bgClasses, textClasses = "text-white", hasOuterRing, outerRingColor = "border-blue-500" 
}) => (
  <div className={`relative flex-shrink-0 ${hasOuterRing ? 'p-1.5 sm:p-2 md:p-2.5' : ''}`}> {/* Padding for outer ring */}
    {hasOuterRing && (
      <div className={`absolute inset-0 border-2 ${outerRingColor} rounded-full opacity-60 z-0`}></div>
    )}
    <div className={`${sizeClasses} ${bgClasses} ${textClasses} rounded-full flex flex-col items-center justify-center relative z-10 p-1 shadow-xl`}>
      <span className="text-sm sm:text-base md:text-lg font-bold">{title}</span>
      {subtitle && <span className="text-xs sm:text-sm md:text-base">{subtitle}</span>}
    </div>
  </div>
);

// Helper for Connector Lines
interface ConnectorLineProps {
  orientation: 'vertical' | 'horizontal';
  length?: string; // e.g., 'h-16', 'w-full'
  thickness?: string; // e.g., 'border-l-2', 'border-t-2'
  color?: string; // e.g., 'border-blue-500'
  dotted?: boolean;
}

const ConnectorLine: React.FC<ConnectorLineProps> = ({ 
  orientation, length, thickness = 'border-2', color = 'border-blue-500', dotted = true 
}) => {
  const baseClasses = `${thickness} ${color} ${dotted ? 'border-dotted' : ''}`;
  if (orientation === 'vertical') {
    return <div className={`w-px ${length || 'h-12'} ${baseClasses.replace(thickness, thickness.replace('-2', '-l-2'))}`}></div>;
  }
  return <div className={`h-px ${length || 'w-16'} ${baseClasses.replace(thickness, thickness.replace('-2', '-t-2'))}`}></div>;
};


// Main Organizational Chart Component - Refactored
const OrganizationalChart = () => {
  const ceoCircleSize = "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40";
  const advisoryCircleSize = "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32";
  const midLevelCircleSize = "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32";

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-4 sm:py-8 px-4 font-['Malgun_Gothic',_sans-serif] text-neutral-200 w-full">

      {/* Top Section: Advisory and CEO */}
      <div className="flex items-center justify-center w-full max-w-2xl lg:max-w-3xl mb-4 sm:mb-6 md:mb-8">
        {/* Advisory Group */}
        <div className="flex flex-col items-center"> {/* Wrapper for potential future elements under advisory */}
           <CircleNode 
            title="관련자문단" 
            sizeClasses={advisoryCircleSize} 
            bgClasses="bg-blue-600 bg-opacity-70"
          />
        </div>

        <ConnectorLine orientation="horizontal" length="w-8 sm:w-12 md:w-16 mx-2 sm:mx-4" />
        
        {/* CEO */}
        <div className="flex flex-col items-center"> {/* Wrapper for CEO and its connector line downwards */}
          <CircleNode 
            title="대표이사" 
            subtitle="(CEO)" 
            sizeClasses={ceoCircleSize} 
            bgClasses="bg-blue-400"
            hasOuterRing
          />
        </div>
      </div>
      
      {/* Connector from CEO area downwards, leading to the T-junction */}
      <div className="flex justify-center w-full"> {/* Centering the vertical line */}
        <div className="flex flex-col items-center" style={{ marginLeft: `calc((${advisoryCircleSize.match(/\d+/)?.[0] || '0'}px / 2) + (${('w-8').match(/\d+/)?.[0] || '0'}px / 2) + 8px)` }}> {/* Approximate offset to align under CEO */}
          <ConnectorLine orientation="vertical" length="h-8 sm:h-10 md:h-12" />
        </div>
      </div>


      {/* Horizontal T-junction line */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"> {/* Control width of T line */}
         <ConnectorLine orientation="horizontal" length="w-full" />
      </div>
      

      {/* Mid-Level Branches: 소장 and 관리본부 */}
      <div className="flex flex-row justify-around w-full max-w-xl lg:max-w-3xl mt-[-1px]"> {/* mt-[-1px] to connect flush */}
        
        {/* 소장 Branch */}
        <div className="flex flex-col items-center px-2 sm:px-3 md:px-4">
          <ConnectorLine orientation="vertical" length="h-6 sm:h-8 md:h-10" />
          <CircleNode 
            title="소장" 
            sizeClasses={midLevelCircleSize} 
            bgClasses="bg-neutral-300"
            textClasses="text-black"
          />
          <ConnectorLine orientation="vertical" length="h-4 sm:h-6 md:h-8" color="border-neutral-500" />
          <div className="space-y-2 sm:space-y-2.5 mt-2 sm:mt-3">
            <DepartmentBox title="설계/감리 사업본부" />
            <DepartmentBox title="건축설계1팀" />
            <DepartmentBox title="건축설계2팀" />
            <DepartmentBox title="인테리어 리모델링팀" />
          </div>
        </div>

        {/* 관리본부 Branch */}
        <div className="flex flex-col items-center px-2 sm:px-3 md:px-4">
          <ConnectorLine orientation="vertical" length="h-6 sm:h-8 md:h-10" />
          <CircleNode 
            title="관리본부" 
            sizeClasses={midLevelCircleSize} 
            bgClasses="bg-neutral-300"
            textClasses="text-black"
          />
          <ConnectorLine orientation="vertical" length="h-4 sm:h-6 md:h-8" color="border-neutral-500" />
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
      {/* CEO Message Section (remains the same) */}
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
      <section className="max-w-5xl mx-auto"> {/* Increased max-width for better chart display */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">COMPANY | 조직도</h2>
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