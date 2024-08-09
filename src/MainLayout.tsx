import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import Preloader from './Preloader';

const MainLayout: React.FC = () => {
  const [isPreloading, setIsPreloading] = useState(true);
  const [hasRedirected, setHasRedirected] = useState(false); // Флаг для отслеживания перенаправления
  const navigate = useNavigate();

  useEffect(() => {
    if (isPreloading) {
      const timer = setTimeout(() => {
        setIsPreloading(false);
        if (!hasRedirected) {
          navigate('/move'); // Перенаправление на MovePage после завершения Preloader
          setHasRedirected(true); // Устанавливаем флаг, что перенаправление выполнено
        }
      }, 1000); // Время для показа Preloader, измените при необходимости

      return () => clearTimeout(timer);
    }
  }, [isPreloading, hasRedirected, navigate]);

  return isPreloading ? (
    <Preloader onReady={() => setIsPreloading(false)} />
  ) : (
    <div className="relative min-h-screen">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default MainLayout;