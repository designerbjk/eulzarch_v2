import React, { useState } from 'react';
import { Link } from 'react-router';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('analysis'); // 'analysis', 'design', 'maintenance'

  const tabContents: Record<string, React.ReactNode> = {
    analysis: (
      <>
        <figure className="mb-4">
          <img src="/img/about-card.png" alt="조사분석 관련 아이콘 및 다이어그램" className="mx-auto h-32" />
        </figure>
        <p>FEASIBILITY STUDY</p>
        <p>설비현황분석</p>
        <p>프로그램 개발</p>
        <p>CASE STUDY</p>
      </>
    ),
    design: (
      <>
        <figure className="mb-4">
          <img src="/img/about-card2.png" alt="설계 및 감리 관련 다양한 건축물 유형 아이콘" className="mx-auto h-32" />
        </figure>
        <dl className="mb-1"><dt className="font-semibold">종교시설</dt><dd>서비스시설</dd></dl>
        <dl className="mb-1"><dt className="font-semibold">생산 . 유통 . 판매 . 교통시설</dt><dd>산업시설</dd></dl>
        {/* ... more dl/dt/dd ... */}
      </>
    ),
    maintenance: (
      <>
        <figure className="mb-4">
          <img src="/img/about-card3.png" alt="유지보수 및 리노베이션 관련 아이콘" className="mx-auto h-32" />
        </figure>
        <p>증축 . 개축 . 재축</p>
        <p>용도변경</p>
        <p>개보수(대수선)</p>
        <p>리노베이션</p>
      </>
    ),
  };

  return (
    <section id="about" aria-labelledby="about-title" className="py-12">
      <div className="container mx-auto px-4">
        <div className="sec-tit mb-8 text-center md:text-left" data-aos="fade-right">
          <span className="block w-10 h-1 bg-blue-600 mb-2 mx-auto md:mx-0"></span>
          <div className="h3-tit">
            <h3 id="about-title" className="text-3xl font-bold text-gray-800">ABOUT US</h3>
            <p className="text-gray-600">을지엔지니어링 종합건축사사무소는 최고의실적을 보유하고 있습니다.</p>
          </div>
        </div>

        <article className="flex flex-col lg:flex-row gap-8">
          <figure data-aos="fade-up" className="lg:w-1/2">
            <img src="/img/about-bg.png" alt="현대적이고 세련된 사무실 내부 전경" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </figure>
          <div className="tab lg:w-1/2" data-aos="fade-left">
            <ul className="tab-btn flex border-b mb-6" role="tablist">
              {[
                { id: 'analysis', label: '조사분석' },
                { id: 'design', label: '설계&감리ㆍ부동산' },
                { id: 'maintenance', label: '유지관리' },
              ].map(tab => (
                <li key={tab.id} className={`${activeTab === tab.id ? 'border-blue-600 border-b-2' : ''} -mb-px mr-1`} role="presentation">
                  <button
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`tabpanel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-4 font-semibold hover:text-blue-600 focus:outline-none ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="content-area text-center p-4 bg-gray-50 rounded-lg shadow" data-aos="fade-left" data-aos-delay="200">
              {Object.keys(tabContents).map(tabId => (
                <div
                  key={tabId}
                  id={`tabpanel-${tabId}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tabId}`}
                  className={activeTab === tabId ? 'block' : 'hidden'}
                >
                  {tabContents[tabId]}
                </div>
              ))}
            </div>
            <div className="more-btn text-center mt-6">
              <Link to="/company" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                MORE <span className="visually-hidden"> 회사 소개 더보기</span>
                {/* <div><span></span></div> */}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;