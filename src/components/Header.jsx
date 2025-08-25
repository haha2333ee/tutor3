import React from 'react';
import logoSticky from '/images/logo-tt.png';
import logoTransparent from '/images/logo-tt-white.png';

const Header = () => {
  return (
    <header className="header-transparent header-absolute-top pt-lg-3 header-sticky">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container position-relative">
          <a className="navbar-brand" href="#home">
            <img src={logoSticky} alt="TogoTutor Logo" className="img-fluid navbar-brand-sticky" />
            <img src={logoTransparent} alt="TogoTutor Logo" className="img-fluid navbar-brand-transparent" style={{ display: 'none' }} />
          </a>
          <div className="d-flex align-items-center order-lg-last">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav-item ms-3 d-none d-xl-flex">
              <a href="#contact" className="btn btn-warning btn-sm">立即咨询</a>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">首页</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">课程辅导</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#homework">作业辅导</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#success">成功案例</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#teachers">教师团队</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#universities">合作院校</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">关于我们</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">联系我们</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;