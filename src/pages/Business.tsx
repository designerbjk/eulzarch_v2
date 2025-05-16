import React from 'react';

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
          <div className="relative w-full h-[600px]">
            <img
              src="/images/business-img.png"
              alt="Business Architecture"
              className="w-full h-full"
            />
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
