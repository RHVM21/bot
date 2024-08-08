import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout.tsx';
import MainPage from './pages/MainPage';
import LessonPage from './pages/LessonPage';
import MovePage from './pages/MovePage';
import RatingPage from './pages/RatingPage';
import FriendsPage from './pages/FriendsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="lesson" element={<LessonPage />} />
          <Route path="move" element={<MovePage />} />
          <Route path="rating" element={<RatingPage />} />
          <Route path="friends" element={<FriendsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;