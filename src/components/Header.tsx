import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectDropdownOpen, setIsMobileProjectDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileProjectDropdown = () => setIsMobileProjectDropdownOpen(!isMobileProjectDropdownOpen);

  // Add scroll event listener to detect when to make the header sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Basic Tailwind classes are used for demonstration.
  // The original classes like 'headerwrap', 'gnb' would need to be styled via CSS or more Tailwind.
  return (
    <header id="header" className={`bg-white shadow-md w-full ${isSticky ? 'sticky top-0 z-40' : ''}`}>
      <div className="headerwrap container mx-auto flex items-center justify-between p-2">
        <h1 className="logo flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo/logo.svg" alt="을지엔지니어링 종합건축사사무소 로고" className="h-16" />
            <div className="ml-4 pl-4 border-l border-gray-300">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">엔지니어링 종합건축사사무소</span>
                <span className="text-xs text-gray-600">부동산 개발 시행사</span>
              </div>
            </div>
          </Link>
        </h1>
        <nav aria-label="메인 네비게이션" className="hidden md:block">
          <ul className="gnb flex space-x-4">
            <li><Link to="/company" className="hover:text-blue-600">COMPANY</Link></li>
            <li><Link to="/business" className="hover:text-blue-600">BUSINESS</Link></li>
            <li className="relative group">
              <div className="hover:text-blue-600 flex items-center cursor-pointer">
                PROJECT
                <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </div>
              <ul className="depth2 absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <li><Link to="/project/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">건축설계사례</Link></li>
                <li><Link to="/project/movie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">홍보영상</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" className="hover:text-blue-600">CONTACT</Link></li>
            <li><a href="https://blog.naver.com/eulzarch" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">BLOG</a></li>
          </ul>
        </nav>
        <div className="m_wrapper_btn md:hidden">
          <button
            type="button"
            className="m_menu_ico focus:outline-none"
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
          >
            {/* Basic hamburger icon, replace with actual spans or an SVG icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`mgnb_wrap md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg fixed top-0 left-0 w-full h-screen overflow-y-auto z-50`}
        id="mobile-navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="모바일 네비게이션">
          <ul className="mgnb p-4 space-y-2">
            <li><Link to="/company" className="block py-2 hover:text-blue-600" onClick={toggleMobileMenu}>COMPANY</Link></li>
            <li><Link to="/business" className="block py-2 hover:text-blue-600" onClick={toggleMobileMenu}>BUSINESS</Link></li>
            <li>
              <button onClick={toggleMobileProjectDropdown} className="w-full text-left py-2 hover:text-blue-600 flex justify-between items-center">
                PROJECT
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isMobileProjectDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              {isMobileProjectDropdownOpen && (
                <ul className="depth2 pl-4 mt-1 space-y-1">
                  <li><Link to="/project/gallery" className="block py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>건축설계사례</Link></li>
                  <li><Link to="/project/movie" className="block py-1 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>홍보영상</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/contact" className="block py-2 hover:text-blue-600" onClick={toggleMobileMenu}>CONTACT</Link></li>
            <li><a href="https://blog.naver.com/eulzarch" target="_blank" rel="noopener noreferrer" className="block py-2 hover:text-blue-600" onClick={toggleMobileMenu}>BLOG</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;