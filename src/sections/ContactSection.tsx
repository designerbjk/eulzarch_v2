import React, { useState } from 'react';

interface ContactInfoItemProps {
  dt: string;
  dd: React.ReactNode;
  aosDelay?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ dt, dd, aosDelay }) => (
  <li
    className="mb-4 p-4 bg-white shadow rounded"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="1000"
    data-aos-delay={aosDelay || "0"}
    data-aos-easing="ease-in-sine"
  >
    <dl>
      <dt className="font-bold text-blue-600 mb-1">{dt}</dt>
      <dd className="text-gray-700">{dd}</dd>
    </dl>
  </li>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    wr_name: '',
    wr_email: '',
    wr_1: '', // TEL
    wr_content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    // e.g., send data to an API
    console.log('Form data submitted:', formData);
    // Potentially reset form: setFormData({ wr_name: '', wr_email: '', wr_1: '', wr_content: '' });
    alert('문의가 접수되었습니다.'); // Placeholder
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="sec-tit mb-8 text-center md:text-left" data-aos="fade-right">
          <span className="block w-10 h-1 bg-blue-600 mb-2 mx-auto md:mx-0"></span>
          <div className="h3-tit">
            <h3 id="contact-title" className="text-3xl font-bold text-gray-800">CONTACT</h3>
            <p className="text-gray-600">일반 문의는 이메일을 통해 연락해주십시오.</p>
          </div>
        </div>

        <div className="inner">
          <ul className="company-info grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ContactInfoItem dt="ADDRESS" dd="서울시 강남구 삼성동 10-9 도안빌딩 2층전관" />
            <ContactInfoItem dt="EMAIL" dd={<a href="mailto:info@eulz.co.kr" className="hover:text-blue-500">info@eulz.co.kr</a>} aosDelay="150" />
            <ContactInfoItem dt="TEL" dd={<a href="tel:02-511-8194" className="hover:text-blue-500">02-511-8194</a>} aosDelay="300" />
          </ul>

          <form onSubmit={handleSubmit} id="fonlineform" name="fonlineform" className="map-wrap flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-lg shadow-lg">
            <input type="hidden" name="bo_table" value="online" /> {/* If needed for backend */}
            <div className="left lg:w-1/2 space-y-4" data-aos="fade-right">
              <div>
                <label htmlFor="wr_name" className="block text-sm font-medium text-gray-700 mb-1">NAME</label>
                <input type="text" id="wr_name" name="wr_name" value={formData.wr_name} onChange={handleChange} required autoComplete="name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="wr_email" className="block text-sm font-medium text-gray-700 mb-1">E-MAIL</label>
                <input type="email" id="wr_email" name="wr_email" value={formData.wr_email} onChange={handleChange} required autoComplete="email" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="wr_1" className="block text-sm font-medium text-gray-700 mb-1">TEL</label>
                <input type="tel" id="wr_1" name="wr_1" value={formData.wr_1} onChange={handleChange} required autoComplete="tel" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="wr_content" className="block text-sm font-medium text-gray-700 mb-1">MESSAGE</label>
                <textarea name="wr_content" id="wr_content" value={formData.wr_content} onChange={handleChange} required rows={4} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
            </div>

            <div className="right lg:w-1/2" data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.59267428524214!2d127.0434279403134!3d37.51401705998875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca40b3cbdc56b%3A0x54d51d419a46da86!2z7J2E7KeA7JeU7KeA64uI7Ja066eB7KKF7ZWp6rG07LaV7IKs7IKs66y07IaM!5e0!3m2!1sko!2skr!4v1685518521475!5m2!1sko!2skr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="을지엔지니어링 종합건축사사무소 위치 지도"
                className="w-full h-64 lg:h-full border-0 rounded-md"
              ></iframe>
            </div>
            <div className="submit-btn lg:col-span-2 text-center mt-6 lg:w-full">
              <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;