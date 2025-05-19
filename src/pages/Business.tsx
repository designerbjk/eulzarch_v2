import React from 'react';

const chartBoxData = [
  {
    id: 'planning',
    title: '기획설계',
    items: [
      'FEASIBILITY STUDY',
      '설비현황분석',
      '프로그램 개발',
      'CASE STUDY',
    ],
    gridClasses: 'md:col-start-1 md:row-start-1',
    customAlignment: '',
  },
  {
    id: 'designManagement',
    title: '설계&감리 / 부동산 개발',
    items: [
      '종교시설',
      '생산, 유통, 판매, 교등시설',
      '문화 / 집회, 체육시설',
      '의료, 복지시설',
      '주거시설',
      '서비스시설',
      '산업시설',
      '업무시설',
      '영, 유아시설',
      '근생',
    ],
    gridClasses: 'md:col-start-2 md:row-start-1',
    customAlignment: '',
  },
  {
    id: 'masterPlan',
    title: 'MASTER PLAN',
    items: ['공원녹지 / 교통 /', '지구단위 계획 / 재개발, 재건축'],
    gridClasses: 'md:col-start-3 md:row-start-1',
    customAlignment: '',
  },
  {
    id: 'leisurePlan',
    title: '여가이용 계획',
    items: [
      '위락시설단지 (AMUSEMENT)',
      'THEME PARK',
      'EVENT',
      '콘도, 호텔, 별장, 펜션',
      '실버하우스등 휴양시설',
    ],
    gridClasses: 'md:col-span-3 lg:col-span-1 lg:col-start-1 md:row-start-3',
    customAlignment: 'lg:mr-auto lg:max-w-xs xl:max-w-sm', // Adjusted for better spacing in 3-col layout
  },
  {
    id: 'maintenance',
    title: '유지관리',
    items: [
      '증축 / 개축 / 계속 / 용도변경 /',
      '개보수(대수선) / 리노베이션',
    ],
    gridClasses: 'md:col-span-3 lg:col-span-1 lg:col-start-3 md:row-start-3',
    customAlignment: 'lg:ml-auto lg:max-w-xs xl:max-w-sm', // Adjusted for better spacing
  },
];

const MainBox = () => (
  <div
    id="main-box"
    className="relative md:col-span-3 md:row-start-2 bg-blue-100 text-blue-900 p-4 rounded-lg text-center shadow-lg w-full max-w-md mx-auto my-4 md:my-0"
  >
    <p className="text-lg font-bold">
      (주)을지 엔지니어링 종합건축사사무소
    </p>
    <p className="text-sm">부동산 개발 시행사</p>

    {/* No connector lines */}
  </div>
);

interface ChartBoxProps {
  title: string;
  items: string[];
  gridClasses: string;
  customAlignment: string;
}

