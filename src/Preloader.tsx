import React, { useEffect } from 'react';
import { mascot, title } from './images';

interface PreloaderProps {
  onReady: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onReady }) => {
  useEffect(() => {
    console.log('Preloader start');
    const timer = setTimeout(() => {
      console.log('Preloader done'); // Проверка вызова onReady
      onReady();
    }, 1000); // Увеличьте время до 3000 для теста

    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <div className="preloader">
      <div className="preloader-section center">
        <img src={mascot} alt="Mascot" className="mascot-image" />
        <img src={title} alt="Title" className="title-image" />
      </div>
      <div className="preloader-section bottom">
        <div className="loading-text">
          Загрузка<span className="dot"></span><span className="dot"></span><span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;