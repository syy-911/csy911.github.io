import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      image: '/images/project1.jpg',
      title: '项目一',
      description: '使用 React 和 Node.js 开发的全栈应用',
      link: '#'
    },
    {
      image: '/images/project2.jpg',
      title: '项目二',
      description: '基于 Vue 的电商平台',
      link: '#'
    },
    {
      image: '/images/project3.jpg',
      title: '项目三',
      description: 'Python 数据分析项目',
      link: '#'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          className="absolute inset-0"
        >
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{projects[currentIndex].title}</h3>
            <p className="mb-2">{projects[currentIndex].description}</p>
            <a href={projects[currentIndex].link} className="text-blue-400 hover:text-blue-300">
              了解更多 →
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        →
      </button>
    </div>
  );
};

export default ImageCarousel; 