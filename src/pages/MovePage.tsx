// src/pages/MovePage.tsx
import React, { useState, useEffect } from 'react';
import '../App.css';
import { dollarCoin, mainCharacter } from '../images'; // Убедитесь, что путь к изображениям правильный
import Preloader from '../Preloader'; // Убедитесь, что путь к Preloader правильный
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
  const [isWalking, setIsWalking] = useState(false);
  const [loading, setLoading] = useState(true); // Состояние загрузки
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

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks(prevClicks => prevClicks.filter(click => click.id !== id));
  };

  const handleButtonClick = () => {
    setIsWalking(prevIsWalking => !prevIsWalking);
  };

  const handlePreloaderDone = () => {
    console.log('Preloader done called');
    setTimeout(() => setLoading(false), 500); // Отложенное отключение загрузки
  };

  if (loading) {
    return <Preloader onReady={handlePreloaderDone} />;
  }

  console.log('Loading is false, rendering main content');

  return (
    <div className="bg-custom-orange flex justify-center">
      <div className="w-full bg-custom-orange text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center justify-center space-x-2 mt-16">
            <span className="text-white text-lg font-geologica text-[25px]">MALTIPOO</span>
          </div>
          <div className="absolute top-[115px] left-0 right-0 flex justify-center z-0">
            <div className="yellow-rectangle">
              Да
            </div>
          </div>
        </div>

        <div className="absolute top-[150px] left-0 right-0 bottom-0 bg-white rounded-t-[25px]">
          <div className="px-4 mt-6 flex justify-between gap-2"></div>
          <div className="px-4 mt-8 flex justify-center">
            <div className="px-4 py-2 flex items-center space-x-2">
              <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
              <p className="text-2xl text-[#F1A33C]">{points.toLocaleString()}</p>
            </div>
          </div>
          <div className="px-4 mt-0 flex justify-center">
            <div className="w-80 h-80 p-0 rounded-full flex items-center justify-center" onClick={handleCardClick}>
              <div className="circle big-circle">
                <div className="circle middle-circle">
                  <div className="circle small-circle">
                    <img src={mainCharacter} alt="Main Character" className="small-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mt-0 flex justify-center relative">
            <button
              className={`start-button ${isWalking ? 'bg-orange-500' : ''}`}
              onClick={handleButtonClick}
            >
              {isWalking ? 'Закончить' : 'Начать прогулку'}
            </button>
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