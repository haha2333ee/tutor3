import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-graduation-cap',
      title: '专业师资',
      description: '经验丰富的专业教师，深谙各学科教学要点，为学生提供最专业的指导'
    },
    {
      icon: 'fas fa-clock',
      title: '灵活时间',
      description: '24/7全天候服务，学生可以根据自己的时间安排灵活选择辅导时间'
    },
    {
      icon: 'fas fa-chart-line',
      title: '成绩提升',
      description: '科学的教学方法，个性化的学习方案，帮助学生快速提升学习成绩'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">为什么选择我们</h2>
            <p className="lead">专业的师资团队，个性化的教学方案</p>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;