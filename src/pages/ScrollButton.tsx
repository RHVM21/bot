// ScrollButton.tsx
import React from 'react';
import './ScrollButton.css'; // Импортируем CSS-файл для стилей

interface ScrollButtonProps {
  icon: string;  // Путь к иконке
  text: string;  // Основной текст для кнопки
  subText: string; // Дополнительный текст под основным
  onClick: () => void; // Обработчик клика
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ icon, text, subText, onClick }) => {
  return (
    <button className="scroll-button" onClick={onClick}>
      <img src={icon} alt="Icon" className="icon" />
      <div className="text-container">
        <p className="text">{text}</p>
        <p className="sub-text">{subText}</p>
      </div>
    </button>
  );
};

export default ScrollButton;