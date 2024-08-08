import React from 'react';
import { NavLink } from 'react-router-dom';
import { capsuleLogo, dogLogo, dogLogoW, friends, friendsW, rating, rocketW, ratingW, rocket } from './images'; // Импортируем изображения для активных и неактивных состояний

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-7 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#FFEBCB] flex justify-around items-center z-50 rounded-xl text-xs transition-all duration-300 ease-in-out" style={{ boxShadow: '0 4px 6px rgb(243, 206, 142)' }}>
      
      <NavLink
        to="/main"
        className={({ isActive }) =>
          ` m-2 p-2 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out ${isActive ? 'bg-[#EEAD64] text-white shadow-md' : 'text-[#85827d]'}`
        }
      >
        {({ isActive }) => (
          <>
            <img src={capsuleLogo} alt="Exchange" className={`w-6 h-6 transition-all duration-300 ease-in-out`} />
            {isActive && <span className="ml-2 text-white text-xs">Page 1</span>}
          </>
        )}
      </NavLink>

      <NavLink
        to="/lesson"
        className={({ isActive }) =>
          `m-2 p-2 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out ${isActive ? 'bg-[#EEAD64] text-white shadow-md' : 'text-[#85827d]'}`
        }
      >
        {({ isActive }) => (
          <>
            <img src={isActive ? rocketW : rocket} alt="Rocket" className={`w-6 h-6 transition-all duration-300 ease-in-out`} />
            {isActive && <span className="ml-2 text-white text-xs">Задания</span>}
          </>
        )}
      </NavLink>

      <NavLink
        to="/move"
        className={({ isActive }) =>
          `m-2 p-2 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out ${isActive ? 'bg-[#EEAD64] text-white shadow-md' : 'text-[#85827d]'}`
        }
      >
        {({ isActive }) => (
          <>
            <img src={isActive ? dogLogo : dogLogoW} alt="Move to earn" className={`w-6 h-6 transition-all duration-300 ease-in-out`} />
            {isActive && <span className="ml-2 text-white text-xs">Move to earn</span>}
          </>
        )}
      </NavLink>

      <NavLink
        to="/rating"
        className={({ isActive }) =>
          `m-2 p-2 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out ${isActive ? 'bg-[#EEAD64] text-white shadow-md' : 'text-[#85827d]'}`
        }
      >
        {({ isActive }) => (
          <>
            <img src={isActive ? ratingW : rating} alt="Rating" className={`w-6 h-6 transition-all duration-300 ease-in-out`} />
            {isActive && <span className="ml-2 text-white text-xs">Рейтинг</span>}
          </>
        )}
      </NavLink>

      <NavLink
        to="/friends"
        className={({ isActive }) =>
          `m-2 p-2 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out ${isActive ? 'bg-[#EEAD64] text-white shadow-md' : 'text-[#85827d]'}`
        }
      >
        {({ isActive }) => (
          <>
            <img src={isActive ? friendsW : friends} alt="Friends" className={`w-6 h-6 transition-all duration-300 ease-in-out`} />
            {isActive && <span className="ml-1 text-white text-xs">Friends</span>}
          </>
        )}
      </NavLink>

    </div>
  );
};

export default BottomNav;