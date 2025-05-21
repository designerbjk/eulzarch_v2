import React, { useState } from 'react';
import { Link } from 'react-router'; // Changed to react-router-dom

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('analysis'); // 'analysis', 'design', 'maintenance'

  const tabContents: Record<string, React.ReactNode> = {
    analysis: (
      <div className="flex flex-col space-y-4">
        <div
          className="w-full h-48 rounded-xl bg-center bg-cover shadow-lg relative overflow-hidden transform transition-transform hover:scale-[1.02]"
          style={{ backgroundImage: 'url(/about/photo1.avif)' }}
          aria-label="조사분석 도면 및 설계 분석 예시"
        >
          <span className="sr-only">조사분석 도면 및 설계 분석 예시</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h4 className="text-xl font-bold">조사분석</h4>
            <p className="text-sm opacity-90">Architectural Analysis</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold text-blue-600">FEASIBILITY STUDY</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold">설비현황분석</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold">프로그램 개발</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold">CASE STUDY</p>
          </div>
        </div>
      </div>
    ),
    design: (
      <div className="flex flex-col space-y-4">
        <div
          className="w-full h-48 rounded-xl bg-center bg-cover shadow-lg relative overflow-hidden transform transition-transform hover:scale-[1.02]"
          style={{ backgroundImage: 'url(/about/photo2.avif)' }}
          aria-label="설계 및 감리 현대 건축물"
        >
          <span className="sr-only">설계 및 감리 현대 건축물</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h4 className="text-xl font-bold">설계 & 감리</h4>
            <p className="text-sm opacity-90">Design & Supervision</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <dl>
              <dt className="font-semibold text-blue-600">종교시설</dt>
              <dd className="text-gray-600">서비스시설</dd>
            </dl>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <dl>
              <dt className="font-semibold text-blue-600">생산 · 유통 · 판매 · 교통시설</dt>
              <dd className="text-gray-600">산업시설</dd>
            </dl>
          </div>
        </div>
      </div>
    ),
    maintenance: (
      <div className="flex flex-col space-y-4">
        <div
          className="w-full h-48 rounded-xl bg-center bg-cover shadow-lg relative overflow-hidden transform transition-transform hover:scale-[1.02]"
          style={{ backgroundImage: 'url(/about/photo3.avif)' }}
          aria-label="유지보수 및 리노베이션 현장"
        >
          <span className="sr-only">유지보수 및 리노베이션 현장</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h4 className="text-xl font-bold">유지관리</h4>
            <p className="text-sm opacity-90">Maintenance & Renovation</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold">증축 · 개축 · 재축</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold">용도변경</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold">개보수(대수선)</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold">리노베이션</p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section id="about" aria-labelledby="about-title" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 z-10"></div>
          <img 
            src="/about/about.avif" 
            alt="Modern architectural building exterior" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="relative z-20 py-16 px-6 md:px-12 text-white max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/30 text-sm font-medium mb-4">EULZI Engineering</span>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-4">ABOUT US</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">을지엔지니어링 종합건축사사무소는 최고의실적을 보유하고 있습니다.</p>
            <Link 
              to="/company" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              자세히 보기 <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div data-aos="fade-right">
              <span className="block w-12 h-1 bg-blue-600 mb-3"></span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Services</h3>
            </div>
            <p className="text-gray-600 max-w-xl mt-2 md:mt-0" data-aos="fade-left">다양한 분야에서 전문적인 서비스를 제공합니다</p>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up">
            <div className="flex border-b">
              {[
                { id: 'analysis', label: '조사분석', icon: '🔍' },
                { id: 'design', label: '설계&감리ㆍ부동산', icon: '✏️' },
                { id: 'maintenance', label: '유지관리', icon: '🔧' },
              ].map(tab => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-4 text-center font-medium transition-colors focus:outline-none ${activeTab === tab.id 
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' 
                    : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'}`}
                >
                  <span className="hidden md:inline mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;