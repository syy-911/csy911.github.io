import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import ChatInterface from '../components/ChatInterface';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* 背景图片 */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/anime-bg.jpg')`,
          filter: 'brightness(0.8)',
        }}
      />
      
      {/* 内容层 */}
      <div className="relative z-10">
        {/* 顶部导航 */}
        <nav className="bg-black/50 backdrop-blur-sm shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">个人作品集</h1>
            <div className="space-x-6">
              <a href="#portfolio" className="text-gray-200 hover:text-white transition-colors">作品集</a>
              <a href="#skills" className="text-gray-200 hover:text-white transition-colors">技能</a>
              <a href="#chat" className="text-gray-200 hover:text-white transition-colors">对话</a>
              <a href="#contact" className="text-gray-200 hover:text-white transition-colors">联系我</a>
            </div>
          </div>
        </nav>

        {/* 主要内容区域 */}
        <main className="container mx-auto px-4 py-8">
          {/* 个人简介 */}
          <section className="mb-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">欢迎来到我的世界</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              我是一名全栈开发者，热爱创造和分享。这里展示了我的作品集和技能。
            </p>
          </section>

          {/* 作品展示轮播 */}
          <section id="portfolio" className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">作品展示</h3>
            <ImageCarousel />
          </section>

          {/* 技能展示 */}
          <section id="skills" className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">专业技能</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-3">前端开发</h4>
                <ul className="space-y-2">
                  <li>React / Vue</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-3">后端开发</h4>
                <ul className="space-y-2">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>数据库设计</li>
                </ul>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-3">其他技能</h4>
                <ul className="space-y-2">
                  <li>UI/UX 设计</li>
                  <li>项目管理</li>
                  <li>团队协作</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI 对话界面 */}
          <section id="chat" className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">与我对话</h3>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl">
              <ChatInterface />
            </div>
          </section>
        </main>

        {/* 页脚 */}
        <Footer />
      </div>
    </div>
  );
};

export default Home; 