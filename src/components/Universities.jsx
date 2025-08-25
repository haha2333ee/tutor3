import React from 'react';
import hkuLogo from '/images/HKU-logo.jpg';
import hkustLogo from '/images/HKUST-logo.jpg';
import cuhkLogo from '/images/CUHK-logo.jpg';
import nusLogo from '/images/NUS-logo.jpg';
import ntuLogo from '/images/NTU-logo.jpg';
import uoftLogo from '/images/UofT-logo.jpg';
import ubcLogo from '/images/UBC-logo.jpg';
import mcgillLogo from '/images/McGill-logo.jpg';
import nyuLogo from '/images/NYU-logo.jpg';
import usydLogo from '/images/USYD-logo.jpg';
import unswLogo from '/images/UNSW-logo.jpg';
import monashLogo from '/images/MONASH-logo.jpg';

const Universities = () => {
  const universities = [
    { name: '香港大学', logo: hkuLogo },
    { name: '香港科技大学', logo: hkustLogo },
    { name: '香港中文大学', logo: cuhkLogo },
    { name: '新加坡国立大学', logo: nusLogo },
    { name: '南洋理工大学', logo: ntuLogo },
    { name: '多伦多大学', logo: uoftLogo },
    { name: '英属哥伦比亚大学', logo: ubcLogo },
    { name: '麦吉尔大学', logo: mcgillLogo },
    { name: '纽约大学', logo: nyuLogo },
    { name: '悉尼大学', logo: usydLogo },
    { name: '新南威尔士大学', logo: unswLogo },
    { name: '莫纳什大学', logo: monashLogo }
  ];

  return (
    <section id="universities" className="universities-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">合作院校</h2>
            <p className="lead">我们与世界知名大学合作，为留学生提供专业辅导</p>
          </div>
        </div>
        <div className="row">
          {universities.map((university, index) => (
            <div key={index} className="col-md-3 col-6 mb-4" data-aos="zoom-in">
              <div className="text-center">
                <img 
                  src={university.logo} 
                  alt={university.name} 
                  className="university-logo" 
                />
                <p className="mt-2">{university.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;