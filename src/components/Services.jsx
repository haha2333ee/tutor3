import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-book text-primary',
      title: '课程同步辅导',
      description: '与学校课程同步，帮助学生理解和掌握课堂知识，解决学习中的疑难问题'
    },
    {
      icon: 'fas fa-tasks text-success',
      title: '作业辅导',
      description: '帮助学生完成各类作业，提供详细的解题思路和方法，培养独立思考能力'
    },
    {
      icon: 'fas fa-file-alt text-warning',
      title: '论文指导',
      description: '提供论文写作指导，包括选题、结构安排、内容撰写和格式规范等全方位帮助'
    },
    {
      icon: 'fas fa-calendar-check text-info',
      title: '考试冲刺',
      description: '针对重要考试提供专项辅导，帮助学生制定复习计划，掌握考试技巧'
    }
  ];

  return (
    <section id="courses" className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">我们的服务</h2>
            <p className="lead">全方位的学术辅导服务</p>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 mb-4" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className="service-card">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="service-icon">
                      <i className={`${service.icon} fa-3x`}></i>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;