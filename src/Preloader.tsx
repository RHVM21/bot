import React, { useEffect } from 'react';

interface PreloaderProps {
  onReady: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onReady }) => {
  useEffect(() => {
    // Задержка для имитации предзагрузки (например, 2 секунды)
    const timer = setTimeout(() => {
      onReady();
    }, 2000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <div className="preloader">
      <div className="hello-screen">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Preloader;