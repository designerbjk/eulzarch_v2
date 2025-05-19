import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainVisualSection: React.FC = () => {
  // Data for slides - in a real app, this might come from an API or props
  const slides = [
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      altText: "현대적인 고층 건축물 외관",
      title: "혁신적인 아이디어와 전문성으로 <br>꿈을 현실로 이끄는 건축의 선두주자입니다",
      description: "풍부한 경험과 열정으로 건축의 미래를 선도합니다.<br>혁신적인 디자인과 높은 품질의 건축물을 제공하여<br>도시의 아름다움과 기능성을 높이는 가치를 창출합니다.",
      textClass: "mvtxt2"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
      altText: "현대적인 건축물 외관",
      title: "건축의 가치를 높여드립니다",
      description: "부동산 개발 컨설팅 및 건축설계 감리전문회사로서 건축계획, 설계, 기술분야에서<br>풍부한 경험을 보유하고 있습니다. 건축주와의 만족스런 만남을 위하여 항상 최선을 다하며,<br>믿음의 기업정신으로 일 할 것을 약속드립니다.",
      textClass: "mvtxt"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1448630360428-65456885c650",
      altText: "현대적인 건축물 디자인",
      title: "최고의 건축 솔루션을 제공합니다",
      description: "최신 기술과 트렌드를 접목한 혁신적인 건축 설계로<br>고객의 비전을 실현합니다. 지속 가능한 미래를 위한<br>스마트한 건축 솔루션을 제공합니다.",
      textClass: "mvtxt"
    }
  ];

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section 
      id="main-visual" 
      aria-label="메인 비주얼 슬라이더" 
      className="relative h-[400px] sm:h-[600px] md:h-[800px] overflow-hidden"
    >
      <Slider {...settings} className="mvsw h-full">
        {slides.map((slide, index) => (
          <div key={index} className="h-full relative">
            <a href="#!" className="block w-full h-full relative">
              <figure className="w-full h-full">
                <img
                  src={slide.imgSrc}
                  alt={slide.altText}
                  className="w-full h-full max-w-full max-h-full object-cover"
                />
              </figure>
              <div
                className={`mvtxt absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8 bg-black bg-opacity-50 ${slide.textClass}`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4" dangerouslySetInnerHTML={{ __html: slide.title }} />
                <p className="text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-16" dangerouslySetInnerHTML={{ __html: slide.description }} />
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MainVisualSection;