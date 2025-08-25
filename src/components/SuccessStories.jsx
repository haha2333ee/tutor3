import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      icon: 'fas fa-trophy text-warning',
      title: '成绩提升显著',
      description: '85%的学生在辅导后成绩提升20分以上',
      progress: 85,
      progressClass: 'bg-success'
    },
    {
      icon: 'fas fa-users text-primary',
      title: '满意度高',
      description: '95%的学生对我们的服务表示满意',
      progress: 95,
      progressClass: 'bg-primary'
    },
    {
      icon: 'fas fa-clock text-info',
      title: '效率提升',
      description: '平均学习效率提升40%',
      progress: 90,
      progressClass: 'bg-info'
    }
  ];

  return (
    <section id="success" className="success-stories-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">成功案例</h2>
            <p className="lead">帮助学生实现学业目标的成功故事</p>
          </div>
        </div>
        <div className="row">
          {stories.map((story, index) => (
            <div key={index} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className={`${story.icon} fa-3x`}></i>
                  </div>
                  <h5>{story.title}</h5>
                  <p className="text-muted">{story.description}</p>
                  <div className="progress mb-3">
                    <div 
                      className={`progress-bar ${story.progressClass}`} 
                      style={{ width: `${story.progress}%` }}
                    ></div>
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

export default SuccessStories;