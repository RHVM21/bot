import React, { useState, useEffect } from 'react';
import './App.css';
import { binanceLogo, dollarCoin, hamsterCoin, mainCharacter } from './images';
import Mine from './icons/Mine';
import Friends from './icons/Friends';
import Coins from './icons/Coins';

const App: React.FC = () => {
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

  return (
    <div className="bg-custom-orange flex justify-center">
      <div className="w-full bg-custom-orange text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center justify-center space-x-2 mt-20">
            <span className="text-white text-lg font-geologica text-[28px]">MALTIPOO</span>
          </div>
          <div className="absolute top-[140px] left-0 right-0 flex justify-center z-0">
            <div className="yellow-rectangle">
              Да
            </div>
          </div>
        </div>

        <div className="absolute top-[180px] left-0 right-0 bottom-0 bg-white rounded-t-[46px]">
          <div className="px-4 mt-6 flex justify-between gap-2"></div>
          <div className="px-4 mt-16 flex justify-center">
            <div className="px-4 py-2 flex items-center space-x-2">
              <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
              <p className="text-4xl text-[#F1A33C]">{points.toLocaleString()}</p>
            </div>
          </div>
          <div className="px-4 mt-14 flex justify-center">
            <div className="w-60 h-60 p-7 rounded-full flex items-center justify-center" onClick={handleCardClick}>
              <div className="circle big-circle">
                <div className="circle middle-circle">
                  <div className="circle small-circle">
                    <img src={mainCharacter} alt="Main Character" className="small-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mt-16 flex justify-center relative">
            <button className="start-button">Начать прогулку</button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#FFEBCB] flex justify-around items-center z-50 rounded-3xl text-xs">
        <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
          <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Exchange</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Mine className="w-8 h-8 mx-auto" />
          <p className="mt-1">Mine</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Friends className="w-8 h-8 mx-auto" />
          <p className="mt-1">Friends</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <Coins className="w-8 h-8 mx-auto" />
          <p className="mt-1">Earn</p>
        </div>
        <div className="text-center text-[#85827d] w-1/5">
          <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
          <p className="mt-1">Airdrop</p>
        </div>
      </div>

      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}
    </div>
  );
};

export default App;