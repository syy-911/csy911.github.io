import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">关于我</h3>
            <p className="text-gray-300">
              一名充满热情的开发者，致力于创造优秀的用户体验和解决方案。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-300">
              <li>QQ：2051626964</li>
              <li>
                <a 
                  href="tencent://message/?uin=2051626964&Site=&Menu=yes" 
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  <i className="fab fa-qq mr-2"></i>
                  点击添加好友
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">社交媒体</h3>
            <div className="flex space-x-6">
              <a 
                href="https://www.douyin.com/user/self?from_tab_name=main&showTab=post" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                抖音
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 个人作品集. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 