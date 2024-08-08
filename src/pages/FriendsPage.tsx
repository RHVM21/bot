import React from 'react';
import BottomNav from '../BottomNav'; // Импортируйте BottomNav

const FriendsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-orange"> {/* Центрирование контента */}
      <h1 className="text-white text-3xl font-bold mt-16">Welcome to the Friends Page!</h1> {/* Приветственное сообщение */}
      
      <BottomNav /> {/* Размещение BottomNav */}
    </div>
  );
};

export default FriendsPage;