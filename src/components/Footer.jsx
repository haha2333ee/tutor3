import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>关于我们</h5>
            <p>专业的在线辅导平台，为学生提供高质量的学术辅导服务，帮助学生实现学习目标。</p>
          </div>
          <div className="col-md-4">
            <h5>快速链接</h5>
            <ul className="list-unstyled">
              <li><a href="#home">首页</a></li>
              <li><a href="#courses">课程辅导</a></li>
              <li><a href="#success">成功案例</a></li>
              <li><a href="#teachers">教师团队</a></li>
              <li><a href="#universities">合作院校</a></li>
              <li><a href="#contact">联系我们</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>关注我们</h5>
            <div className="social-links">
              <a href="#" className="me-3"><i className="fab fa-weixin fa-2x"></i></a>
              <a href="#" className="me-3"><i className="fab fa-weibo fa-2x"></i></a>
              <a href="#" className="me-3"><i className="fab fa-qq fa-2x"></i></a>
              <a href="#"><i className="fab fa-tiktok fa-2x"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2024 教学演示在线辅导平台. 保留所有权利.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;