import React from 'react';
import './LessonPage.css'; // Импортируем CSS-файл для стилей
import banner from '../images/banner.png'; // Импортируем изображение

const LessonPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="header">
        <h1>Задания</h1>
      </div>
      <div className="content">
        <img src={banner} alt="Banner" className="banner-image" />
        <div className="scroll-container">
          <div className="scroll-content">
            {[...Array(10)].map((_, index) => (
              <div className="scroll-item" key={index}>
                <p>{index + 1}</p> {/* Упрощенный контент */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        {/* Ваш контент для BottomNav */}
      </div>
    </div>
  );
};

export default LessonPage;