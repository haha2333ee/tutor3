import React from 'react';

const Universities = () => {
  const universities = [
    { name: '香港大学', logo: '/images/HKU-logo.jpg' },
    { name: '香港科技大学', logo: '/images/HKUST-logo.jpg' },
    { name: '香港中文大学', logo: '/images/CUHK-logo.jpg' },
    { name: '新加坡国立大学', logo: '/images/NUS-logo.jpg' },
    { name: '南洋理工大学', logo: '/images/NTU-logo.jpg' },
    { name: '多伦多大学', logo: '/images/UofT-logo.jpg' },
    { name: '英属哥伦比亚大学', logo: '/images/UBC-logo.jpg' },
    { name: '麦吉尔大学', logo: '/images/McGill-logo.jpg' },
    { name: '纽约大学', logo: '/images/NYU-logo.jpg' },
    { name: '悉尼大学', logo: '/images/USYD-logo.jpg' },
    { name: '新南威尔士大学', logo: '/images/UNSW-logo.jpg' },
    { name: '莫纳什大学', logo: '/images/MONASH-logo.jpg' }
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