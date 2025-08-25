import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.phone && formData.subject) {
      alert('感谢您的咨询！我们会尽快与您联系。');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      alert('请填写所有必填字段。');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">联系我们</h2>
            <p className="lead">立即开始您的学习之旅</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">姓名</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">邮箱</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">电话</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">咨询科目</label>
                <select 
                  className="form-select" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                >
                  <option value="">请选择科目</option>
                  <option value="math">数学</option>
                  <option value="english">英语</option>
                  <option value="physics">物理</option>
                  <option value="chemistry">化学</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">留言</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="请描述您的学习需求..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary-custom btn-lg">提交咨询</button>
            </form>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="contact-info">
              <h4>联系方式</h4>
              <div className="mb-3">
                <i className="fas fa-phone me-2"></i>
                <strong>电话：</strong> 400-123-4567
              </div>
              <div className="mb-3">
                <i className="fas fa-envelope me-2"></i>
                <strong>邮箱：</strong> info@tutoring-platform.com
              </div>
              <div className="mb-3">
                <i className="fas fa-map-marker-alt me-2"></i>
                <strong>地址：</strong> 北京市朝阳区教育科技园区
              </div>
              <div className="mb-3">
                <i className="fas fa-clock me-2"></i>
                <strong>服务时间：</strong> 周一至周日 9:00-22:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;