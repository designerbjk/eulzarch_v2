import React from 'react';

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
          <img
            src="/images/Organizational.png"
            alt="조직도"
            className="max-w-full h-auto border rounded shadow-md"
            style={{ maxHeight: '600px' }}
          />
        </div>
      </section>
    </div>
  );
};

export default Company;
