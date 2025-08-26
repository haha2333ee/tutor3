import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // 创建Google Analytics脚本
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-6LNY5C2CT0';
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6LNY5C2CT0');
    `;
    
    // 将脚本添加到head中
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    
    // 清理函数
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;