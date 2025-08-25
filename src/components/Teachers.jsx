import React from 'react';

const Teachers = () => {
  const teachers = [
    {
      name: '李老师',
      subject: '数学专业',
      experience: '10年教学经验',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop&crop=face',
      education: '北京大学数学系硕士',
      expertise: '擅长高等数学、线性代数、概率论与数理统计',
      achievements: '辅导过500+学生，95%成绩显著提升',
      philosophy: '注重培养学生的逻辑思维能力和解题技巧'
    },
    {
      name: '王老师',
      subject: '英语专业',
      experience: '8年教学经验',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      education: '北京外国语大学英语语言文学硕士',
      expertise: '专精雅思托福、商务英语、学术写作',
      achievements: '帮助300+学生成功通过语言考试',
      philosophy: '相信语言学习应该在轻松愉快的氛围中进行'
    },
    {
      name: '张老师',
      subject: '物理专业',
      experience: '12年教学经验',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      education: '清华大学物理系博士',
      expertise: '精通力学、电磁学、量子物理等',
      achievements: '发表多篇教学论文，获得优秀教师奖',
      philosophy: '用生动的实验和案例激发学生对物理的兴趣'
    },
    {
      name: '刘老师',
      subject: '化学专业',
      experience: '6年教学经验',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
      education: '中国科学院化学研究所硕士',
      expertise: '有机化学、无机化学、分析化学',
      achievements: '指导学生多次在化学竞赛中获奖',
      philosophy: '注重理论与实践结合，培养学生的实验能力'
    }
  ];

  return (
    <section id="teachers" className="teachers-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold">优秀教师团队</h2>
            <p className="lead">经验丰富，专业负责</p>
          </div>
        </div>
        <div className="row">
          {teachers.map((teacher, index) => (
            <div key={index} className="col-md-3 mb-4" data-aos="zoom-in">
              <div className="card h-100 shadow-sm teacher-card">
                <div className="card-body text-center">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="rounded-circle mb-3" 
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
                  />
                  <h5 className="card-title">{teacher.name}</h5>
                  <p className="text-muted mb-2">{teacher.subject}</p>
                  <p className="badge bg-primary mb-3">{teacher.experience}</p>
                  
                  <div className="teacher-details text-start">
                    <div className="mb-2">
                      <small className="text-muted d-block">教育背景</small>
                      <small className="fw-bold">{teacher.education}</small>
                    </div>
                    <div className="mb-2">
                      <small className="text-muted d-block">专业擅长</small>
                      <small>{teacher.expertise}</small>
                    </div>
                    <div className="mb-2">
                      <small className="text-muted d-block">教学成果</small>
                      <small>{teacher.achievements}</small>
                    </div>
                    <div>
                      <small className="text-muted d-block">教学理念</small>
                      <small className="fst-italic">{teacher.philosophy}</small>
                    </div>
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

export default Teachers;