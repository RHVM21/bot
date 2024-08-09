// src/pages/MovePage.tsx
import React, { useState, useEffect } from 'react';
import '../App.css';
import { dollarCoin, line, statusS, ellipse } from '../images'; // Убедитесь, что путь к изображениям правильный
import BottomNav from '../BottomNav'; // Импортируйте BottomNav

const MovePage: React.FC = () => {
  const levelNames = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Epic",
    "Legendary",
    "Master",
    "GrandMaster",
    "Lord"
  ];

  const levelMinPoints = [
    0,
    5000,
    25000,
    100000,
    1000000,
    2000000,
    10000000,
    50000000,
    100000000,
    1000000000
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(22749365);
  const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
  const pointsToAdd = 11;
  const profitPerHour = 126420;

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints(prevPoints => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

    const handleAnimationEnd = (id: number) => {
    setClicks(prevClicks => prevClicks.filter(click => click.id !== id));
  };

  

  return (
    <div className="bg-custom-orange flex justify-center">
      <div className="w-full bg-custom-orange text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="absolute top-[75px] left-0 right-0 flex justify-center z-0">
            <div className="yellow-rectangle_main">
              {/* Левая часть */}
              <div className="flex items-center section-left">
                <img src={dollarCoin} alt="Dollar Coin" className="icon" />
                <div className="text-container">
                  <span className="sub-text_main">Ваши очки</span>
                  <span className="main-text">50 000</span>
                </div>
              </div>

              {/* Линия */}
              <div className="flex items-center section-center">
                <img src={line} alt="Line" className="line" />
              </div>

              {/* Правая часть */}
              <div className="flex items-center section-right">
                <img src={statusS} alt="StatusS" className="icon" />
                <div className="text-container">
                  <span className="sub-text_main">Статус</span>
                  <span className="main-text_2">Серебро</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[110px] left-0 right-0 bottom-0 bg-white rounded-t-[25px] flex flex-col items-center pt-12">
          <div className="flex w-full max-w-4xl justify-between px-4">
          <div className="w-[45%] custom-color-1 p-6 text-center rounded-lg block-1 flex items-center">
            <img src={ellipse} alt="Ellipse" className="w-12 h-12 mr-4" /> 
            <span className="block-text">Крутить колесо</span> 
          </div>
            <div className="w-[22.5%] custom-color-1 p-3 text-center rounded-lg block-center flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold">10</span>
              <span className="text-sm text-white">Друзей</span>
            </div>    
            <div className="w-[22.5%] custom-color-1 p-3 text-center rounded-lg block-3">Настройки</div>
          </div>
        </div>
      </div>

      <BottomNav /> {/* Добавляем BottomNav сюда */}

      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: 'float 1s ease-out'
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}
    </div>
  );
};

export default MovePage;