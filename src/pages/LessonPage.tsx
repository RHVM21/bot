// LessonPage.tsx
import React from 'react';
import './LessonPage.css'; // Импортируем CSS-файл для стилей
import banner from '../images/banner.png'; // Импортируем изображение
import { dollarCoin, fire, gift, thumbup, twitter, telegram } from '../images';
import ScrollButton from './ScrollButton'; // Импортируем компонент ScrollButton

const LessonPage: React.FC = () => {
  // Массив данных для блоков с разными текстами и иконками
  const items = [
    { icon: dollarCoin, text: "Ежедневный сбор", subText: "+1.000 MALTIPOO" },
    { icon: fire, text: "Прогулка с MALTIPOO", subText: "" },
    { icon: telegram, text: "Подписаться на канал", subText: "+10.000 MALTIPOO" },
    { icon: telegram, text: "Реакция + комментарий", subText: "+5.000 MALTIPOO" },
    { icon: twitter, text: "Подписаться на X", subText: "+10.000 MALTIPOO" },
    { icon: twitter, text: "Лайк, репост + комментарий", subText: "+5.000 MALTIPOO" },
    { icon: thumbup, text: "Подписка на канал партнера", subText: "+10.000 MALTIPOO" },
    { icon: gift, text: "Пригласить 1 друга", subText: "+5.000 MALTIPOO" },
    { icon: gift, text: "Пригласить 10 друзей", subText: "+100.000 MALTIPOO" },
    { icon: gift, text: "Пригласить 30 друзей", subText: "+300.000 MALTIPOO" },
    { icon: gift, text: "Пригласить 100 друзей", subText: "+1M MALTIPOO" }
  ];

  // Обработчик клика
  const handleClick = (text: string) => {
    alert(`Вы нажали на блок: ${text}`);
  };

  return (
    <div className="page-container">
      <div className="header">
        <h1>Задания</h1>
      </div>
      <div className="content">
        <img src={banner} alt="Banner" className="banner-image" />
        <div className="scroll-container">
          <div className="scroll-content">
            {items.map((item, index) => (
              <ScrollButton
                key={index}
                icon={item.icon}
                text={item.text}
                subText={item.subText} // Передаем дополнительный текст
                onClick={() => handleClick(item.text)}
              />
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