const ChartBox: React.FC<ChartBoxProps> = ({ title, items, gridClasses, customAlignment }) => (
  <div
    className={`relative bg-blue-700 border border-blue-600 rounded-2xl p-5 shadow-xl flex flex-col min-h-[180px] ${gridClasses} ${customAlignment}`}
  >
    <h3 className="text-white text-xl font-semibold mb-3 pb-2 border-b border-blue-500">
      {title}
    </h3>
    <ul className="list-none p-0 m-0 space-y-1.5 flex-grow">
      {items.map((item: string, index: number) => (
        <li key={index} className="text-blue-100 text-sm leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
    {/* No connector lines */}
  </div>
);

const OrganizationalChart = () => {
  return (
    <div className="bg-white text-blue-900 min-h-screen p-4 md:p-8 flex justify-center items-center">
      <div className="relative w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto_auto] gap-x-8 gap-y-16 md:gap-y-24 items-stretch">
          {/* Render Top Row */}
          {chartBoxData.filter(box => box.gridClasses.includes('md:row-start-1')).map(box => (
            <ChartBox key={box.id} {...box} />
          ))}

          {/* Main Box - positioned by its own grid classes correctly */}
          <MainBox />
          
          {/* Render Bottom Row - Special handling for layout */}
          <div className="md:col-span-3 md:row-start-3 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
             {chartBoxData.filter(box => box.id === 'leisurePlan').map(box => (
                <div key={box.id} className="lg:col-start-1 lg:pr-4"> {/* Container for left bottom box */}
                    <ChartBox {...box} gridClasses="" /> {/* Remove gridClasses to avoid conflict, use container for positioning */}
                </div>
             ))}
             {chartBoxData.filter(box => box.id === 'maintenance').map(box => (
                <div key={box.id} className="lg:col-start-2 lg:pl-4"> {/* Container for right bottom box */}
                    <ChartBox {...box} gridClasses="" /> {/* Remove gridClasses to avoid conflict */}
                </div>
             ))}
          </div>


          {/* No connector lines */}
        </div>
      </div>
    </div>
  );
};

const Business: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-8">BUSINESS | 업무내용</h1>
            <p className="text-2xl leading-relaxed text-gray-700">
              전문성을 바탕으로 사회와 인류에 기여하는 글로벌 건축설계사
            </p>
          </div>
          <div className="relative w-full">
            <OrganizationalChart />
          </div>
        </div>
        {/* 추가 섹션 */}
        <div className="mt-16 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">BUSINESS | 업무수행과정</h2>
          <p className="text-xl leading-relaxed text-gray-700 mb-12">
            기술과 디자인의 가치가 집약된 미래지향적 건축과정
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-300">01</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">기획설계</h3>
                  <p className="text-gray-600">Planning and design</p>
                </div>
              </div>
              <ul className="text-left space-y-2">
                <li>• 고객요구사항 검토</li>
                <li>• 부지조사 및 분석평가</li>
                <li>• 건축법규 검토</li>
                <li>• 규모산정</li>
                <li>• 사업수지분석, 검토</li>
                <li>• 용역계약</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-300">02</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">계획설계</h3>
                  <p className="text-gray-600">Planned design</p>
                </div>
              </div>
              <ul className="text-left space-y-2">
                <li>• 세부일정 작성</li>
                <li>• 건축관련 지침작성</li>
                <li>• 부지활용 계획</li>
                <li>• 설계기초안 검토</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-300">03</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">기본설계</h3>
                  <p className="text-gray-600">A basic design</p>
                </div>
              </div>
              <ul className="text-left space-y-2">
                <li>• 주요디자인 결정</li>
                <li>• 주요 시스템 결정</li>
                <li>• 주요자재 선정</li>
                <li>• CAD모델링</li>
                <li>• 견적서 검토</li>
                <li>• 도시계획, 건축, 문화재등</li>
                <li>• 관련 심의신청</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-300">04</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">실시설계</h3>
                  <p className="text-gray-600">Implementation design</p>
                </div>
              </div>
              <ul className="text-left space-y-2">
                <li>• 공사용 도면작성</li>
                <li>• 시방서 작성</li>
                <li>• 내역서 작성(물량, 단가)</li>
                <li>• 공사비 산출</li>
                <li>• 건축허가신청</li>
                <li>• 착공신고</li>
              </ul>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-300">05</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">공사감리</h3>
                  <p className="text-gray-600">Construction supervision</p>
                </div>
              </div>
              <ul className="text-left space-y-2">
                <li>• 공정관리</li>
                <li>• 법정감리</li>
                <li>• 상주감리</li>
                <li>• 설계변경 검토/승인</li>
                <li>• 기성검토</li>
                <li>• 사용검사</li>
              </ul>
            </div>

            {/* Step 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-bold text-gray-300">06</div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">유지관리</h3>
                  <p className="text-gray-600">Maintenance</p>
                </div>
              </div>
              <ul className="text-left space-y-2">
                <li>• 시설운영계획</li>
                <li>• 입주계획</li>
                <li>• 유지관리, 계획</li>
                <li>• 개보수, 증축 및</li>
                <li>• 용도변경 상담</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
