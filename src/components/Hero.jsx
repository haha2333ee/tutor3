import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="hero-title">专业在线辅导平台</h1>
              <p className="hero-subtitle">为学生提供高质量的课程辅导和作业帮助，让学习更高效，成绩更优秀</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary-custom btn-lg me-3">开始学习</a>
                <a href="#courses" className="btn btn-outline-light btn-lg">了解更多</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image text-center" data-aos="fade-left">
              <img src="/images/1.jpg" alt="在线学习" className="img-fluid rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;